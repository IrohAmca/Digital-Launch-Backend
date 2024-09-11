"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = uploadFile;
const s3Client_1 = require("./s3Client");
async function uploads3(fileBuffer, name, fileType) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
        Key: `${name}.${fileType}`,
        Body: fileBuffer,
    };
    try {
        const result = await s3Client_1.s3.upload(params).promise();
        return result;
    }
    catch (error) {
        throw `Error uploading file: ${error}`;
    }
}
async function uploadFile(fileBuffer, name, fileType) {
    try {
        const result = await uploads3(fileBuffer, name, fileType);
        if (typeof result === 'string') {
            return result;
        }
        return true;
    }
    catch (error) {
        throw `Error in uploadFile: ${error}`;
    }
}
