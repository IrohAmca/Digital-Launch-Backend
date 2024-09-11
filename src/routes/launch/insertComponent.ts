import { Router } from 'express';
import bodyParser from 'body-parser';
import { setSectionPart } from '../../services/launch/launchInsert';
import { info, warn, error } from '../../utils/logger/logger';
import { authMiddleware } from '../../middleware/authMiddleware';

const router = Router();

router.use(bodyParser.json());

router.post('/insert-component', authMiddleware, async (req, res) => {
    try {
        if (!req.body) {
            warn('Bad Request: Body is required', req);
            return res.status(400).send('Bad Request: Body is required');
        }
        if (!req.body.id) {
            warn('Bad Request: ID is required', req);
            return res.status(400).send('Bad Request: ID is required');
        }
        const id =await setSectionPart(req.body.name, req.body.data, req.body.id);
        res.status(200).send(id);
        info("Inserted Component", req);
    } catch (err) {
        error("Error in insertData:" + err, req);
        res.status(500).send('Internal Server Error');
    }
});

export default router;