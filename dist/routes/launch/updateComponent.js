"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const launchUpdate_1 = require("../../services/launch/launchUpdate");
const logger_1 = require("../../utils/logger/logger");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
router.post('/update-component', authMiddleware_1.authMiddleware, async (req, res) => {
    try {
        if (!req.body) {
            (0, logger_1.warn)('Bad Request: Body is required', req);
            return res.status(400).send('Bad Request: Body is required');
        }
        const result = await (0, launchUpdate_1.updateSectionPart)(req.body.name, req.body.data, req.body.id, req.body.section_id);
        if (typeof (result) === 'boolean' && result) {
            (0, logger_1.info)("Updated Component", req);
            return res.status(200).send('Updated Component');
        }
        else {
            (0, logger_1.error)("Failed to update component" + result, req);
            return res.status(500).send(new Error(result).message);
        }
    }
    catch (err) {
        (0, logger_1.error)("Error in updateData:" + err, req);
        return res.status(500).send(err.message || 'Internal Server Error');
    }
});
exports.default = router;
