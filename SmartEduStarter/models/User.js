import mongoose from "mongoose";
import bcrpyt from 'bcrypt';

const schema = new mongoose.Schema({
    name : {
        type : "string"
    },
    email : {
        type : "string",
        required : true
    },
    password : {
        type : "string",
        required : true
    },
    role : {
        type : mongoose.Schema.Types.Number,
        required : true
    },
    enrolled_courses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'courses',
    }]
})

schema.pre('save', function(next){
    if (!this.isModified('password')) return next();
    let user = this
    bcrpyt.hash(user.password, 10, (err,hash) => {
        user.password = hash
        next()
    })
})

export default mongoose.model('users', schema)