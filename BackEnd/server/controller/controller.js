var data=require('../models/model')
const fetch=require('node-fetch');



exports.list = (req, res) => {
    data.find()
        .limit(10)
        .exec()
        .then(user=>{
            res.send(user);
        })
        .catch(err=>{
            res.status(500).send('error');
        })
}

exports.create=(req,res)=>{


fetch('https://api.wazirx.com/api/v2/tickers')
.then( res => res.json())
.then( async json =>{
    let data1 = Object.keys(json).map(key => json[key]);
    let numRows = await data.estimatedDocumentCount(function(err, count) {
        return count;
    });
    let usrs = [];
    for (let index = 0; index < data1.length; index++) {
        let usr = {};
        usr.id = numRows + index + 1;
        usr.name = data1[index].name;
        usr.last = data1[index].last;
        usr.buy = data1[index].buy;
        usr.sell = data1[index].sell;
        usr.volume = data1[index].volume;
        usr.units = data1[index].base_unit;
        usrs.push(usr);
    }
    data.insertMany(usrs, function(err, docs) {
        if( err )
            res.status(500).send(err);
        else
            res.send(docs)
    });
        
})
.catch((err)=>console.log(err));
}