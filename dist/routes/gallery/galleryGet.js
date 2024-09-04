"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const listServices_1 = require("../../services/gallery/listServices");
const router = express_1.default.Router();
router.get('/get-gallery', async (req, res) => {
    try {
        const result = await (0, listServices_1.readGallery)();
        res.send(result);
    }
    catch (err) {
        console.log("Error in galleryGet:", err);
        res.status(500).send('Internal Server Error');
    }
});
exports.default = router;
