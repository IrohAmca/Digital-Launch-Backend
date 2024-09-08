import express from 'express';
import multer from 'multer';
import { uploadFile } from '../../services/s3/s3Upload';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/s3-upload', upload.single('file'), async (req, res) => { 
    try {
        if (!req.file) {
            return res.status(400).send('Bad Request: File is required');
        }

        const fileBuffer = req.file.buffer;
        const fileName = req.body.name;
        const fileExtension = req.file.originalname.split('.').pop() as string;
        
        const result = await uploadFile(fileBuffer, fileName, fileExtension);
        if (typeof(result) === 'boolean' && result) {
            res.status(200).send("Inserted Media");
        } else {
            res.status(500).send(`Media insertion failed: ${result}`);
        }
    } catch (err) {
        console.log("Error in s3post:", err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;