import { Router } from 'express';
import bodyParser from 'body-parser';
import {updateSectionPart} from '../../services/launch/launchUpdate';
import { info, warn, error } from '../../utils/logger/logger';
import { authMiddleware } from '../../middleware/authMiddleware';

const router = Router();

router.use(bodyParser.json());


router.post('/update-component',authMiddleware, async (req, res) => {
    try {
        if (!req.body) {
            warn('Bad Request: Body is required', req);
            return res.status(400).send('Bad Request: Body is required');
        }
        const result = await updateSectionPart(req.body.name, req.body.data, req.body.id, req.body.section_id);
        if (typeof(result) === 'boolean' && result) {
            info("Updated Component", req);
            return res.status(200).send('Updated Component');
        }else{
            error("Failed to update component" + result , req);
            return res.status(500).send(new Error(result as any).message);
        }
    } catch (err) {
        error("Error in updateData:" + err, req);
        return res.status(500).send((err as Error).message || 'Internal Server Error');
    }
});

export default router;