const User = require('../model/user_model');

exports.signup = (req,res,next)=>{
    User.create({
        email: req.body.email,
        password: req.body.password
    })
    .then(result=>{
        return res.status(201).json(result);
    }).catch(err=>{
        return res.status(500).json(err);
    })
}

exports.signin = (req,res,next)=>{
     User.findOne({
         email: req.body.email,
         password: req.body.password
     }) 
     .then(result=>{
        return res.status(201).json(result);
     }).catch(err=>{
        return res.status(402).json(err);
     })
}