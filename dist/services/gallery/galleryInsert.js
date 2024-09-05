"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertMedia = insertMedia;
const gallery_schema_1 = require("../../models/gallery_schema");
const launchInsert_1 = require("../launch/launchInsert");
async function insertMedia(gallery) {
    try {
        await (0, launchInsert_1.connectToDatabase)();
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
        else {
            console.log(`${gallery.MediaName} Media updated to Gallery successfully`);
        }
        return true;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}
;
