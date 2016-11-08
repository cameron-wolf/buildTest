var express = require('express');
var router = express.Router();
var serverGet = require('./get.js');

console.log('Route');
router.get('/hi',function(req,res){
	serverGet.getHi(req,res);
});

router.get('/bye',function(req,res){
	serverGet.getBye(req,res);
});

router.all('*',function(req,res){
	res.sendStatus(404);
	return;
});

module.exports = router;