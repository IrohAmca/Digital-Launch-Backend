import {s3} from './s3Client';
import {warn} from '../../utils/logger/logger';

async function getObject(key: string) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
        Key: key,
    };
    try {
        const data = await s3.getObject(params).promise();
        if (data.Body) {
            return Buffer.from(data.Body as Buffer);    
        }
    } catch (err) {
        throw `Error in getObject: ${err}`;
    }
}

async function listObjects() {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
    };
    try {
        const data = await s3.listObjectsV2(params).promise();
        if (data.Contents !== undefined) {
            if (data.Contents.length === 0) {
                warn(`No files found in bucket: ${params.Bucket}`);
                return [];
            } else {
                return data.Contents;
            }
        }
    } catch (err) {
        throw `Error in listObjects: ${err}`;
    }
}

export {getObject, listObjects};