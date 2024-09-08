"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
const jwtUtil_1 = require("../../utils/user/jwtUtil");
const authServices_1 = require("../../services/auth/authServices");
const logger_1 = require("../../utils/logger/logger");
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await (0, authServices_1.findUserByEmailAndPassword)(email, password);
        if (!user) {
            (0, logger_1.warn)('--Login: Invalid email or password.', req);
            return res.status(400).send('Invalid email or password.');
        }
        if (user.role !== 'company-admin') {
            (0, logger_1.warn)('--Login: Access denied. Not a company admin.', req);
            return res.status(403).send('Access denied. Not a company admin.');
        }
        const token = (0, jwtUtil_1.generateToken)({ id: user.id, role: user.role });
        (0, logger_1.info)('--Login: User logged in successfully.', req);
        res.status(200).send({ token });
    }
    catch (err) {
        console.error('Error in login:', err);
        res.status(500).send('Internal Server Error');
    }
}
