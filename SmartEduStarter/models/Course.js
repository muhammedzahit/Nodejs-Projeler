import {mongoose} from "mongoose";

const Course = new mongoose.Schema({
  title: {
    type : String,
    unique : true,
    required : true
  },
  description: {
    type : String,
    default : " "
  },
  date: {
    type : Date,
    default : Date.now()
  },
  category : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'categories'
  },
  teacher : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'users'
  }
});

export default mongoose.model('courses', Course)