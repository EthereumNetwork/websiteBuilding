var express = require('express');
var history = require('connect-history-api-fallback');

var app = express();

app.use(history())
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Server started');
});