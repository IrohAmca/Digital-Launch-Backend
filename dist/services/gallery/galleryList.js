"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readGallery = readGallery;
const mongoose_1 = __importDefault(require("mongoose"));
const gallery_schema_1 = require("../../models/gallery_schema");
const launchInsert_1 = require("../launch/launchInsert");
function transformResponse(data) {
    return data.flatMap(item => item.Gallery.Media.map((Media) => ({
        MediaName: Media.MediaName,
        MediaURL: Media.MediaURL,
        MediaType: Media.MediaType,
    })));
}
async function readGallery() {
    try {
        await (0, launchInsert_1.connectToDatabase)();
        const gallery = await gallery_schema_1.Gallery.find({}, 'Gallery.Media').lean();
        return transformResponse(gallery);
    }
    catch (err) {
        console.error("Error reading gallery:", err);
        throw err;
    }
    finally {
        mongoose_1.default.connection.close();
    }
}
