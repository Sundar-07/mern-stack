const { User } = require("../models/user");
const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();


//post data
router.post("/", async (req, res) => {
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({email:req.body.email})
      if(user) return res.status(400).send("User with that email already exists")

     user = new User({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password,salt);
      await user.save()
      const secret_key = process.env.SECRET_KEY;

    const token = jwt.sign({_id:user._id,email:user.email,name:user.name},secret_key);
    res.send(token);
      res.send("User created")

    } catch (error) {
      res.status(500).send(error.message);
      console.log(error.message);
    }
  });

module.exports = router;