const express = require('express');
const morgan = require('morgan');

const dotenv=require('dotenv');
const path = require('path');


const connectDB=require('./server/database/connection');


const app= express();


dotenv.config({path:'config.env'})
const Port=process.env.port || 3000;

app.use(morgan('tiny'));

connectDB();




app.set('view engine','hbs');



app.use(express.static('../asset'));
app.use('/css',express.static(path.resolve(__dirname,'../asset/css')))
app.use('/js',express.static(path.resolve(__dirname,'../asset/js')))


//load router

app.use('/',require('./server/routes/router'));




app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`);
});