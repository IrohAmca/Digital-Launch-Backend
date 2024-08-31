import { Router } from 'express';
import bodyParser from 'body-parser';
import {updateSectionPart} from '../services/inserstData';

const router = Router();

router.use(bodyParser.json());


router.post('/update-component', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send('Bad Request: Body is required');
        }
        console.log("Components."+ req.body.name);
        await updateSectionPart(req.body.name, req.body.data, req.body.id);
    } catch (err) {
        console.log("Error in insertData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.status(200).send("Inserted Component");
    }
});

export default router;