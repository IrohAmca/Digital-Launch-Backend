import { createLogger, format, transports } from 'winston';
import {Request} from 'express';
import moment from 'moment';

const { combine, timestamp, printf, colorize } = format;

const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const timestampWithOffset = format((info) => {
    info.timestamp = moment().utcOffset(180).format('YYYY-MM-DD HH:mm:ss');
    return info;
});

const logger = createLogger({
    level: 'info', 
    format: combine(
        timestampWithOffset(),
        colorize(),
        logFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'application.log' })
    ]
});

export function log(level: string, message: string, req?: Request) {
    if (req?.body.user)
    {
        message = `${message} - User: ${req?.body.user.name}`;
    }
    logger.log({ level, message });
}

export function info(message: string, req?: Request) {
    log('info', message, req);
}

export function warn(message: string, req?: Request) {
    log('warn', message, req);
}

export function error(message: string, req?: Request) {
    log('error', message, req);
}