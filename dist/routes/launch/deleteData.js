"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const launchDelete_1 = require("../../services/launch/launchDelete");
const logger_1 = require("../../utils/logger/logger");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
/**
 * @swagger
 * /delete-lansman:
 *   delete:
 *     summary: Delete a lansman
 *     description: Deletes a lansman by ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The ID of the lansman to delete
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Successfully deleted
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
router.delete('/delete-launch', async (req, res) => {
    try {
        const id = req.query.id;
        if (!id) {
            (0, logger_1.warn)('Bad Request: ID is required', req);
            return res.status(400).send('Bad Request: ID is required');
        }
        (0, logger_1.info)("Deleted Lansman with ID: " + id, req);
        await (0, launchDelete_1.deleteLaunch)(id);
    }
    catch (err) {
        (0, logger_1.error)("Error in deleteData:" + err, req);
        res.status(500).send('Internal Server Error');
    }
});
router.delete('/delete-all-launch', async (req, res) => {
    try {
        await (0, launchDelete_1.deleteAllLaunch)();
        (0, logger_1.info)("Deleted all Lansman", req);
        res.status(200).send('Deleted all Lansman');
    }
    catch (err) {
        (0, logger_1.error)("Error in deleteData:" + err, req);
        res.status(500).send('Internal Server Error');
    }
});
router.delete('/delete-component', async (req, res) => {
    try {
        const { id, name, section_id } = req.body;
        if (!id || !name || !section_id) {
            (0, logger_1.warn)('Bad Request: ID and Name are required', req);
            return res.status(400).send('Bad Request: ID and Name are required');
        }
        await (0, launchDelete_1.deleteComponent)(id, name, section_id);
        res.status(200).send('Deleted Component');
        (0, logger_1.info)("Deleted Component with ID: " + id, req);
    }
    catch (err) {
        (0, logger_1.error)("Error in deleteData:" + err, req);
        res.status(500).send('Internal Server Error');
    }
});
exports.default = router;
