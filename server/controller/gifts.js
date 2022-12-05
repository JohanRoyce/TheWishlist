let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


let gifts = require('../models/gifts');

module.exports.displayGiftList = (req,res,next)=>{
    gifts.find((err, giftlist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('gifts/gifts',{
                title:'Gift List', 
                giftlist: giftlist})
        }
    });
};

module.exports.displayAddPage = (req,res,next)=>{
    res.render('gifts/add',{
        title: 'Add Gift'})
};

module.exports.processAddPage = (req,res,next)=>{
    let newGift = gifts ({
        "name":req.body.name,
        "retailer":req.body.retailer,
        "price":req.body.price,
        "discount":req.body.discount
    });
    gifts.create(newGift,(err,gifts) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/gifts/gifts');
        }
    });
};

module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    gifts.findById(id,(err,giftToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('gifts/edit',{title:'Edit item', gifts:giftToEdit});
        }
    });
};

module.exports.processEditPage = (req,res,next)=>{
    let id=req.params.id;
    let updateGift= gifts({
        "id":id,
        "name":req.body.name,
        "retailer":req.body.retailer,
        "price":req.body.price,
        "discount":req.body.discount
    });
    gifts.updateOne({_id:id},updateGift,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/gifts/gifts');
        }
    });
};

module.exports.performDelete = (req,res,next)=>{
    let id=req.params.id;
    gifts.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/gifts/gifts');
        }
    });
};