const { pipe, filter } = require("@graphql-yoga/node");
const { nanoid } = require("nanoid");
module.exports = {
	Comment: {
		id : (parent,args,context) => parent._id,
		post: async (parent, args, context) =>
			await context.database.Post.find({ _id: parent.post_id }),
	},

	Query: {
		comments: async (parent, args, context) =>
			await context.database.Comment.find({}),
		comment: async (parent, args, context) =>
			context.database.Comment.find({ _id: args.id }),
	},

	Mutation: {
		addNewComment: async (parent, args, context) => {
			try {
				let post_id = args.post_id;
				let filter = {};
				if (!args.post_id && args.post_title) {
					filter = { title: args.post_title };
				} else {
					filter = { _id: args.post_id };
				}

				let post = await context.database.Post.findOne(filter);
				
				let user = await context.database.User.findOne({ _id: post.user_id });

				let comment = new context.database.Comment({
					post_id: post._id,
					text: args.text,
				});

				await comment.save();
				console.log("ssdsa")

				context.pubSub.publish("watchNewComment", comment);
				context.pubSub.publish("watchUserDetailChanged", user);
				return comment;
			} catch (error) {
				console.log(error);
			}
			return null;
		},
		updateComment: async (parent, args, context) => {
			await context.database.Comment.findOneAndUpdate(
				{ _id: args.data.id },
				args.data
			);
			let comment = await context.database.Comment.findOne({
				_id: args.data.id,
			});
			return comment;
		},
		deleteComment: async (parent, args, context) => {
			let comment = await context.database.Comment.findOneAndDelete({
				_id: args.id,
			});
			return comment;
		},
		deleteAllComments: async (parent, args, context) => {
			let count = await context.database.Comment.count();
			await context.database.Comment.remove({});
			return count;
		},
	},
	Subscription: {
		watchNewComment: {
			subscribe: (p, a, c) => {
				return pipe(
					c.pubSub.asyncIterator("watchNewComment"),
					filter((v) => v.post_id == a.post_id)
				);
			},
			resolve: (v) => v,
		},
	},
};
