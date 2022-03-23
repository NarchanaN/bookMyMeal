const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://archana:as%40cluster@cluster0.1bsis.mongodb.net/MongoAtlasDemo')
.then(()=>{
    console.log("sucess");
}).catch(err=>{
    console.log(err);
    console.log("connection failed");
});



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const adminRouter = require('./routes/admin_router');
const categoryRouter = require('./routes/category_router');
const packageRouter = require('./routes/package_router');
const userRouter = require('./routes/uase_router');


app.use('/admin',adminRouter);
app.use('/category',categoryRouter);
app.use('/package',packageRouter);
app.use('/user',userRouter);


const port=process.env.port || 6000

app.listen(port,()=>{
    console.log('server is running');
})