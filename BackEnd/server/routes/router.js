
const express = require('express');
const route = express.Router();
const app = express();
// const services = require('../services/service');

const axios = require('axios');



const controller = require('../controller/controller');

route.get('/',(req,res)=>{
    axios.get('http://localhost:3000/api/users')
    .then( resp=>{
        
   res.render('index',{user:resp.data});

    })
    .catch(err=>{
        res.send(err);
    })
});

route.post('/api/users',controller.create);
route.get('/api/users',controller.list);


module.exports=route;