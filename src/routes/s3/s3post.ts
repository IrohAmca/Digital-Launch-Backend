import express from 'express';
import multipart from 'express-multipart'
import { uploadFile } from '../../services/s3Service';

const router = express.Router();

const mp = multipart({
    preserveExtensions: true,
    destination: "./uploads",
});

router.post('/s3-upload',  mp.file("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('Bad Request: File is required');
        }
        const result = await uploadFile(req.file, req.body.name,req.file.extension);
        if(typeof(result) === 'boolean' && result){
            res.status(200).send("Inserted Media");
        }
        else{
            res.status(500).send(`Media insertion failed: ${result}`);
        }
    } catch (err) {
        console.log("Error in s3post:", err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
