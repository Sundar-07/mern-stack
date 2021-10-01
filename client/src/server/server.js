const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express()
//for env set
require('dotenv').config()
//from models
const Todo = require('./models/todo')

//pass json in the request
app.use(cors())
app.use(express.json())

//routes config
const todos = require('./routes/todos');

app.use("/api/todos",todos)

app.get("/",(req,res)=>{
    res.send("Welcome to MERN stack training")
})


//db connection

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 5000;



app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
});



mongoose.connect(mongoURI,{useNewUrlParser: true,useUnifiedTopology:true})
.then(()=>{
    console.log('MongoDB connection is established..')
})
.catch((err)=>{
    console.log(`Error occured in MongoDB connection:${err}`);
})

// HTTP functionalities

app.get("/",(req,res) => {
    res.send("Hello this is server")
});