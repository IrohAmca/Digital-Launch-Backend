"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObject = getObject;
exports.listObjects = listObjects;
const s3Client_1 = require("./s3Client");
const logger_1 = require("../../utils/logger/logger");
async function getObject(key) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
        Key: key,
    };
    try {
        const data = await s3Client_1.s3.getObject(params).promise();
        if (data.Body) {
            return Buffer.from(data.Body);
        }
    }
    catch (err) {
        throw `Error in getObject: ${err}`;
    }
}
async function listObjects() {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME || '',
    };
    try {
        const data = await s3Client_1.s3.listObjectsV2(params).promise();
        if (data.Contents !== undefined) {
            if (data.Contents.length === 0) {
                (0, logger_1.warn)(`No files found in bucket: ${params.Bucket}`);
                return [];
            }
            else {
                return data.Contents;
            }
        }
    }
    catch (err) {
        throw `Error in listObjects: ${err}`;
    }
}
