const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const packageSchema = new mongoose.Schema({
    package_name:{
        type: String,
        required: true
    },
    package_image:{
        type: String,
        required: true
    },
    package_qty:{
        type: Number,
        required: true
    },
    package_discount:{
        type: Number,
        required: true
    },
    
    package_price:{
        type: Number,
        required: true
    },
    package_desc:{
        type: String,
        required: true
    },
    categoryId:Schema.Types.ObjectId
})
module.exports = mongoose.model("package",packageSchema);