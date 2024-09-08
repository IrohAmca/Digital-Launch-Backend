"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const authServices_1 = require("../../services/auth/authServices");
const jwtUtil_1 = require("../../utils/user/jwtUtil");
const logger_1 = require("../../utils/logger/logger");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await (0, authServices_1.findUserByEmailAndPassword)(email, password);
        if (!user) {
            (0, logger_1.warn)('Invalid email or password.', req);
            return res.status(400).send('Invalid email or password.');
        }
        if (user.role !== 'company-admin') {
            (0, logger_1.warn)('Access denied. Not a company admin.', req);
            return res.status(403).send('Access denied. Not a company admin.');
        }
        const token = (0, jwtUtil_1.generateToken)({ id: user._id, role: user.role });
        (0, logger_1.info)(`User logged in successfully. - UserID: ${user._id}`, req);
        res.status(200).send({ token });
    }
    catch (err) {
        (0, logger_1.error)('Error in login:' + err);
        res.status(500).send('Internal Server Error');
    }
});
exports.default = router;
