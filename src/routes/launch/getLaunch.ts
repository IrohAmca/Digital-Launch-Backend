import { Router } from 'express';
import bodyParser from 'body-parser';
import { readListLansman, readLaunch } from '../../services/launch/launchGet';
import { authMiddleware } from '../../middleware/authMiddleware';
import { info, warn, error } from '../../utils/logger/logger';
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

router.get('/list-launch', authMiddleware, async (req, res) => {
    try {
        const data = await readListLansman();
        info("Sended all Launch data", req);
        res.status(200).send(data);
    } catch (err) {
        error("Error in getData:" + err, req);
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
router.get('/get-launch',authMiddleware, async (req, res) => {
    try {
        const id = req.query.id as string
        if (!id) {
            warn('Bad Request: ID is required', req);
            return res.status(400).send('Bad Request: ID is required');
        }
        const data = await readLaunch(id);
        res.status(200).send(data);
        info("Sended Launch data with ID: " + id, req);
    } catch (err) {
        error("Error in getData:" + err, req);
        res.status(500).send((err as Error).message || 'Internal Server Error');
    }
});

export default router;