import { listObjects } from '../../services/s3/s3Get';
import path = require('path');
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

interface IGalleryInfo {
    MediaName: string;
    MediaURL: string;
    MediaType: string;
    MediaTime: Date;
}

function generateURL(key: string) {
    return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
}

function updateTime(time: string) {
    const date = new Date(time);
    date.setHours(date.getHours() + 3);
    return date;
}

function transformResponse(data: any) {
    if (data.length === 0) {
        return ["No files found in bucket"];
    }
    const galleryList: IGalleryInfo[] = [];
    data.forEach((element: any) => {
        const gallery: IGalleryInfo = {
            MediaName: element.Key,
            MediaURL: generateURL(element.Key),
            MediaType: element.Key.split('.').pop().toUpperCase(),
            MediaTime: updateTime(element.LastModified),
        };
        galleryList.push(gallery);
    });
    return galleryList;
}

async function readGallery() {
    try {
        const result = await listObjects();
        return transformResponse(result);
    }catch (err) {
        throw `Error in galleryGet: ${err}`;
    }
}

export { readGallery };


