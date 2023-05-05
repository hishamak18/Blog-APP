const User = require('../models/User');
const CryptoJs = require('crypto-js')
const router = require('express').Router();
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config()
//Register

router.post('/register',async (req,res)=>{
    const newUser = new User ({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
    })
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)

    }
    catch(err){
        res.status(500).json(err )
    }
})

// Login

router.post('/login',async (req,res)=>{
    try{

        const user  = await User.findOne({username : req.body.username});
        !user && res.status(401).json('wrong username')
        console.log('nadakoola mone user name thetta')

        const hashedPassword =CryptoJs.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const orgPassword = hashedPassword.toString(CryptoJs.enc.Utf8)
        orgPassword!== req.body.password &&
         res.status(401).json('wrong password');

         const accesToken = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SEC);


         const {password, ...others} = user._doc; 
         
        res.status(200).json({...others,accesToken})
        console.log(user)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router; 