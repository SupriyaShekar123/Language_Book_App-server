const express = require("express");
const User = require("../models/").user;
const Books = require("../models/").books;
const { Router } = express;
const router = new Router();
const bcrypt = require ('bcrypt')

const {toJWT} = require('../auth/jwt')

router.get("/user/:id", async function getUserBooks(req, res, next) {
  console.log("VALUE OF ID", req.params.id);
  const Id = req.params.id;
  try {
    const getData = await User.findByPk(Id, {
      include: [Books],
      order: [[Books, "createdAt", "DESC"]],
    });

    res.json(getData);
  } catch (e) {
    //next(e);
    console.log("error", e.message);
  }
});

// connect with login

router.post("/login", async ( req, res, next)=>{
  // getparams => email and password validate
  const {email,password} = req.body;
  if(!email || !password){
      res.status(400).send('missing login parameters')
  }else{
          const user = await User.findOne({where : {email}})
          //look in db for user with the email

          if(!user){
              res.status(404).send('User with that email adress not found')
      }else {
          // check if password match

          const passwordsMatch = bcrypt.compareSync(password, user.password)
          if (passwordsMatch){
              const token= toJWT({userId: user.id})
              //guy exist have to log him in
              console.log('right password');

                  delete user.dataValues["password"]; // don't send back the password hash
                  return res.status(200).send({ token, ...user.dataValues });
              //create JWT
          }else{
              res.status(400).send("Wrong Password")
          }
      }  
  }
})
module.exports = router;
