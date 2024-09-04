import { Router } from 'express';
import bodyParser from 'body-parser';
import {updateSectionPart} from '../services/insertData';

const router = Router();

router.use(bodyParser.json());


router.post('/update-component', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send('Bad Request: Body is required');
        }
        await updateSectionPart(req.body.name, req.body.data, req.body.id);
    } catch (err) {
        console.log("Error in insertData:", err);
        return res.status(500).send((err as Error).message || 'Internal Server Error');
    } finally {
        res.status(200).send("Updated Component");
    }
});

export default router;