"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const deleteData_1 = require("../services/deleteData");
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
        const id = req.body.id;
        if (!id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        await (0, deleteData_1.deleteLansman)(id);
    }
    catch (err) {
        console.log("Error in deleteData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.status(200).send("Deleted Lansman with ID: " + req.body.id);
    }
});
router.delete('/delete-all-launch', async (req, res) => {
    try {
        await (0, deleteData_1.deleteAllLansman)();
    }
    catch (err) {
        console.log("Error in deleteData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.status(200).send("Deleted all Lansman");
    }
});
exports.default = router;
