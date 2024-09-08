"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const launchGet_1 = require("../../services/launch/launchGet");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const logger_1 = require("../../utils/logger/logger");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
/**
 * @swagger
 * /list-lansman:
 *   get:
 *     summary: Get list of lansmans
 *     description: Get list of all lansmans
 *     responses:
 *       200:
 *         description: Successfully retrieved
 *       500:
 *         description: Internal Server Error
 */
router.get('/list-launch', authMiddleware_1.authMiddleware, async (req, res) => {
    try {
        const data = await (0, launchGet_1.readListLansman)();
        (0, logger_1.info)("Sended all Launch data", req);
        res.status(200).send(data);
    }
    catch (err) {
        (0, logger_1.error)("Error in getData:" + err, req);
        res.status(500).send('Internal Server Error');
    }
});
/**
 * @swagger
 * /get-lansman:
 *   get:
 *     summary: Get an item
 *     description: Get an item by ID
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the item to get
 *         example: "12345"
 *     responses:
 *       200:
 *         description: Successfully retrieved
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
router.get('/get-launch', authMiddleware_1.authMiddleware, async (req, res) => {
    try {
        const id = req.query.id;
        if (!id) {
            (0, logger_1.warn)('Bad Request: ID is required', req);
            return res.status(400).send('Bad Request: ID is required');
        }
        const data = await (0, launchGet_1.readLaunch)(id);
        res.status(200).send(data);
        (0, logger_1.info)("Sended Launch data with ID: " + id, req);
    }
    catch (err) {
        (0, logger_1.error)("Error in getData:" + err, req);
        res.status(500).send(err.message || 'Internal Server Error');
    }
});
exports.default = router;
