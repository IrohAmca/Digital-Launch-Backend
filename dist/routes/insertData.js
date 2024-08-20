"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const dbService_1 = require("../services/dbService");
const reader_1 = require("../utils/reader");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
router.post('/update-and-create-general', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send('Bad Request: Body is required');
        }
        if (req.body.id) {
            await (0, dbService_1.updateSection)("General_Info", req.body.GeneralInfo, req.body.id);
            res.status(200).send("Updated General Info");
        }
        else {
            const objID = await (0, reader_1.submitGeneral)(req.body);
            res.status(200).send(objID);
        }
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
});
router.post('/submit-sections-info', async (req, res) => {
    try {
        await (0, dbService_1.updateSection)("Sections", req.body.Sections, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.send("Success");
    }
});
router.post('/submit-design-info', async (req, res) => {
    try {
        await (0, dbService_1.updateSection)("Design_Settings", req.body.Design_Settings, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.send("Success");
    }
});
router.post('/submit-shorting-info', async (req, res) => {
    try {
        await (0, dbService_1.updateSection)("Sorting_Settings", req.body.Sorting_Settings, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.send("Success");
    }
});
router.post('/submit-seo-info', async (req, res) => {
    try {
        await (0, dbService_1.updateSection)("SEO_Settings", req.body.SEO_Settings, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.send("Success");
    }
});
exports.default = router;
