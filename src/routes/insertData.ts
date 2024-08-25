import { Router } from 'express';
import bodyParser from 'body-parser';
import { updateSection } from '../services/inserstData';
import { submitGeneral } from '../utils/reader';

const router = Router();

router.use(bodyParser.json());

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
            await updateSection("General_Info", req.body.GeneralInfo, req.body.id);
            res.status(200).send("Updated General Info");
        } else {
            const objID = await submitGeneral(req.body);
            res.status(200).send(objID);
        }
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
})

/**
 * @swagger
 * /submit-sections-info:
 *   post:
 *     summary: Update Sections Info
 *     description: Update Sections Info
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Sections:
 *                 type: object
 *                 description: The Sections Info to update
 *                 properties:
 *                   Parts:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         PartName:
 *                           type: string
 *                           example: "Catalog"
 *                         Data:
 *                           type: string
 *                           example: "Catalog Data"
 *                 example:
 *                   Parts: 
 *                     - PartName: "Catalog"
 *                       Data: "Catalog Data"
 *               id:
 *                 type: string
 *                 description: The ID of the lansman to update
 *                 example: "12345"
 *     responses:
 *       200:
 *         description: Successfully updated
 *         content:
 *           application/json:
 *             example:
 *               message: "Successfully updated"
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */

router.post('/submit-sections-info', async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        if (!req.body.Sections) {
            return res.status(400).send('Bad Request: Sections is required');
        }
        await updateSection("Sections", req.body.Sections, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.status(200).send("Success");
    }
})
/**
 * @swagger
 * /submit-design-info:
 *   post:
 *     summary: Update Design Info
 *     description: Update Design Info
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Design_Settings:
 *                 type: object
 *                 description: The Design Info to update
 *                 example: { "Color": "Red", "Font": "Arial" }
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
router.post('/submit-design-info', async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        if (!req.body.Design_Settings) {
            return res.status(400).send('Bad Request: Design_Settings is required');
        }
        await updateSection("Design_Settings", req.body.Design_Settings, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.status(200).send("Success");
    }
});

/**
 * @swagger
 * /submit-shorting-info:
 *   post:
 *     summary: Update Shorting Info
 *     description: Update Shorting Info
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Sorting_Settings:
 *                 type: object
 *                 description: The Shorting Info to update
 *                 example: { "SortBy": "Name", "SortOrder": "Ascending" }
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

router.post('/submit-shorting-info', async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        if (!req.body.Sorting_Settings) {
            return res.status(400).send('Bad Request: Sorting_Settings is required');
        }
        await updateSection("Sorting_Settings", req.body.Sorting_Settings, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.status(200).send("Success");
    }
});
/**
 * @swagger
 * /submit-seo-info:
 *   post:
 *     summary: Update SEO Info
 *     description: Update SEO Info
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               SEO_Settings:
 *                 type: object
 *                 description: The SEO Info to update
 *                 example: { "Title": "Lansman", "Description": "This is a Lansman" }
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
router.post('/submit-seo-info', async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        if (!req.body.SEO_Settings) {
            return res.status(400).send('Bad Request: SEO_Settings is required');
        }
        await updateSection("SEO_Settings", req.body.SEO_Settings, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.status(200).send("Success");
    }
});

export default router;