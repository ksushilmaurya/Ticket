var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var MongoClient = require('mongodb').MongoClient,format=require('util').format;
var url = 'mongodb://localhost:27017/masterDb';
router.post('/registerUser',function(req,res,next){
	console.log("User are going to register");
	var name = req.body.name;
	var email = req.body.email;
	var phone = req.body.phone;
	var company = req.body.company;

	var item = {

			name : name,
			email : email,
			phone : phone,
			company :company
	};

	if(email)
	{
 		MongoClient.connect(url,function(err,db){
		 console.log("user going to insert - ",item);
		 db.collection('User').insert(item,function(err,result){
			console.log('insert done', result);
			db.close();
		});
	});
	} else 
	{
		return res.send({status: 200, msg: "Plase enter a email"})
	}
});

module.exports = router;
