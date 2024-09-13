import { Router } from 'express';
import { updatePlacementService } from '../../services/launch/launchUpdate';
import { info, warn, error } from '../../utils/logger/logger';
import { authMiddleware } from '../../middleware/authMiddleware';
import bodyParser from 'body-parser';

const router = Router();

router.use(bodyParser.json());

router.post('/update-placement', authMiddleware, async (req, res) => {
    try {
        const { data, name ,id} = req.body;

        if (!data || !name || !id) {
            warn('Bad Request: Data, Name and ID are required', req);
            return res.status(400).send('Bad Request: Data and ID are required');
        }
        const result = await updatePlacementService(data, name,id);

        if (typeof result === 'boolean' && result) {
            info('Updated Component', req);
            return res.status(200).send('Updated Component');
        } else {
            error('Failed to update placement: ' + result);
            return res.status(500).send('Failed to update placement');
        }
    } catch (err) {
        error('Error in updatePlacement: ' + err, req);
        return res.status(500).send((err as Error).message || 'Internal Server Error');
    }
});

export default router;