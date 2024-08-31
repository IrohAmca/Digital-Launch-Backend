"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const inserstData_1 = require("../services/inserstData");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
router.post('/insert-component', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send('Bad Request: Body is required');
        }
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        console.log("Components." + req.body.name);
        await (0, inserstData_1.updateSectionPart)(req.body.name, req.body.data, req.body.id);
    }
    catch (err) {
        console.log("Error in insertData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.status(200).send("Inserted Component");
    }
});
exports.default = router;
