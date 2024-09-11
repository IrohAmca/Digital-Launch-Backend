"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteObject = deleteObject;
exports.deleteAll = deleteAll;
const s3Client_1 = require("./s3Client");
const logger_1 = require("../../utils/logger/logger");
async function deleteObject(key) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
        Key: key,
    };
    try {
        await s3Client_1.s3.deleteObject(params).promise();
        (0, logger_1.info)(`Deleted object: ${key}`);
    }
    catch (err) {
        throw `Error in deleteObject: ${err}`;
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
                (0, logger_1.warn)(`No files found in bucket: ${params.Bucket}`);
            }
            else {
                data.Contents.forEach((item) => {
                    deleteObject(item.Key);
                });
            }
        }
    }
    catch (err) {
        throw `Error in deleteAll: ${err}`;
    }
}
