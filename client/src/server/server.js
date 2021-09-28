const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
//for env set
require('dotenv').config()
//from models
const User = require('./models/user');

const app = express()

//db connection

const mongoURI = process.env.MONGO_URI;

//body-parser for middleware
const urlEncodedParser = body_parser.urlencoded({extended:false})
app.use(body_parser.json(),urlEncodedParser)


//second parameter remove deprecation errors

mongoose.connect(mongoURI,{useNewUrlParser: true,useUnifiedTopology:true})
.then((res)=>{
    app.listen(process.env.PORT || 5000, () => console.log(`Server is running on ${process.env.PORT}`))
})
.catch((err)=>{
    console.log(`Error occured:${err}`);
})

// HTTP functionalities

app.post('/register',async (req,res) => {
    const user = req.body;

    //check if email and username already exists
    const takenUserName = await User.findOne({username:user.username});
    const takenEmail = await User.findOne({email:user.email});

    if(takenEmail || takenUserName){
        res.json({message:"Already exists"})
    }else{
        //password string to hash
        user.password = bcrypt.hash(req.body.password,10);

        const dbUser = User({
            username:user.username.toLowerCase(),
            email:user.email.toLowerCase(),
            password:user.password
        })

        dbUser.save()
        res.json({message:"Success"})
    }
});

//login

app.post('/login',(req,res)=>{
    const userLoggingIn = req.body;

    User.findOne({username:userLoggingIn.username}).then(dbUser => {
        if(!dbUser){
            res.send("Invalid username or Password!!")
        }
        bcrypt.compare(userLoggingIn.password,dbUser.password).then(isCorrect => {
            if(isCorrect){
                const payload = {
                    id:dbUser._id,
                    username:dbUser.ussername,
                }
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {expiresIn:86400},
                    (err,token) => {
                        if(err) return res.json({message:err})
                        return res.json({
                            message:"Success",
                            token:"Bearer " + token
                        })
                    }
                )
            }
            else{
                return res.json({
                    message:"Invalid username or password"
                })
            }
        })
    })
});

//verify jwt token

const verifyJWT = (req,res,next) => {
    const token = req.headers["x-access-token"]?.split(' ')[1]

    if(token){
        jwt.verify(token,process.env.PASSPORTSECRET,(err,decoded)=>{
            if(err) return res.json({
                message:"Failed to Authenticate",
                isLoggedIn:false
            })
            req.user = {};
            req.user.id = decoded.id
            req.user.username =decoded.username
            next()
        })  
    }

    else{
        return res.json({
            message:"Incorrect token given",
            isLoggedIn:false
        })
    }
}

//accessing currentuser

app.get('/getUsername',(req,res)   => {
    res.json({
        isLoggedIn:true,
        username:req.user.username
    })
})  
