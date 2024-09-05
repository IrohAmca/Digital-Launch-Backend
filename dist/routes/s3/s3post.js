"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const s3Upload_1 = require("../../services/s3/s3Upload");
const router = express_1.default.Router();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
router.post('/s3-upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('Bad Request: File is required');
        }
        const fileBuffer = req.file.buffer;
        const fileName = req.body.name;
        const fileExtension = req.file.originalname.split('.').pop();
        const result = await (0, s3Upload_1.uploadFile)(fileBuffer, fileName, fileExtension);
        if (typeof (result) === 'boolean' && result) {
            res.status(200).send("Inserted Media");
        }
        else {
            res.status(500).send(`Media insertion failed: ${result}`);
        }
    }
    catch (err) {
        console.log("Error in s3post:", err);
        res.status(500).send('Internal Server Error');
    }
});
exports.default = router;
