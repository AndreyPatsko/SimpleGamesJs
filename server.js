const express = require ('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');


const app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, 'client')));



app.listen(3000);
console.log('Server started at 3000 port');

module.exports = app;