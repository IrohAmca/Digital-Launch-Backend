"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3 = void 0;
exports.listObjects = listObjects;
exports.uploadFile = uploadFile;
exports.getObject = getObject;
exports.deleteObject = deleteObject;
exports.deleteAll = deleteAll;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const envPath = path_1.default.resolve(__dirname, '../../.env');
dotenv_1.default.config({ path: envPath });
const s3 = new aws_sdk_1.default.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});
exports.s3 = s3;
async function listObjects() {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
    };
    try {
        const data = await s3.listObjectsV2(params).promise();
        if (data.Contents !== undefined) {
            if (data.Contents.length === 0) {
                console.log(`No files found in bucket: ${params.Bucket}`);
            }
            else {
                return data.Contents;
            }
        }
    }
    catch (err) {
        console.error('Error', err);
    }
}
async function uploadFile(file) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
        Key: file.name,
        Body: file.data,
    };
    try {
        await s3.upload(params).promise();
        console.log(`File uploaded successfully. Key: ${params.Key}`);
    }
    catch (err) {
        console.error('Error', err);
    }
}
async function getObject(key) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
        Key: key,
    };
    try {
        const data = await s3.getObject(params).promise();
        if (data.Body) {
            return Buffer.from(data.Body);
        }
    }
    catch (err) {
        console.error('Error', err);
    }
}
async function deleteObject(key) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
        Key: key,
    };
    try {
        await s3.deleteObject(params).promise();
        console.log(`File deleted successfully. Key: ${params.Key}`);
    }
    catch (err) {
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
            }
            else {
                data.Contents.forEach((item) => {
                    deleteObject(item.Key);
                });
            }
        }
    }
    catch (err) {
        console.error('Error', err);
    }
}
