"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const authController_1 = require("../../controller/auth/authController");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
router.post('/login', authController_1.login);
exports.default = router;
