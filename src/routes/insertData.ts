import { Router } from 'express';
import bodyParser from 'body-parser';
import { updateSection, submitGeneral } from '../services/inserstData';

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
            await updateSection("LaunchFormData", req.body.LaunchFormData, req.body.id);
            res.status(200).send("Updated General Info");
        } else {
            const objID = await submitGeneral(req.body);
            res.status(200).send(objID);
        }
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;