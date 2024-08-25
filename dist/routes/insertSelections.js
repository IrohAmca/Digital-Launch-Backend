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
/**
 * @swagger
 * /submit-sections/trailer:
 *   post:
 *     summary: Update Trailer Section
 *     description: Update Trailer Section
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Trailer_Section:
 *                 type: object
 *                 description: The Trailer Section to update
 *                 example: { "Title": "Trailer", "Description": "This is a Trailer" }
 *               id:
 *                 type: string
 *                 description: The ID of the lansman to update
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Successfully updated
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
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
/**
 * @swagger
 * /submit-sections/livestream:
 *   post:
 *     summary: Update Livestream Section
 *     description: Update Livestream Section
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Livestream_Section:
 *                 type: object
 *                 description: The Livestream Section to update
 *                 example: { "Title": "Livestream", "Description": "This is a Livestream" }
 *               id:
 *                 type: string
 *                 description: The ID of the lansman to update
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Successfully updated
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
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
/**
 * @swagger
 * /submit-sections/introduction:
 *   post:
 *     summary: Update Introduction Section
 *     description: Update Introduction Section
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Introduction_Section:
 *                 type: object
 *                 description: The Introduction Section to update
 *                 example: { "Title": "Introduction", "Description": "This is an Introduction" }
 *               id:
 *                 type: string
 *                 description: The ID of the lansman to update
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Successfully updated
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
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
/**
 * @swagger
 * /submit-sections/logos:
 *   post:
 *     summary: Update Logos Section
 *     description: Update Logos Section
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Logos_Section:
 *                 type: object
 *                 description: The Logos Section to update
 *                 example: { "Title": "Logos", "Description": "This is a Logos section" }
 *               id:
 *                 type: string
 *                 description: The ID of the lansman to update
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Successfully updated
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
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
/**
 * @swagger
 * /submit-sections/sponsor:
 *   post:
 *     summary: Update Sponsors Section
 *     description: Update Sponsors Section
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Sponsors_Section:
 *                 type: object
 *                 description: The Sponsors Section to update
 *                 example: { "Title": "Sponsors", "Description": "This is a Sponsors section" }
 *               id:
 *                 type: string
 *                 description: The ID of the lansman to update
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Successfully updated
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
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
/**
 * @swagger
 * /submit-sections/features:
 *   post:
 *     summary: Update Features Section
 *     description: Update Features Section
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Features_Section:
 *                 type: object
 *                 description: The Features Section to update
 *                 example: { "Title": "Features", "Description": "This is a Features section" }
 *               id:
 *                 type: string
 *                 description: The ID of the lansman to update
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Successfully updated
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
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
/**
 * @swagger
 * /submit-sections/certificates:
 *   post:
 *     summary: Update Certificates Section
 *     description: Update Certificates Section
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Certificates_Section:
 *                 type: object
 *                 description: The Certificates Section to update
 *                 example: { "Title": "Certificates", "Description": "This is a Certificates section" }
 *               id:
 *                 type: string
 *                 description: The ID of the lansman to update
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Successfully updated
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
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
/**
 * @swagger
 * /submit-sections/catalog:
 *   post:
 *     summary: Update Catalog Section
 *     description: Update Catalog Section
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Catalog_Section:
 *                 type: object
 *                 description: The Catalog Section to update
 *                 example: { "Title": "Catalog", "Description": "This is a Catalog section" }
 *               id:
 *                 type: string
 *                 description: The ID of the lansman to update
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Successfully updated
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
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
/**
/**
 * @swagger
 * /submit-sections/images:
 *   post:
 *     summary: Update Images Section
 *     description: Update Images Section
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Images_Section:
 *                 type: object
 *                 description: The Images Section to update
 *                 example: { "Title": "Images", "Description": "This is an Images section" }
 *               id:
 *                 type: string
 *                 description: The ID of the lansman to update
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Successfully updated
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
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
/**
 * @swagger
 * /submit-sections/contact:
 *   post:
 *     summary: Update Contact Section
 *     description: Update Contact Section
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Contact_Section:
 *                 type: object
 *                 description: The Contact Section to update
 *                 example: { "Title": "Contact", "Description": "This is a Contact section" }
 *               id:
 *                 type: string
 *                 description: The ID of the lansman to update
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Successfully updated
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
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
/**
 * @swagger
 * /submit-sections/cta:
 *   post:
 *     summary: Update CTA Section
 *     description: Update CTA Section
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CTA_Section:
 *                 type: object
 *                 description: The CTA Section to update
 *                 example: { "Title": "CTA", "Description": "This is a CTA section" }
 *               id:
 *                 type: string
 *                 description: The ID of the lansman to update
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Successfully updated
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
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
