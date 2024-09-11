"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const launchInsert_1 = require("../../services/launch/launchInsert");
const logger_1 = require("../../utils/logger/logger");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
router.post('/insert-component', authMiddleware_1.authMiddleware, async (req, res) => {
    try {
        if (!req.body) {
            (0, logger_1.warn)('Bad Request: Body is required', req);
            return res.status(400).send('Bad Request: Body is required');
        }
        if (!req.body.id) {
            (0, logger_1.warn)('Bad Request: ID is required', req);
            return res.status(400).send('Bad Request: ID is required');
        }
        const id = await (0, launchInsert_1.setSectionPart)(req.body.name, req.body.data, req.body.id);
        res.status(200).send(id);
        (0, logger_1.info)("Inserted Component", req);
    }
    catch (err) {
        (0, logger_1.error)("Error in insertData:" + err, req);
        res.status(500).send('Internal Server Error');
    }
});
exports.default = router;
