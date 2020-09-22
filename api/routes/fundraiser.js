const express = require('express');
const router = express.Router();
const Fundraiser = require('../../Models/Fundraiser');
const fundraiserHandler=  require('../handler/fundraiserHandler');
const isAuth = require('../../middleware/is-auth');
router.post('/start',isAuth,fundraiserHandler.postFundraiser);
/**
* @desc Route to start Fundraiser
* @route /fundraiser/start
* @type POST
* @access "USER"
*/
router.get('/',isAuth,fundraiserHandler.getAllFundraiser);
/**
* @desc Gets all Fundraiser
* @route /fundraiser/
* @type GET
* @access "USER"
*/
router.patch('/update/:fundId',isAuth,fundraiserHandler.postFundraiser);
/**
* @desc Update Fundraiser data
* @route /fundraiser/update/:fundId
* @type PATCH
* @access "USER"
*/
module.exports = router;