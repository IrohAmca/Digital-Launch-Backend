"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_utils_1 = require("../services/db_utils");
const main_schema_1 = require("../models/main_schema");
const router = express_1.default.Router();
router.use(body_parser_1.default.json());
router.get('/', (req, res) => {
    res.render('site/admin');
});
router.get('/dl-olustur', (req, res) => {
    res.render('site/dl-olustur');
});
router.get('/dl-listele', async (req, res) => {
    try {
        const posts = await (0, db_utils_1.readAllData)();
        res.send(posts);
    }
    catch (err) {
        console.log("Error in readAllData:", err);
        res.status(500).send('Internal Server Error');
    }
});
router.get('/dl-onizle', async (req, res) => {
    try {
        const post = await (0, db_utils_1.readData)(req.body.name);
        res.send(post);
    }
    catch (err) {
        console.log("Error in readData:", err);
        res.status(500).send('Internal Server Error');
    }
});
router.post('/submit-lansman', async (req, res) => {
    try {
        const post = new main_schema_1.Post(req.body);
        await (0, db_utils_1.saveData)(post);
        res.redirect('/');
    }
    catch (err) {
        console.log("Error in saveData:", err);
        res.status(500).send('Internal Server Error');
    }
});
exports.default = router;
