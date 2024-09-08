import express from 'express';
import { readGallery } from '../../services/gallery/galleryList';
import { info, error } from '../../utils/logger/logger';

const router = express.Router();

router.get('/get-gallery', async (req, res) => {
    try {
        const result = await readGallery();
        res.send(result);
        info("Gallery Retrieved", req);
    } catch (err) {
        error("Error in galleryGet:" + err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;