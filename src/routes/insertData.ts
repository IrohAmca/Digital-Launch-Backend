import { Router } from 'express';
import bodyParser from 'body-parser';
import { updateSection } from '../services/dbService';
import { submitGeneral } from '../utils/reader';

const router = Router();

router.use(bodyParser.json());

router.post('/update-and-create-general', async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send('Bad Request: Body is required');
        }
        if (req.body.id) {
            await updateSection("General_Info", req.body.GeneralInfo, req.body.id);
            res.status(200).send("Updated General Info");
        }else{
            const objID = await submitGeneral(req.body);
            res.status(200).send(objID);
        }
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
})

router.post('/submit-sections-info', async (req, res) => {
    try {
        await updateSection("Sections", req.body.Sections, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
})

router.post('/submit-design-info', async (req, res) => {
    try {
        await updateSection("Design_Settings", req.body.Design_Settings, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});

router.post('/submit-shorting-info', async (req, res) => {
    try {
        await updateSection("Sorting_Settings", req.body.Sorting_Settings, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});

router.post('/submit-seo-info', async (req, res) => {
    try {
        await updateSection("SEO_Settings", req.body.SEO_Settings, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});

export default router;