var express = require('express');
var router = express.Router();
var ticketController = require("./ticketController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// Create a ticket
router.post('/createTicket', function(req, res, next) {
   ticketController.createTicket(req,res);
});




module.exports = router;
