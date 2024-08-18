
import { Router } from 'express';
import bodyParser from 'body-parser';
import { saveData, readAllData, readData, updateSection, saveDesign } from '../services/db_utils';
import { Post } from '../models/main_schema';
import { submitGeneral } from '../utils/reader';

const router = Router();

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
        const post = await readData(req.body.name);
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

router.post('/submit-general-info', async (req, res) => {
    try {
        const objID = await submitGeneral(req.body);
        res.send(objID);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
})

router.post('/submit-sections-info', async (req, res) => {
    try {
        await updateSection("Bolumler", req.body.Bolumler, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }

});

router.post('/submit-design-info', async (req, res) => {
    try {
        await updateSection("Tasarim_Ayarları", req.body.Tasarim_Ayarları, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});

router.post('/submit-placemant-info', async (req, res) => {
    try {
        await updateSection("Sıralama_Ayarları", req.body.Sıralama_Ayarları, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});

router.post('/submit-seo-info', async (req, res) => {
    try {
        await updateSection("SEO_Ayarları", req.body.SEO_Ayarları, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});

export default router;