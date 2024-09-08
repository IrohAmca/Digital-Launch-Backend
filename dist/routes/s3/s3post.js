"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const s3Upload_1 = require("../../services/s3/s3Upload");
const logger_1 = require("../../utils/logger/logger");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const router = express_1.default.Router();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
router.post('/s3-upload', upload.single('file'), authMiddleware_1.authMiddleware, async (req, res) => {
    try {
        if (!req.file) {
            (0, logger_1.warn)('Bad Request: File is required', req);
            return res.status(400).send('Bad Request: File is required');
        }
        const fileBuffer = req.file.buffer;
        const fileName = req.body.name;
        const fileExtension = req.file.originalname.split('.').pop();
        const result = await (0, s3Upload_1.uploadFile)(fileBuffer, fileName, fileExtension);
        if (typeof (result) === 'boolean' && result) {
            (0, logger_1.info)('Inserted Media', req);
            res.status(200).send("Inserted Media");
        }
        else {
            (0, logger_1.error)('Media insertion failed: ' + result, req);
            res.status(500).send(`Media insertion failed: ${result}`);
        }
    }
    catch (err) {
        (0, logger_1.error)('Error in s3post: ' + err, req);
        res.status(500).send('Internal Server Error');
    }
});
exports.default = router;
