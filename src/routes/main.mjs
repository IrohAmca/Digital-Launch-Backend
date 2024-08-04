import express from 'express';
import bodyParser from 'body-parser';
import { saveData, readAllData,readData } from '../services/db_utils.mjs';
import Post from '../models/Post.mjs';

const post = new Post();
const router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/user/:id/:username/', (req, res) => {
    res.send(`User ID: ${req.params.id} \n Username: ${req.params.username}`)
})

router.get('/', (req, res) => {
    res.render('site/admin')
})

router.get('/dl-olustur', (req, res) => {
    res.render('site/dl-olustur')
});

router.get('/dl-listele', async (req, res) => {
    try {
        const posts = await readAllData();
        console.log(posts)
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

router.post('/submit-lansman', urlencodedParser, (req, res) => {
    post.Genel_Bilgiler.Lansman_Adi = req.body.name
    saveData(post)
    res.redirect('/')
});

export default router;