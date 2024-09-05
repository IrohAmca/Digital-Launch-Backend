import { insertMedia } from '../gallery/galleryInsert';
import { s3 } from './s3Client';

async function uploadFile(fileBuffer: any, name: string,fileType: string) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
        Key: `${name}.${fileType}`,
        Body: fileBuffer,
    };
    try {
        const data = await s3.upload(params).promise();
        console.log(`File uploaded successfully. Key: ${params.Key}`);

        const gallery = {
            MediaName: name as string,
            MediaURL: data.Location as string,
            MediaType: fileType.toUpperCase() as string
        };
        const result = await insertMedia(gallery);
        if (typeof(result) === 'boolean' && result) {
            return result;
        }else{
            return result;
        }

    } catch (err) {
        console.error('Error', err);
    }
}


export { uploadFile};