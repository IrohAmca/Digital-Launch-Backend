"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readListLansman = readListLansman;
exports.readLaunch = readLaunch;
exports.readAllData = readAllData;
const main_schema_1 = require("../../models/main_schema");
const dbClient_1 = require("./dbClient");
function transformResponse(data) {
    return data.map(item => ({
        id: item._id, // <-- Create new id generated by launch counter
        launchName: item.LaunchFormData.launchName,
        companyName: item.LaunchFormData.companyName,
        language: item.LaunchFormData.language,
        isActive: item.LaunchFormData.isActive,
        startDate: item.LaunchFormData.startDate,
        endDate: item.LaunchFormData.endDate,
    }));
}
async function readListLansman() {
    try {
        await (0, dbClient_1.connectToDatabase)();
        const posts = await main_schema_1.Main.find({}, 'LaunchFormData.launchName LaunchFormData.companyName LaunchFormData.language LaunchFormData.startDate LaunchFormData.endDate LaunchFormData.isActive');
        return transformResponse(posts);
    }
    catch (err) {
        throw `Error reading posts: ${err}`;
    }
}
async function readLaunch(id) {
    try {
        await (0, dbClient_1.connectToDatabase)();
        const post = await main_schema_1.Main.findById(id);
        if (!post) {
            throw new Error("Post not found");
        }
        return post;
    }
    catch (err) {
        throw `Error reading post: ${err}`;
    }
}
async function readAllData() {
    try {
        await (0, dbClient_1.connectToDatabase)();
        const mains = await main_schema_1.Main.find({});
        return mains;
    }
    catch (err) {
        throw `Error reading posts: ${err}`;
    }
}
