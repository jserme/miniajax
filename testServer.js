var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser())

app.use(function(req, res, next) {
  console.log(req.method, req.url, req.body)
  next()
})

app.get('/', function(req, res) {
  res.send(fs.readFileSync('./test.html', {
    encoding: 'utf-8'
  }));
});

app.get('/index.js', function(req, res) {
  res.send(fs.readFileSync('./index.js', {
    encoding: 'utf-8'
  }));
});

app.get('/get', function(req, res) {
  res.send('ok')
});

app.post('/post', function(req, res) {
  res.send('ok')
});

app.listen(4345);
console.log('test server is running at http://localhost:4345')
