import dotenv from 'dotenv';
import path from 'path';
import AWS from 'aws-sdk';

const envPath = path.resolve(__dirname, '../../.env');

dotenv.config({ path: envPath });

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

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
                data.Contents.forEach((item) => {
                    console.log(item.Key);
                });
            }
        }
    } catch (err) {
        console.error('Error', err);
    }
}

async function uploadFile(file: any) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
        Key: file.name,
        Body: file.data,
    };
    try {
        await s3.upload(params).promise();
        console.log(`File uploaded successfully. Key: ${params.Key}`);
    } catch (err) {
        console.error('Error', err);
    }
}
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

async function deleteObject(key: string) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
        Key: key,
    };
    try {
        await s3.deleteObject(params).promise();
        console.log(`File deleted successfully. Key: ${params.Key}`);
    } catch (err) {
        console.error('Error', err);
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
                console.log(`No files found in bucket: ${params.Bucket}`);
            } else {
                data.Contents.forEach((item) => {
                    deleteObject(item.Key as string);
                });
            }
        }
    } catch (err) {
        console.error('Error', err);
    }
}

export { s3, listObjects, uploadFile, getObject, deleteObject, deleteAll };