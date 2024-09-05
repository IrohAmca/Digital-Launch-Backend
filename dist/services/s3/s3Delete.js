"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteObject = deleteObject;
exports.deleteAll = deleteAll;
const s3Client_1 = require("./s3Client");
async function deleteObject(key) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
        Key: key,
    };
    try {
        await s3Client_1.s3.deleteObject(params).promise();
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
        const data = await s3Client_1.s3.listObjectsV2(params).promise();
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
