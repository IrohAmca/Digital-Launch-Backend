"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlacement = updatePlacement;
const launchInsert_1 = require("../../services/launch/launchInsert");
const logger_1 = require("../../utils/logger/logger");
async function updatePlacement(req, res) {
    try {
        const { data, id } = req.body;
        if (!data || !id) {
            (0, logger_1.warn)('Bad Request: Data and ID are required', req);
            return res.status(400).send('Bad Request: Data and ID are required');
        }
        const result = await (0, launchInsert_1.insertPlacementService)(data, id);
        if (typeof result === 'boolean' && result) {
            return res.status(200).send('Updated Component');
        }
        else {
            return res.status(500).send('Failed to update component');
        }
    }
    catch (err) {
        console.error("Error in updatePlacement:", err);
        return res.status(500).send(err.message || 'Internal Server Error');
    }
}
