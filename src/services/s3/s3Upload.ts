import { insertMedia } from '../gallery/galleryInsert';
import { s3 } from './s3Client';

async function uploads3(fileBuffer: any, name: string, fileType: string) {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME || '',
            Key: `${name}.${fileType}`,
            Body: fileBuffer,
        };
        try {
            const result = await s3.upload(params).promise();
            return result;
        } catch (error : Error | any) {
            console.error("Error uploading file to S3:", error);
            return `Error uploading file: ${error.message}`; 
        }
}
async function uploadFile(fileBuffer: any, name: string, fileType: string) {
    try {
        const result = await uploads3(fileBuffer, name, fileType);
        if (typeof result === 'string') {
            return result;
        }
        const currentDate = new Date();
        currentDate.setHours(currentDate.getHours() + 3);
        const gallery = {
            MediaName: name,
            MediaURL: result.Location,
            MediaType: fileType,
            MediaTime : currentDate,
        };
        const insertResult = await insertMedia(gallery);
        if (typeof insertResult === 'string') {
            return insertResult;
        }
        return true;
    } catch (error) {
        console.error("Error uploading file:", error);
        return error;
    }
}


export { uploadFile };