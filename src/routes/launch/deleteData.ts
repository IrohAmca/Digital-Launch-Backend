import { Router } from 'express';
import bodyParser from 'body-parser';
import { deleteLaunch, deleteAllLaunch, deleteComponent } from '../../services/launch/launchDelete';
import { info, warn, error } from '../../utils/logger/logger';
const router = Router();

router.use(bodyParser.json());

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
        const id = req.query.id as string
        if (!id) {
            warn('Bad Request: ID is required', req);
            return res.status(400).send('Bad Request: ID is required');
        }
        info("Deleted Lansman with ID: " + id, req);
        await deleteLaunch(id);
    } catch (err) {
        error("Error in deleteData:" + err, req);
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/delete-all-launch', async (req, res) => {
    try {
        await deleteAllLaunch();
        info("Deleted all Lansman", req);
        res.status(200).send('Deleted all Lansman');
    } catch (err) {
        error("Error in deleteData:" + err, req);
        res.status(500).send('Internal Server Error');
    }
});

router.delete('/delete-component', async (req, res) => {
    try {
        const { id, name, section_id } = req.body;
        if (!id || !name || !section_id) {
            warn('Bad Request: ID and Name are required', req);
            return res.status(400).send('Bad Request: ID and Name are required');
        }
        await deleteComponent(id, name, section_id);
        res.status(200).send('Deleted Component');
        info("Deleted Component with ID: " + id, req);
    } catch (err) {
        error("Error in deleteData:" + err, req);
        res.status(500).send('Internal Server Error');
    } 
});

export default router;