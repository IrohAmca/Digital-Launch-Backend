"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const inserstData_1 = require("../services/inserstData");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
router.post('/submit-sections/trailer', async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        if (!req.body.Trailer_Section) {
            return res.status(400).send('Bad Request: Trailer_Section is required');
        }
        await (0, inserstData_1.updateSectionPart)("Trailer_Section", req.body.Trailer_Section, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.status(200).send("Success");
    }
});
router.post('/submit-sections/livestream', async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        if (!req.body.Livestream_Section) {
            return res.status(400).send('Bad Request: Livestream_Section is required');
        }
        await (0, inserstData_1.updateSectionPart)("Livestream_Section", req.body.Livestream_Section, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.status(200).send("Success");
    }
});
router.post('/submit-sections/introduction', async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        if (!req.body.Introduction_Section) {
            return res.status(400).send('Bad Request: Introduction_Section is required');
        }
        await (0, inserstData_1.updateSectionPart)("Introduction_Section", req.body.Introduction_Section, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.status(200).send("Success");
    }
});
router.post('/submit-sections/logos', async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        if (!req.body.Logos_Section) {
            return res.status(400).send('Bad Request: Logos_Section is required');
        }
        await (0, inserstData_1.updateSectionPart)("Logos_Section", req.body.Logos_Section, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.status(200).send("Success");
    }
});
router.post('/submit-sections/sponsor', async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        if (!req.body.Sponsors_Section) {
            return res.status(400).send('Bad Request: Sponsors_Section is required');
        }
        await (0, inserstData_1.updateSectionPart)("Sponsors_Section", req.body.Sponsors_Section, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.status(200).send("Success");
    }
});
router.post('/submit-sections/features', async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        if (!req.body.Features_Section) {
            return res.status(400).send('Bad Request: Features_Section is required');
        }
        await (0, inserstData_1.updateSectionPart)("Features_Section", req.body.Features_Section, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.status(200).send("Success");
    }
});
router.post('/submit-sections/certificates', async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        if (!req.body.Certificates_Section) {
            return res.status(400).send('Bad Request: Certificates_Section is required');
        }
        await (0, inserstData_1.updateSectionPart)("Certificates_Section", req.body.Certificates_Section, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.status(200).send("Success");
    }
});
router.post('/submit-sections/catalog', async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        if (!req.body.Catalog_Section) {
            return res.status(400).send('Bad Request: Catalog_Section is required');
        }
        await (0, inserstData_1.updateSectionPart)("Catalog_Section", req.body.Catalog_Section, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.status(200).send("Success");
    }
});
router.post('/submit-sections/images', async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        if (!req.body.Images_Section) {
            return res.status(400).send('Bad Request: Images_Section is required');
        }
        await (0, inserstData_1.updateSectionPart)("Images_Section", req.body.Images_Section, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.status(200).send("Success");
    }
});
router.post('/submit-sections/contact', async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        if (!req.body.Contact_Section) {
            return res.status(400).send('Bad Request: Contact_Section is required');
        }
        await (0, inserstData_1.updateSectionPart)("Contact_Section", req.body.Contact_Section, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.status(200).send("Success");
    }
});
router.post('/submit-sections/cta', async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        if (!req.body.CTA_Section) {
            return res.status(400).send('Bad Request: CTA_Section is required');
        }
        await (0, inserstData_1.updateSectionPart)("CTA_Section", req.body.CTA_Section, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.status(200).send("Success");
    }
});
