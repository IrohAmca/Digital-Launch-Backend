"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = log;
exports.info = info;
exports.warn = warn;
exports.error = error;
const winston_1 = require("winston");
const moment_1 = __importDefault(require("moment"));
const { combine, timestamp, printf, colorize } = winston_1.format;
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});
const timestampWithOffset = (0, winston_1.format)((info) => {
    info.timestamp = (0, moment_1.default)().utcOffset(180).format('YYYY-MM-DD HH:mm:ss');
    return info;
});
const logger = (0, winston_1.createLogger)({
    level: 'info',
    format: combine(timestampWithOffset(), colorize(), logFormat),
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ filename: 'application.log' })
    ]
});
function log(level, message, req) {
    if (req?.body.user) {
        message = `${message} - UserID: ${req?.body.user.id}`;
    }
    logger.log({ level, message });
}
function info(message, req) {
    log('info', message, req);
}
function warn(message, req) {
    log('warn', message, req);
}
function error(message, req) {
    log('error', message, req);
}
