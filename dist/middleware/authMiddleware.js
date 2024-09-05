"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jwtUtil_1 = require("../utils/user/jwtUtil");
function authMiddleware(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }
    try {
        const decoded = (0, jwtUtil_1.verifyToken)(token);
        req.body.user = decoded;
        next();
    }
    catch (error) {
        res.status(400).send('Invalid token.');
    }
}
