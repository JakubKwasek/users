import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/tools');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/components/');

import Users from './app/components/users';
import Home from './app/components/home';
new Users(app, mongoose);
new Home(app, mongoose);

app.listen(3000, '0.0.0.0');

console.log('Server is running at http://0.0.0.0:3000/');
