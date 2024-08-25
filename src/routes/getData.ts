import { Router } from 'express';
import bodyParser from 'body-parser';
import { readListLansman, readLansman } from '../services/readData';

const router = Router();

router.use(bodyParser.json());

/**
 * @swagger
 * /list-lansman:
 *   get:
 *     summary: Get list of lansmans
 *     description: Get list of all lansmans
 *     responses:
 *       200:
 *         description: Successfully retrieved
 *       500:
 *         description: Internal Server Error
 */

router.get('/list-lansman', async (req, res) => {
    try {
        const data = await readListLansman();
        res.status(200).send(data);
    } catch (err) {
        console.log("Error in getData:", err);
        res.status(500).send('Internal Server Error');
    }
})

/**
 * @swagger
 * /get-lansman:
 *   get:
 *     summary: Get an item
 *     description: Get an item by ID
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the item to get
 *         example: "12345"
 *     responses:
 *       200:
 *         description: Successfully retrieved
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
router.get('/get-lansman', async (req, res) => {
    try {
        const id = req.query.id as string;
        if (!id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        const data = await readLansman(id);
        res.status(200).send(data);
    } catch (err) {
        console.log("Error in getData:", err);
        res.status(500).send('Internal Server Error');
    }
})



export default router;