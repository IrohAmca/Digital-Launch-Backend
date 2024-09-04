import mongoose from 'mongoose';
import { Gallery,IGallery  } from '../../models/gallery_schema';
import {connectToDatabase} from '../insertData';

interface IGalleryInfo {
    MediaName: string;
    MediaURL: string;
    MediaType: string;
}

function transformResponse(data: any[]): IGalleryInfo[] {
    return data.flatMap(item => 
        item.Gallery.Media.map((Media: any) => ({
            MediaName: Media.MediaName,
            MediaURL: Media.MediaURL,
            MediaType: Media.MediaType,
        }))
    );
}

async function readGallery(): Promise<IGalleryInfo[]> {
    try {
        await connectToDatabase();
        const gallery = await Gallery.find({}, 'Gallery.Media').lean();

        return transformResponse(gallery);
    } catch (err) {
        console.error("Error reading gallery:", err);
        throw err;
    } finally {
        mongoose.connection.close();
    }
}

export { readGallery };


