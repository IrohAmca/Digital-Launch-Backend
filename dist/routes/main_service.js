"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_parser_1 = __importDefault(require("body-parser"));
const inserstData_1 = require("../services/inserstData");
const reader_1 = require("../utils/reader");
const router = (0, express_1.Router)();
router.use(body_parser_1.default.json());
/* router.get('/', (req, res) => {
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
}); */
router.post('/submit-general-info', async (req, res) => {
    try {
        const objID = await (0, reader_1.submitGeneral)(req.body);
        res.send(objID);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
});
router.post('/submit-sections-info', async (req, res) => {
    try {
        await (0, inserstData_1.updateSection)("Bolumler", req.body.Bolumler, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.send("Success");
    }
});
router.post('/submit-design-info', async (req, res) => {
    try {
        await (0, inserstData_1.updateSection)("Tasarim_Ayarları", req.body.Tasarim_Ayarları, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.send("Success");
    }
});
router.post('/submit-placemant-info', async (req, res) => {
    try {
        await (0, inserstData_1.updateSection)("Sıralama_Ayarları", req.body.Sıralama_Ayarları, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.send("Success");
    }
});
router.post('/submit-seo-info', async (req, res) => {
    try {
        await (0, inserstData_1.updateSection)("SEO_Ayarları", req.body.SEO_Ayarları, req.body.id);
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
    finally {
        res.send("Success");
    }
});
exports.default = router;
