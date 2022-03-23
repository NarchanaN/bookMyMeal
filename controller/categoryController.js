const Category = require('../model/category_model'); 

exports.add = (req,res,next)=>{
    Category.create({
        cat_name: req.body.cat_name,
        cat_image: 'http://localhost:6000/rimages'+req.file.filename
    })
    .then(result=>{
       return res.status(200).json(result); 
    }).catch(err=>{
        return res.status(402).json({mesage: 'failed'});
    })
}

exports.view = (req,res,next)=>{
    Category.find()
    .then(result=>{
       return res.status(200).json(result);
    }).catch(err=>{
        return res.satus(402).json(err);
    })
}

exports.delete = (req,res,next)=>{
    Category.deleteOne({_id: req.body.cid})
    .then(result=>{
       if(result.deletedCount)
          return res.status(200).json(result);
       else
           return res.staus(402).json({mesage: 'not delete'});
    }).catch(err=>{
          return res.staus(500).json(err);
    })
}

exports.edit = (req,res,next)=>{
    Category.updateOne({
        _id: req.body.cat_id
    },
    {  
    cat_name:req.body.cat_name,
        cat_image: 'http://localhost:3000/images'+req.file.filename
    })
    .then(result=>{
       return res.status(201).json(result);
    }).catch(err=>{
       return res.status(402).json({mes: 'failed'});
    })
}