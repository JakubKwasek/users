import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import {Users} from './app/components/users';

let app = express();

Users();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/users', function (req, res) {
  res.send('GET request to the homepage');
});

app.listen(3000, '0.0.0.0');

console.log('Server is running at http://0.0.0.0:3000/');
