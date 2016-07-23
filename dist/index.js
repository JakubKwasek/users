'use strict';

var _http = require('http');

var _express = require('express');

var _bodyParser = require('body-parser');

var _mongoose = require('mongoose');

(0, _http.createServer)(function (req, res) {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.end('Hello World');
}).listen(3000, '127.0.0.1');

console.log('Server is running!aa at http://127.0.0.1:3000/');