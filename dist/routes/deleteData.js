"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const dbService_1 = require("../services/dbService");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
router.delete('/delete-lansman', async (req, res) => {
    try {
        await (0, dbService_1.deleteLansman)(req.body.id);
        res.send("Deleted Lansman with ID: " + req.body.id);
    }
    catch (err) {
        console.log("Error in deleteData:", err);
        res.status(500).send('Internal Server Error');
    }
});
exports.default = router;
