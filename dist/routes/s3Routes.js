"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const s3Service_1 = require("../services/s3Service");
const fs_1 = __importDefault(require("fs"));
const router = (0, express_1.Router)();
router.get('/s3-listAll', async (req, res) => {
    const result = await (0, s3Service_1.listObjects)();
    res.send(result);
});
router.post('/s3-upload', async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    const file = req.files.file;
    await (0, s3Service_1.uploadFile)(file);
    res.send('Mission completed');
});
router.get('/s3-getVideo', async (req, res) => {
    const data = await (0, s3Service_1.getObject)(req.body.key);
    if (data) {
        fs_1.default.writeFileSync("s3/" + req.body.key, data);
        res.send('Mission completed');
    }
});
router.get('/s3-getImage', async (req, res) => {
    const data = await (0, s3Service_1.getObject)(req.body.key);
    if (data) {
        fs_1.default.writeFileSync("s3/" + req.body.key, data);
        res.send('Mission completed');
    }
});
router.delete('/s3-deleteOne', async (req, res) => {
    try {
        await (0, s3Service_1.deleteObject)(req.body.key);
        res.send('Mission completed');
    }
    catch (err) {
        console.error('Error', err);
    }
});
router.delete('/s3-deleteAll', async (req, res) => {
    await (0, s3Service_1.deleteAll)();
    res.send('Mission completed');
});
exports.default = router;
