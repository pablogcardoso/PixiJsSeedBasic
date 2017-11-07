var express = require('express')
var app = express()
//configuro URLs

app.use('/', express.static(__dirname + '/'));

app.get('/main', function (req, res) {
  
   res.sendfile(__dirname + '/index.html');
 });
 
//run
app.listen(9001, function () {
  console.log('app listening on port 9001!')
})

