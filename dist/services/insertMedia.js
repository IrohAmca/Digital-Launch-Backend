"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertMedia = insertMedia;
const gallery_schema_1 = require("../models/gallery_schema");
const insertData_1 = require("./insertData");
const remove_file_1 = require("../utils/remove_file");
async function insertMedia(gallery, path) {
    try {
        await (0, insertData_1.connectToDatabase)();
        let existingGallery = await gallery_schema_1.Gallery.findOne();
        if (!existingGallery) {
            console.log('Gallery not found, creating a new one.');
            existingGallery = new gallery_schema_1.Gallery({
                Gallery: {
                    Media: []
                }
            });
        }
        existingGallery.Gallery.Media.push(gallery);
        const result = await existingGallery.save();
        if (!result) {
            throw new Error('Failed to update gallery');
        }
        const isRemoved = await (0, remove_file_1.removeFile)(path);
        if (isRemoved) {
            console.log(`${gallery.MediaName} Media updated to Gallery successfully`);
        }
        else {
            throw new Error(`Failed to remove file: ${gallery.MediaName}`);
        }
        return true;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}
;
