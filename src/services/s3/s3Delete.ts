import { s3 } from './s3Client';
import { info, warn } from '../../utils/logger/logger';

async function deleteObject(key: string) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
        Key: key,
    };
    try {
        await s3.deleteObject(params).promise();
        info(`Deleted object: ${key}`);
    } catch (err) {
        throw `Error in deleteObject: ${err}`;
    }
}
async function deleteAll() {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
    };
    try {
        const data = await s3.listObjectsV2(params).promise();
        if (data.Contents !== undefined) {
            if (data.Contents.length === 0) {
                warn(`No files found in bucket: ${params.Bucket}`);
            } else {
                data.Contents.forEach((item) => {
                    deleteObject(item.Key as string);
                });
            }
        }
    } catch (err) {
        throw `Error in deleteAll: ${err}`;
    }
}

export { deleteObject, deleteAll };