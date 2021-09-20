const config = require('config');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const authRoute = require('./routes/auth')
const port = process.env.PORT || 3000;
Task = require('./api/models/todoListModel');
bodyParser = require('body-parser');
mongoose.Promise = global.Promise;

app.use(express.json())
app.use('/api/auth', authRoute)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); 
routes(app);

mongoose.connect('mongodb://localhost/final')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));


app.listen(port, () => console.log(`Listening on port ${port}...`));