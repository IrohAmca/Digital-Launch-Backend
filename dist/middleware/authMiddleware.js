"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jwtUtil_1 = require("../utils/user/jwtUtil");
const logger_1 = require("../utils/logger/logger");
function authMiddleware(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        (0, logger_1.warn)('Access denied. No token provided.', req);
        return res.status(401).send('Access denied. No token provided.');
    }
    try {
        const decoded = (0, jwtUtil_1.verifyToken)(token);
        req.body.user = decoded;
        next();
    }
    catch (err) {
        (0, logger_1.error)('Internal Server Error' + err, req);
        res.status(400).send('Internal Server Error' + err);
    }
}
