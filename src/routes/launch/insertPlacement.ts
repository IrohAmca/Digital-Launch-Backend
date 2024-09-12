import { Router } from 'express';
import { insertPlacementService } from '../../services/launch/launchInsert';
import { info, warn, error } from '../../utils/logger/logger';
import { authMiddleware } from '../../middleware/authMiddleware';
import bodyParser from 'body-parser';

const router = Router();

router.use(bodyParser.json());

router.post('/insert-placement', authMiddleware, async (req, res) => {
    try {
        const { data, id } = req.body;

        if (!data || !id) {
            warn('Bad Request: Data and ID are required', req);
            return res.status(400).send('Bad Request: Data and ID are required');
        }
        const result = await insertPlacementService(data, id);

        if (typeof result === 'boolean' && result) {
            info('Inserted Component', req);
            return res.status(200).send('Insert Component');
        } else {
            error('Failed to update component: ' + result);
            return res.status(500).send('Failed to update component');
        }
    } catch (err) {
        error('Error in insertPlacement: ' + err, req);
        return res.status(500).send((err as Error).message || 'Internal Server Error');
    }
});

export default router;