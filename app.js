'use strict';

const MicaquoteHelper = require('./MicaquoteHelper');

const data = require('./data/data.json');

let micaquote = new MicaquoteHelper(data.quotes, data.dialogs);

var express = require('express')
var app = express();

app.use(express.static('.'));

app.listen(process.env.PORT, process.env.IP, (req, res) => console.log('started'));

