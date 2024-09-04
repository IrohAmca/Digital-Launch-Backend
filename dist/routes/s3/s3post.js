"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_multipart_1 = __importDefault(require("express-multipart"));
const s3Service_1 = require("../../services/s3Service");
const router = express_1.default.Router();
const mp = (0, express_multipart_1.default)({
    preserveExtensions: true,
    destination: "./uploads",
});
router.post('/s3-upload', mp.file("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('Bad Request: File is required');
        }
        const result = await (0, s3Service_1.uploadFile)(req.file, req.body.name, req.file.extension);
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
