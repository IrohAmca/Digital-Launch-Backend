import { Router } from 'express';
import {deleteObject,deleteAll } from '../../services/s3Service';

const router = Router();

router.delete('/s3-deleteOne', async (req, res) => {
    try {
        await deleteObject(req.body.key as string);
        res.send('Mission completed');
    } catch (err) {
        console.error('Error', err);
    }
});

router.delete('/s3-deleteAll', async (req, res) => {
    await deleteAll();
    res.send('Mission completed');
});

export default router;