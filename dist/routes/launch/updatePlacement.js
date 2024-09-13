"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const launchUpdate_1 = require("../../services/launch/launchUpdate");
const logger_1 = require("../../utils/logger/logger");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const body_parser_1 = __importDefault(require("body-parser"));
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
router.post('/update-placement', authMiddleware_1.authMiddleware, async (req, res) => {
    try {
        const { data, name, id } = req.body;
        if (!data || !name || !id) {
            (0, logger_1.warn)('Bad Request: Data, Name and ID are required', req);
            return res.status(400).send('Bad Request: Data and ID are required');
        }
        const result = await (0, launchUpdate_1.updatePlacementService)(data, name, id);
        if (typeof result === 'boolean' && result) {
            (0, logger_1.info)('Updated Component', req);
            return res.status(200).send('Updated Component');
        }
        else {
            (0, logger_1.error)('Failed to update placement: ' + result);
            return res.status(500).send('Failed to update placement');
        }
    }
    catch (err) {
        (0, logger_1.error)('Error in updatePlacement: ' + err, req);
        return res.status(500).send(err.message || 'Internal Server Error');
    }
});
exports.default = router;
