import {s3} from './s3Client';

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
        console.error('Error', err);
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
                console.log(`No files found in bucket: ${params.Bucket}`);
            } else {
                return data.Contents;
            }
        }
    } catch (err) {
        console.error('Error', err);
    }
}

export {getObject, listObjects};