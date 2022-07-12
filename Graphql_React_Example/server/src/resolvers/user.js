const {nanoid} = require('nanoid')
const {pipe,filter} = require('@graphql-yoga/node')
module.exports = {
	User: {
		id: (p,a,context) => p._id,
		posts: async (parent, args, context) =>{
			let posts = await context.database.Post.find({user_id : parent._id})
			return posts
		}
	},

	Query: {
		users: async (p, a, context) => await context.database.User.find({}),
		user: async (parent, args, context) =>
			await context.database.User.findOne({_id : args.id}),
	},

	Mutation: {
		addNewUser: async (p, a, context) => {
			let newUser = new context.database.User({
				fullName : a.fullName,
				photoUrl : a.photoUrl
			})

			await newUser.save()
			let count = await context.database.User.count()
			context.pubSub.publish("userCreated", newUser);
			context.pubSub.publish("userCount", count);
			return newUser;
		},
		updateUser: async (p, a, context) => {
			await context.database.User.findOneAndUpdate({_id : a.data.id}, a.data)
			let user = await context.database.User.findOne({_id : a.data.id})
			return user
		},
		deleteUser: async (p, a, context) => {
			let user = await context.database.User.findOneAndDelete({_id : a.id})
			
			context.pubSub.publish("userCount", await context.database.User.count());

			return user;
		},
		deleteAllUsers: async (p,a,context) => {
			let count = await context.database.User.count()
			await context.database.User.remove({})
			return count;
		},
	},

	Subscription: {
		userCreated: {
			subscribe: (_, args, context) =>
				context.pubSub.asyncIterator("userCreated"),
			resolve: (payload) => payload,
		},
		userCount: {
			subscribe: (_, args, context) =>
				context.pubSub.asyncIterator("userCount"),
			resolve: (payload) => payload,
		},
		watchUserDetailChanged: {
			subscribe: (_, args, context) =>
				pipe(
					context.pubSub.asyncIterator("watchUserDetailChanged"),
					filter((value) => {
						console.log(value);
						return value.id == args.id;
					})
				),
			resolve: (value) => value,
		},
	},
};
