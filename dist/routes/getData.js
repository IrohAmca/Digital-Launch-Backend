"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const readData_1 = require("../services/readData");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
router.get('/list-lansman', async (req, res) => {
    try {
        const data = await (0, readData_1.readListLansman)();
        res.status(200).send(data);
    }
    catch (err) {
        console.log("Error in getData:", err);
        res.status(500).send('Internal Server Error');
    }
});
router.get('/get-lansman', async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        const data = await (0, readData_1.readLansman)(req.body.id);
        res.status(200).send(data);
    }
    catch (err) {
        console.log("Error in getData:", err);
        res.status(500).send('Internal Server Error');
    }
});
exports.default = router;
