import { Router } from 'express';
import { listObjects,uploadFile,getObject,deleteObject,deleteAll } from '../services/s3Service';
import fs from 'fs';

const router = Router();

router.get('/s3-listAll', async (req, res) => {
    await listObjects()
    res.send('Mission completed');
});

router.post('/s3-upload', async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const file = req.files.file; 

    await uploadFile(file);
    res.send('Mission completed');
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