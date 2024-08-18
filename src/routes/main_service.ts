import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { saveData, readAllData, readData } from '../services/db_utils';
import { Post } from '../models/main_schema';
const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req: Request, res: Response) => {
    res.render('site/admin');
});

router.get('/dl-olustur', (req: Request, res: Response) => {
    res.render('site/dl-olustur');
});

router.get('/dl-listele', async (req: Request, res: Response) => {
    try {
        const posts = await readAllData();
        res.send(posts);
    } catch (err) {
        console.log("Error in readAllData:", err);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/dl-onizle', async (req: Request, res: Response) => {
    try {
        const post = await readData(req.body.name);
        res.send(post);
    } catch (err) {
        console.log("Error in readData:", err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/submit-lansman', async (req: Request, res: Response) => {
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
