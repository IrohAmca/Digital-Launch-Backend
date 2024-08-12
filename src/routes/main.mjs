import express from 'express';
import bodyParser from 'body-parser';
import { saveData, readAllData, readData } from '../services/db_utils.mjs';
import Post from '../models/Post.mjs';

const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.render('site/admin');
});

router.get('/dl-olustur', (req, res) => {
    res.render('site/dl-olustur');
});

router.get('/dl-listele', async (req, res) => {
    try {
        const posts = await readAllData();
        res.render('site/dl-listele', { posts: posts });
    } catch (err) {
        console.log("Error in readAllData:", err);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/dl-onizle', async (req, res) => {
    try {
        const post = await readData(req.query.name);
        res.render('site/dl-onizle', { post: post });
    } catch (err) {
        console.log("Error in readData:", err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/submit-lansman', async (req, res) => {
    try {
        const post = new Post(req.body);
        await saveData(post);
        res.redirect('/');
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
