import express from 'express';
import { readGallery } from '../../services/gallery/galleryList';
const router = express.Router();

router.get('/get-gallery', async (req, res) => {
    try {
        const result = await readGallery();
        res.send(result);
    } catch (err) {
        console.log("Error in galleryGet:", err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;