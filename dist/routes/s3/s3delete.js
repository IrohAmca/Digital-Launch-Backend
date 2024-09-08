"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const s3Delete_1 = require("../../services/s3/s3Delete");
const logger_1 = require("../../utils/logger/logger");
const router = (0, express_1.Router)();
router.delete('/delete-media', async (req, res) => {
    try {
        await (0, s3Delete_1.deleteObject)(req.body.key);
        res.send('Deleted Object' + req.body.key);
        (0, logger_1.info)('Deleted Object' + req.body.key, req);
    }
    catch (err) {
        (0, logger_1.error)('Error in deleteObject:' + err, req);
        res.status(500).send(err.message || 'Internal Server Error');
    }
});
exports.default = router;
