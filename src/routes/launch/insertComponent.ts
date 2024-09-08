import { Router } from 'express';
import bodyParser from 'body-parser';
import {setSectionPart} from '../../services/launch/launchInsert';
import { insertID } from '../../utils/generateID';
import { info, warn, error } from '../../utils/logger/logger';
const router = Router();

router.use(bodyParser.json());

router.post('/insert-component', async (req, res) => {
    try {
        if (!req.body) {
            warn('Bad Request: Body is required', req);
            return res.status(400).send('Bad Request: Body is required');
        }
        if (!req.body.id){
            warn('Bad Request: ID is required', req);
            return res.status(400).send('Bad Request: ID is required');
        }
        req.body.data = insertID(req.body.data);
        await setSectionPart(req.body.name, req.body.data, req.body.id);
        res.status(200).send('Inserted Component');
        info("Inserted Component", req);
    } catch (err) {
        error("Error in insertData:" + err, req);
        res.status(500).send('Internal Server Error');
    }
});

export default router;