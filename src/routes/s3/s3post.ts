import express from 'express';
import multer from 'multer';
import { uploadFile } from '../../services/s3/s3Upload';
import { info, warn, error } from '../../utils/logger/logger';
import { authMiddleware } from '../../middleware/authMiddleware';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/s3-upload', upload.single('file'),authMiddleware, async (req, res) => { 
    try {
        if (!req.file) {
            warn('Bad Request: File is required', req);
            return res.status(400).send('Bad Request: File is required');
        }

        const fileBuffer = req.file.buffer;
        const fileName = req.body.name;
        const fileExtension = req.file.originalname.split('.').pop() as string;
        
        const result = await uploadFile(fileBuffer, fileName, fileExtension);
        if (typeof(result) === 'boolean' && result) {
            info('Inserted Media', req);
            res.status(200).send("Inserted Media");
        } else {
            error('Media insertion failed: ' + result, req);
            res.status(500).send(`Media insertion failed: ${result}`);
        }
    } catch (err) {
        error('Error in s3post: ' + err, req);
        res.status(500).send('Internal Server Error');
    }
});

export default router;