import AWS from 'aws-sdk';
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '../../.env');

dotenv.config({ path: envPath });

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

export { s3 };
