let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const gifts = require('../models/gifts');

let gift = require('../models/gifts');

router.get('/',(req,res,next)=>{
    gifts.find((err, giftlist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('gifts',{
                title:'Gift List', 
                giftlist: giftlist})
        }
    });
});
module.exports=router;