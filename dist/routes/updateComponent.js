"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const launchUpdate_1 = require("../services/launch/launchUpdate");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
router.post('/update-component', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send('Bad Request: Body is required');
        }
        await (0, launchUpdate_1.updateSectionPart)(req.body.name, req.body.data, req.body.id, req.body.section_id);
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
