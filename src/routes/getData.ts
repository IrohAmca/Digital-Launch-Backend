import { Router } from 'express';
import bodyParser from 'body-parser';
import { readListLansman, readLansman } from '../services/readData';

const router = Router();

router.use(bodyParser.json());

router.get('/list-lansman', async (req, res) => {
    try {
        const data = await readListLansman();
        res.status(200).send(data);
    } catch (err) {
        console.log("Error in getData:", err);
        res.status(500).send('Internal Server Error');
    }
})

router.get('/get-lansman', async (req, res) => {
    try {
        const id = req.query.id as string;
        if (!id) {
            return res.status(400).send('Bad Request: ID is required');
        }
        const data = await readLansman(id);
        res.status(200).send(data);
    } catch (err) {
        console.log("Error in getData:", err);
        res.status(500).send('Internal Server Error');
    }
})



export default router;