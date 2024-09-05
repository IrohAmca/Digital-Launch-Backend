"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = uploadFile;
const galleryInsert_1 = require("../gallery/galleryInsert");
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
        console.error("Error uploading file to S3:", error);
        return `Error uploading file: ${error.message}`;
    }
}
async function uploadFile(fileBuffer, name, fileType) {
    try {
        const result = await uploads3(fileBuffer, name, fileType);
        if (typeof result === 'string') {
            return result;
        }
        const gallery = {
            MediaName: name,
            MediaURL: result.Location,
            MediaType: fileType,
        };
        const insertResult = await (0, galleryInsert_1.insertMedia)(gallery);
        if (typeof insertResult === 'string') {
            return insertResult;
        }
        return true;
    }
    catch (error) {
        console.error("Error uploading file:", error);
        return error;
    }
}
