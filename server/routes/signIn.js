const { User } = require("../models/user");
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

//post data
router.post("/", async (req, res) => {

    const { email, password } = req.body;
    user = new User({
        email,
        password,
      });

    try {
      let user = await User.findOne({email:req.body.email});

      if(!user) return res.status(400).send("Invalid email or password")

     const validPassword = await bcrypt.compare(req.body.password,user.password)
     if(!validPassword) return res.status(400).send("Invalid email or password")
        //token will created
    const secret_key = process.env.SECRET_KEY;

    const token = jwt.sign({_id:user._id,email:user.email,name:user.name},secret_key);
    res.send(token);

    } catch (error) {
      res.status(500).send(error.message);
      console.log(error.message);
    }
  });

module.exports = router;