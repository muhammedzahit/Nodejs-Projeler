// type Post {
// 	id: ID!
// 	title: String
// 	user_id: ID!
// 	comments: [Comment]
// 	user: User
// 	description : String
// 	short_description : String
// }
import mongoose from "mongoose"
const ObjectId = mongoose.Schema.Types.ObjectId

const Post = mongoose.Schema({
    id : {type : ObjectId},
    title : {type : String},
    user_id : {type : ObjectId,ref : 'users' },
    description : {type : String}
})

export default mongoose.model('posts', Post)