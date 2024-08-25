import { Router } from 'express';
import bodyParser from 'body-parser';
import { deleteLansman } from '../services/deleteData';

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

router.delete('/delete-lansman', async (req, res) => {
    try {
        const id = req.body.id;
        if (!id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        await deleteLansman(id);
    } catch (err) {
        console.log("Error in deleteData:", err);
        res.status(500).send('Internal Server Error');
    }finally{
        res.status(200).send("Deleted Lansman with ID: " + req.body.id);
    }
});

export default router;