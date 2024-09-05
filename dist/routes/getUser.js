"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const getInfo_1 = require("../utils/user/getInfo");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
router.post('/get-user', async (req, res) => {
    try {
        const loginData = {
            email: 'mehmet@uniworkhub.com',
            password: 'Uniwork1234*HUB'
        };
        const userData = await (0, getInfo_1.loginUser)(loginData);
        res.status(200).send(userData);
    }
    catch (err) {
        console.log("Error in getUser:", err);
        res.status(500).send('Internal Server Error');
    }
});
exports.default = router;
