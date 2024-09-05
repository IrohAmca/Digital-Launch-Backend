import { Gallery } from "../../models/gallery_schema";
import { connectToDatabase } from "../launch/launchInsert";

async function insertMedia(gallery: any) {
    try {
        await connectToDatabase();

        let existingGallery = await Gallery.findOne();

        if (!existingGallery) {
            console.log('Gallery not found, creating a new one.');
            existingGallery = new Gallery({
                Gallery: {
                    Media: []
                }
            });
        }
        existingGallery.Gallery.Media.push(gallery);

        const result = await existingGallery.save();

        if (!result) {
            throw new Error('Failed to update gallery');
        } else {
            console.log(`${gallery.MediaName} Media updated to Gallery successfully`);
        }
        return true;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export { insertMedia };