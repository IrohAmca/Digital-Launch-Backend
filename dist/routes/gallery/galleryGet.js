"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const galleryList_1 = require("../../services/gallery/galleryList");
const logger_1 = require("../../utils/logger/logger");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const router = express_1.default.Router();
router.get('/get-gallery', authMiddleware_1.authMiddleware, async (req, res) => {
    try {
        const result = await (0, galleryList_1.readGallery)();
        res.send(result);
        (0, logger_1.info)("Gallery Retrieved", req);
    }
    catch (err) {
        (0, logger_1.error)("Error in galleryGet:" + err);
        res.status(500).send('Internal Server Error');
    }
});
exports.default = router;
