/**
 * winston based logger wrapper
 */
var winston = require('winston');

/**
 * return a logger that you need - Jujhar
 * @param dir the directory you wish to write to
 * @param logLevel the LogLevel you wish to use
 * @returns {winston.Logger}
 */
module.exports = function (dir, logLevel) {
    return new (winston.Logger)({
        colors: {
            trace: 'magenta',
            input: 'grey',
            verbose: 'cyan',
            prompt: 'grey',
            debug: 'blue',
            info: 'green',
            data: 'grey',
            help: 'cyan',
            warn: 'yellow',
            error: 'red'
        },
        transports: [
            new winston.transports.Console({
                prettyPrint: true,
                colorize: true,
                silent: false,
                timestamp: false,
                level: logLevel,
                humanReadableUnhandledException: true,
                stderrLevels: ['error']
            }),
            new winston.transports.File({
                name: 'info',
                filename: dir + '/app.log',
                json: false,
                level: logLevel
            }),
            new winston.transports.File({
                name: 'err',
                filename: dir + '/err.log',
                json: false,
                level: 'error'
            })
        ],
        exceptionHandlers: [
            //log any exceptions
            new winston.transports.Console({json: false, timestamp: true}),
            new winston.transports.File({filename: dir + '/err.log', json: false})
        ],
        exitOnError: false
    });
};
