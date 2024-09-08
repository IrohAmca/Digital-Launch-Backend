import { Router } from 'express';
import { deleteObject, deleteAll } from '../../services/s3/s3Delete';
import { info, error } from '../../utils/logger/logger';
import { authMiddleware } from '../../middleware/authMiddleware';

const router = Router();

router.delete('/delete-media', authMiddleware, async (req, res) => {
    try {
        await deleteObject(req.body.key as string);
        res.send('Deleted Object' + req.body.key);
        info('Deleted Object' + req.body.key, req);
    } catch (err) {
        error('Error in deleteObject:' + err, req);
        res.status(500).send((err as Error).message || 'Internal Server Error');
    }
});

export default router;