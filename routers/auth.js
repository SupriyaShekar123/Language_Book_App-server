const express = require("express");
const {Router} = express
const User= require ("../models").user;
const bcrypt = require ('bcrypt')
const {toJWT} = require('../auth/jwt')

console.log(toJWT);

const router = new Router()

// connect with login

router.post("/", async ( req, res, next)=>{
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