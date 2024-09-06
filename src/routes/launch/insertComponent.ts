import { Router } from 'express';
import bodyParser from 'body-parser';
import {setSectionPart} from '../../services/launch/launchInsert';
import { insertID } from '../../utils/generateID';

const router = Router();

router.use(bodyParser.json());

router.post('/insert-component', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send('Bad Request: Body is required');
        }
        if (!req.body.id){
            return res.status(400).send('Bad Request: ID is required');
        }
        req.body.data = insertID(req.body.data);
        await setSectionPart(req.body.name, req.body.data, req.body.id);
    } catch (err) {
        console.log("Error in insertData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.status(200).send("Inserted Component");
    }
});

export default router;