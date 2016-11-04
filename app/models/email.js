'use strict';

const email = function () {

};

email.prototype.sendEmail = function (email, amount) {
    return new Promise(function(res,rej){

        res({});
    });
};

module.exports = email;