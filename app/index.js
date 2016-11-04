'use strict';

if (process.env.NODE_ENV === 'undefined') {
    console.error('You must define an NODE_ENV to run in');
    process.exit(1);
}

const config = require('config');
const logger = require('./lib/logger')(process.env.LOG_PATH, process.env.LOG_LEVEL);


const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express();

//routes
const routePayment = require('./routes/payment');

app.use(helmet());
app.use(bodyParser.json());

logger.info('***Running in ' + process.env.NODE_ENV.toUpperCase() + ' on Node ' + process.version + '***');


/**
 * default route
 */
app.get('/', function (req, res) {
    res.json({status: 'ok'});
});

/**
 * payment routes
 */
app.use('/payment', routePayment);


app.listen(process.env.NODE_PORT, function () {
    logger.info('listening on port', process.env.NODE_PORT);
});
