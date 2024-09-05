import { Router } from 'express';
import bodyParser from 'body-parser';
import {updateSectionPart} from '../services/launch/launchUpdate';

const router = Router();

router.use(bodyParser.json());


router.post('/update-component', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send('Bad Request: Body is required');
        }
        const result = await updateSectionPart(req.body.name, req.body.data, req.body.id, req.body.section_id);
        if (typeof(result) === 'boolean' && result) {
            return res.status(200).send('Updated Component');
        }
    } catch (err) {
        console.log("Error in insertData:", err);
        return res.status(500).send((err as Error).message || 'Internal Server Error');
    }
});

export default router;