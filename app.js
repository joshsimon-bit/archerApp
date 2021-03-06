'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const session = require('express-session');
app.use(session({
    secret: 'adventureawaits',
    resave: false,
    saveUninitialized: false,
    is_logged_in: false,
}));

const helmet = require('helmet');
app.use(helmet());

const morgan = require('morgan');
const logger = morgan('tiny');
app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});

const rootController = require('./routes/index');
const locationsController = require('./routes/locations');
const bookingsController = require('./routes/bookings');
const itineraryController = require('./routes/itinerary');
const userController = require('./routes/users')

app.use('/users', userController);
app.use('/itinerary', itineraryController);
app.use('/bookings', bookingsController);
app.use('/locations', locationsController)
app.use('/', rootController);