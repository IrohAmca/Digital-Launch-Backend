import express from 'express';

import { listObjects, getObject } from '../../services/s3Service';
import fs from 'fs';

const router = express.Router();

router.get('/s3-listAll', async (req, res) => {
    const result = await listObjects()
    res.send(result);
});

router.get('/s3-getVideo', async (req, res) => {
    const data = await getObject(req.body.key as string);
    if (data) {
        fs.writeFileSync("s3/"+req.body.key, data);
        res.send('Mission completed');
    }
});

router.get('/s3-getImage', async (req, res) => {
    const data = await getObject(req.body.key as string);
    if (data) {
        fs.writeFileSync("s3/"+req.body.key, data);
        res.send('Mission completed');
    }
})

export default router;
