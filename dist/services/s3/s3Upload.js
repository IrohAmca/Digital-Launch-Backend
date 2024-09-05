"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = uploadFile;
const galleryInsert_1 = require("../gallery/galleryInsert");
const s3Client_1 = require("./s3Client");
async function uploadFile(fileBuffer, name, fileType) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
        Key: `${name}.${fileType}`,
        Body: fileBuffer,
    };
    try {
        const data = await s3Client_1.s3.upload(params).promise();
        console.log(`File uploaded successfully. Key: ${params.Key}`);
        const gallery = {
            MediaName: name,
            MediaURL: data.Location,
            MediaType: fileType.toUpperCase()
        };
        const result = await (0, galleryInsert_1.insertMedia)(gallery);
        if (typeof (result) === 'boolean' && result) {
            return result;
        }
        else {
            return result;
        }
    }
    catch (err) {
        console.error('Error', err);
    }
}
