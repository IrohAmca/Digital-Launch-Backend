import { Router } from 'express';
import bodyParser from 'body-parser';
import { deleteLansman } from '../services/dbService';

const router = Router();

router.use(bodyParser.json());

router.delete('/delete-lansman', async (req, res) => {
    try {
        await deleteLansman(req.body.id);
        res.send("Deleted Lansman with ID: " + req.body.id);
    } catch (err) {
        console.log("Error in deleteData:", err);
        res.status(500).send('Internal Server Error');
    }
}
)

export default router;