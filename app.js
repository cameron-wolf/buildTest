var express = require('express');
var multer = require('multer');
var bodyparser = require('body-parser');
var cors = require('cors');
var index = require('./index.js');
//var v1 = require('./Routes/v1');

var app = express();



// **********************************************************
// parser

app.use(bodyparser.json({limit: '100mb'}));
app.use(bodyparser.urlencoded({limit: '100mb', extended: true}));

app.use(multer({ inMemory: true }));

app.use(cors());


app.use('/v1/',index);
app.use('/',index);

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('\n  listening at http://%s:%s', host, port);

});

module.exports = app;