import express from 'express';
import { readGallery } from '../../services/gallery/galleryList';
import { info, error } from '../../utils/logger/logger';
import { authMiddleware } from '../../middleware/authMiddleware';

const router = express.Router();

router.get('/get-gallery', authMiddleware, async (req, res) => {
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