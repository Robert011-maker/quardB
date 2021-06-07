var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var model = mongoose.model;

const schema = new Schema({
    id:{
        type: Number,
        default: 1,
        unique: true
    },
    name:{
        type:String
    },
    last:{
        type:String,
        unique:true
    },
    buy:{
        type:Number
    },
    sell:{
        type:Number
    },
    volume:{
        type:Number
    },
    units:{
        type:String
    }
});

var data = model('data',schema);
module.exports=data;