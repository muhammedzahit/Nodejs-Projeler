import mongoose from 'mongoose'
const ObjectId = mongoose.Schema.Types.ObjectId

const Comment = mongoose.Schema({
    id: { type: ObjectId},
    text : {type : String},
    post_id : {type : ObjectId, ref : "posts"}
  });

export default mongoose.model('comments', Comment)