const Admin = require('../model/admin_model');

exports.signup = (req,res)=>{
    // console.log(req.body);
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    Admin.create({
        username:username,
        email:email,
        password:password
    })
    .then(result=>{
        return res.status(200).json(result);
    }).catch(err=>{
         console.log(err);
    })
}

exports.signin = (req,res)=>{
    Admin.findOne({
        email: req.body.email,
        password: req.body.password
    })
    .then(result=>{
          return res.status(201).json(result);
    }).catch(err=>{
          return console.log(err);
    })
}
