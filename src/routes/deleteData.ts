import { Router } from 'express';
import bodyParser from 'body-parser';
import { deleteLaunch,deleteAllLaunch } from '../services/launch/launchDelete';

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
            return res.status(400).send('Bad Request: ID is required');
        }
        await deleteLaunch(id);
    } catch (err) {
        console.log("Error in deleteData:", err);
        res.status(500).send('Internal Server Error');
    }finally{
        res.status(200).send("Deleted Lansman with ID: " + req.body.id);
    }
});

router.delete('/delete-all-launch', async (req, res) => {
    try {
        await deleteAllLaunch();
    } catch (err) {
        console.log("Error in deleteData:", err);
        res.status(500).send('Internal Server Error');
    }finally{
        res.status(200).send("Deleted all Lansman");
    }
});

export default router;