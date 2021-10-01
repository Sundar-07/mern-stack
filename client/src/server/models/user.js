const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20
    },
    email:{
        type:String,
        required:true,
        minlength:3,
        maxlength:200,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:1024,
        
    }
});

const User = mongoose.model("User",userSchema);

exports.User = User;