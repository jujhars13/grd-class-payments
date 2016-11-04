'use strict';
const router = require('express').Router();

const logger = require('../lib/logger')(process.env.LOG_PATH, process.env.LOG_LEVEL);
const sendEmail = require('../models/email');
const emailSender = new sendEmail();

/**
 * to send a payment email out
 */
router.post('/', function (req, res) {
    let obj = {
        headers: req.headers,
        params: req.params,
        query: req.query,
        raw: req.body,
        email: 'jujhar+spam@jujhar.com',
        amt: '124.22'
    };
    logger.info('/payment incoming object', obj);

    emailSender.sendEmail(obj.email, obj.amt)
        .then(function (data) {
            res.json({status: 'ok', 'data': data});
        });

});

/**
 * to receive a payment
 */
router.post('/received', function (req, res) {
    let object = {
        headers: req.headers,
        params: req.params,
        query: req.query,
        raw: req.body
    };

    //TODO verify payment
    //TODO update spreadsheet via api call when payment is made

    res.json({status: 'ok'});
});


module.exports = router;