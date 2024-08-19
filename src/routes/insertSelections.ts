import { Router } from 'express';
import bodyParser from 'body-parser';
import { updateSectionPart } from '../services/db_utils';

const router = Router();

router.use(bodyParser.json());
router.post('/submit-sections/trailer', async (req, res) => {
    try {
        await updateSectionPart("Trailer_Section", req.body.Trailer_Section, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});

router.post('/submit-sections/livestream', async (req, res) => {
    try {
        await updateSectionPart("Livestream_Section", req.body.Livestream_Section, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});

router.post('/submit-sections/introduction', async (req, res) => {
    try {
        await updateSectionPart("Introduction_Section", req.body.Introduction_Section, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});

router.post('/submit-sections/logos', async (req, res) => {
    try {
        await updateSectionPart("Logos_Section", req.body.Logos_Section, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});

router.post('/submit-sections/sponsor', async (req, res) => {
    try {
        await updateSectionPart("Sponsors_Section", req.body.Sponsors_Section, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});

router.post('/submit-sections/features', async (req, res) => {
    try {
        await updateSectionPart("Features_Section", req.body.Features_Section, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});

router.post('/submit-sections/certificates', async (req, res) => {
    try {
        await updateSectionPart("Certificates_Section", req.body.Certificates_Section, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});

router.post('/submit-sections/catalog', async (req, res) => {
    try {
        await updateSectionPart("Catalog_Section", req.body.Catalog_Section, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});

router.post('/submit-sections/images', async (req, res) => {
    try {
        await updateSectionPart("Images_Section", req.body.Images_Section, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});

router.post('/submit-sections/contact', async (req, res) => {
    try {
        await updateSectionPart("Contact_Section", req.body.Contact_Section, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});


router.post('/submit-sections/cta', async (req, res) => {
    try {
        await updateSectionPart("CTA_Section", req.body.CTA_Section, req.body.id);
    } catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    } finally {
        res.send("Success");
    }
});