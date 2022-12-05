let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const gifts = require('../models/gifts');


let giftsController = require('../controller/gifts');

router.get('/',giftsController.displayGiftList);

/*Create*/
router.get('/add',giftsController.displayAddPage);
router.post('/post',giftsController.processAddPage);

/*Edit*/
router.get('/edit/:id',giftsController.displayEditPage);
router.post('/edit/:id',giftsController.processEditPage);

/*Delete*/
router.get('/delete/:id',giftsController.performDelete);

module.exports=router;