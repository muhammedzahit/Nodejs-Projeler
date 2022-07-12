import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId

const User = mongoose.Schema({
    id : {type : ObjectId},
    fullName : {type : String},
    photoUrl : {type : String}
})

export default mongoose.model('users', User)