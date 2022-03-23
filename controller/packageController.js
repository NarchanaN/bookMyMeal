const Package=require("../model/package_model");

exports.add = (req,res,next)=>{
    Package.create({
        package_name: req.body.package_name,
        package_image: 'http://localhost:6000/images'+req.file.filename,
        package_price: req.body.package_price*1,
        package_qty: req.body.package_qty*1,
        package_desc: req.body.package_desc,
        package_discount: req.body.package_discount*1,
        categoryId: req.body.categoryId 
    })
    .then(result=>{
        return res.status(200).json(result);
    }).catch(err=>{
        return res.status(402).json(err);
    })
}