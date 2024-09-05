"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const launchInsert_1 = require("../services/launch/launchInsert");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
router.post('/update-component', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send('Bad Request: Body is required');
        }
        await (0, launchInsert_1.updateSectionPart)(req.body.name, req.body.data, req.body.id);
    }
    catch (err) {
        console.log("Error in insertData:", err);
        return res.status(500).send(err.message || 'Internal Server Error');
    }
    finally {
        res.status(200).send("Updated Component");
    }
});
exports.default = router;
