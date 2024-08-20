import { Router } from 'express';
import bodyParser from 'body-parser';
import { readListLansman, readLansman } from '../services/dbService';

const router = Router();

router.use(bodyParser.json());

router.get('/list-lansman', async (req, res) => {
    try {
        const data = await readListLansman();
        res.send(data);
    } catch (err) {
        console.log("Error in getData:", err);
        res.status(500).send('Internal Server Error');
    }
})

router.get('/get-lansman', async (req, res) => {
    try {
        const data = await readLansman(req.body.id);
        res.send(data);
    } catch (err) {
        console.log("Error in getData:", err);
        res.status(500).send('Internal Server Error');
    }
})



export default router;