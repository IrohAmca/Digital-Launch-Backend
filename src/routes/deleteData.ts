import { Router } from 'express';
import bodyParser from 'body-parser';
import { deleteLansman } from '../services/deleteData';

const router = Router();

router.use(bodyParser.json());

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