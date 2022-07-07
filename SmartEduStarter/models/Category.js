import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    "name" : {
        type : "string",
        required : true,
        unique : true
    }
})

export default mongoose.model('categories', categorySchema)