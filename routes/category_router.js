const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');

const multer = require('multer');
var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function(req,file,cb){
       cb(null,Date.now()+''+file.originalname);
    }
})
var upload = multer({storage: storage});

router.post('/add',upload.single('cat_image'),categoryController.add);
router.get('/view',categoryController.view);
router.post('/delete',categoryController.delete);
router.post('/edit',upload.single('cat_image'),categoryController.edit);




module.exports = router;