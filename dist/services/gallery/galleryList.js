"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readGallery = readGallery;
const s3Get_1 = require("../../services/s3/s3Get");
const path = require("path");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: path.resolve(__dirname, '../../../.env') });
function generateURL(key) {
    return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
}
function updateTime(time) {
    const date = new Date(time);
    date.setHours(date.getHours() + 3);
    return date;
}
function transformResponse(data) {
    if (data.length === 0) {
        return ["No files found in bucket"];
    }
    const galleryList = [];
    data.forEach((element) => {
        const gallery = {
            MediaName: element.Key,
            MediaURL: generateURL(element.Key),
            MediaType: element.Key.split('.').pop().toUpperCase(),
            MediaTime: updateTime(element.LastModified),
        };
        galleryList.push(gallery);
    });
    return galleryList;
}
async function readGallery() {
    try {
        const result = await (0, s3Get_1.listObjects)();
        return transformResponse(result);
    }
    catch (err) {
        throw `Error in galleryGet: ${err}`;
    }
}
