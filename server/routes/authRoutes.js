const express = require('express');
const router = express.Router();
const userModel = require('../models/user');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/authMiddleware');
require('dotenv').config();
router.post("/register",async (req,res)=>{
  let {username,email,password,bio} = req.body;
  try {
    let withemail = await userModel.findOne({email});
    if(withemail) return res.send("User already exists");
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt,async function(err, hash) {
        if(hash){
          let registeredUser = await userModel.create({
            username,
            email,
            password:hash,
            bio
          })
          res.status(201).send("User registered successfully");
        }
        else{
          res.send("Something went wrong")
        }    
      });
  });
  } catch (error) {
    res.send(error);
  }
});

router.post("/login",async (req,res)=>{
  let {email,password} = req.body;
  try {
    let withemail = await userModel.findOne({email});
    if(!withemail) return res.send("Something went wrong");
    bcrypt.compare(password, withemail.password, function(err, result) {
      if(!result){
        res.send("Something went wrong")
      }
      else{
        var token = jwt.sign({
          _id:withemail._id,
          username:withemail.username,
          email:withemail.email
         }, process.env.JWT_SECRET);
        res.cookie("token",token);
        res.send("You can Login")
      }
  });
  } catch (error) {
    res.send(error);
  }
})

router.get("/home",verifyToken,(req,res)=>{
  try {
    const decode = req.user;
    res.json({
      username:decode.username,
      email:decode.email,
      bio:decode.bio
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({error:"Something went wrong!"})
  }
})

module.exports = router;