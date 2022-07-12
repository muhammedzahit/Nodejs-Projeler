const {nanoid} = require('nanoid')
const {pipe,filter} = require('@graphql-yoga/node')


module.exports = {
	Post: {
		id : (p,a,c) => p._id,
		comments: async (parent, args, context) =>
			await context.database.Comment.find({post_id : parent._id}),
		user: async (parent, args, context) =>
			await context.database.User.findOne({_id : parent.user_id}),
		short_description : (parent, args, context) =>
			parent.description.slice(0,100)
	},
	Query: {
		posts: async (p, a, context) => {
			let searchKey = ""
			if(a.searchKey)
				searchKey = a.searchKey
			let posts = await context.database.Post.find({})
			console.log(posts)
			posts = posts.filter((p) => p.title.toLowerCase().startsWith(searchKey.toLowerCase()))
			return posts
		}, 
		post: async (parent, args, context) =>
			await context.database.Post.findOne({_id : args.id})
	},
	Mutation: {
		addNewPost: async (p, a, context) => {
			let user_id = a.user_id;
			let filter = {}
			if (a.user_fullName && !a.user_id){
				filter = {fullName : a.user_fullName}
			}
			else{
				filter = {_id : a.user_id}
			}
			
			let user = await context.database.User.findOne(filter)
			
			let new_post = new context.database.Post({
				title : a.title,
				user_id : user._id,
				description : a.description
			})
			
			await new_post.save()

			context.pubSub.publish("watchUserDetailChanged", user);
			context.pubSub.publish("watchNewPosts", new_post);
			return new_post;
		},
		updatePost: async (p, a, context) => {
			await context.database.Post.findOneAndUpdate({_id : a.data.id}, a.data)
			let post = await context.database.Post.findOne({_id : a.data.id})
			return post
		},
		deletePost: async (p, a, context) => {
			let post = await context.database.Post.findOneAndDelete({_id : a.id})
			return post;
		},
		deleteAllPosts: async (parent,args,context) => {
			let count = await context.database.Post.count()
			await context.database.Post.remove({})
			return count;
			
		},
	},
	Subscription:{
		watchNewPosts : {
			subscribe : (p,a,c) => {
				return pipe(
					c.pubSub.asyncIterator('watchNewPosts'),
					filter((v) => v.title.toLowerCase().startsWith(a.searchKey.toLowerCase()))
				)
			},
			resolve : (v) => v
		}
	}
};	
