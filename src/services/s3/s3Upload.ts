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
        } catch (error) {
            throw `Error uploading file: ${error}`;
        }
}
async function uploadFile(fileBuffer: any, name: string, fileType: string) {
    try {
        const result = await uploads3(fileBuffer, name, fileType);
        if (typeof result === 'string') {
            return result;
        }
        return true;
    } catch (error) {
        throw `Error in uploadFile: ${error}`;
    }
}


export { uploadFile };