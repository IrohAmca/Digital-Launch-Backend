import { Gallery } from "../models/gallery_schema";
import { connectToDatabase } from "./insertData";
import {removeFile} from "../utils/remove_file";

async function insertMedia(gallery: any, path: string) {
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
        }
    const isRemoved = await removeFile(path); 
        if (isRemoved) {
                console.log(`${gallery.MediaName} Media updated to Gallery successfully`);
        }else{
            throw new Error(`Failed to remove file: ${gallery.MediaName}`);
        }
        return true;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export { insertMedia };