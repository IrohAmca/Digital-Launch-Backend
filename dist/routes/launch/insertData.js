"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const launchInsert_1 = require("../../services/launch/launchInsert");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
/**
 * @swagger
 * /update-and-create-general:
 *   post:
 *     summary: Update or Create General Info
 *     description: Update or Create General Info
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               GeneralInfo:
 *                 type: object
 *                 description: The General Info to update or create
 *                 example: {
 *                   "GeneralInfo": {
 *                     "Turkish": {
 *                       "Launch_Name": "Yeni Lansman",
 *                       "Launch_URL": "https://example.com/tr/launch",
 *                       "Launch_Start_Date": "2023-10-01T00:00:00Z",
 *                       "Launch_End_Date": "2023-10-31T23:59:59Z",
 *                       "Order_Number": "12345"
 *                     },
 *                     "English": {
 *                       "Launch_Name": "New Product Launch",
 *                       "Launch_URL": "https://example.com/en/launch",
 *                       "Launch_Start_Date": "2023-10-01T00:00:00Z",
 *                       "Launch_End_Date": "2023-10-31T23:59:59Z",
 *                       "Order_Number": "12345"
 *                     }
 *                   }
 *                 }
 *               id:
 *                 type: string
 *                 description: The ID of the lansman to update
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Successfully updated or created
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
router.post('/update-and-create-general', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send('Bad Request: Body is required');
        }
        if (req.body.id) {
            await (0, launchInsert_1.updateSection)("LaunchFormData", req.body.LaunchFormData, req.body.id);
            res.status(200).send("Updated General Info");
        }
        else {
            const objID = await (0, launchInsert_1.submitGeneral)(req.body);
            res.status(200).send(objID);
        }
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
});
router.post('/insert-placement', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send('Bad Request: Body is required');
        }
        if (req.body.id) {
            await (0, launchInsert_1.updateSection)("Placements", req.body.Placement, req.body.id);
            res.status(200).send("Updated Placement");
        }
        else {
            return res.status(400).send('Bad Request: ID is required');
        }
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
});
exports.default = router;
