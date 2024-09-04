"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const s3Service_1 = require("../../services/s3Service");
const router = (0, express_1.Router)();
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
