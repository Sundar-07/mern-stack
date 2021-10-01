const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    author:String,
    uid:String,
    isComplete:Boolean,
    date:{type:Date,default:new Date()}
});

const Todo = mongoose.model("Todo",todoSchema)

exports.Todo = Todo;