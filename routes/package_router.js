const express = require('express');
const router = express.Router();
const packageController = require('../controller/packageController');

const multer = require('multer');
var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function(req,file,cb){
        cb(null,Date.now()+''+file.originalname);
    }
})
var upload = multer({storage: storage});
router.post('/add',upload.single('package_image'),packageController.add);

module.exports = router;