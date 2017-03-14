var express = require('express');  
var request = require('request');

router = express(); 

// Unsafely enable cors
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// proxy request middleware
// https://blog.javascripting.com/2015/01/17/dont-hassle-with-cors/
router.use('/', function(req, res) {  
  var url = req.url.replace('/?proxyUrl=','');
  req.pipe(request(url)).pipe(res);
});

router.listen(process.env.PORT || 8080);  

console.log('API running at localhost:8080/');
