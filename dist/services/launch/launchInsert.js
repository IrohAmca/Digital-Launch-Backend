"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
exports.updateSection = updateSection;
exports.setSectionPart = setSectionPart;
exports.saveGeneralInfo = saveGeneralInfo;
exports.submitGeneral = submitGeneral;
exports.insertPlacementService = insertPlacementService;
const mongoose_1 = __importDefault(require("mongoose"));
const main_schema_1 = require("../../models/main_schema");
const dbClient_1 = require("./dbClient");
Object.defineProperty(exports, "connectToDatabase", { enumerable: true, get: function () { return dbClient_1.connectToDatabase; } });
async function submitGeneral(data) {
    try {
        const objID = await saveGeneralInfo(data);
        return objID;
    }
    catch (err) {
        console.log("Error in saveData:", err);
        throw err;
    }
}
async function saveGeneralInfo(generalInfo) {
    await (0, dbClient_1.connectToDatabase)();
    const post = new main_schema_1.Main({ LaunchFormData: generalInfo.LaunchFormData });
    const savedPost = await post.save();
    mongoose_1.default.connection.close();
    return savedPost._id;
}
async function updateSection(sectionName, sectionData, postId) {
    try {
        if (!mongoose_1.default.Types.ObjectId.isValid(postId)) {
            throw new Error('Invalid ObjectId');
        }
        await (0, dbClient_1.connectToDatabase)();
        const post = await main_schema_1.Main.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }
        const result = await main_schema_1.Main.updateOne({ _id: postId }, { $set: { [sectionName]: sectionData } });
        if (result.modifiedCount === 0) {
            throw new Error('No document modified');
        }
        return true;
    }
    catch (err) {
        throw `Error updating section: ${err}`;
    }
}
async function setSectionPart(partname, sectionData, postId) {
    try {
        if (!mongoose_1.default.Types.ObjectId.isValid(postId)) {
            throw new Error('Invalid ObjectId');
        }
        await (0, dbClient_1.connectToDatabase)();
        const update = { $push: { [`Components.${partname}`]: sectionData } };
        const result = await main_schema_1.Main.findByIdAndUpdate(postId, update, { new: true });
        if (!result) {
            throw new Error('Post not found');
        }
        return result.Components[partname].slice(-1)[0]._id;
    }
    catch (err) {
        throw `Error setting section part: ${err}`;
    }
}
async function insertPlacementService(data, postId) {
    try {
        if (!mongoose_1.default.Types.ObjectId.isValid(postId)) {
            throw new Error('Invalid ObjectId');
        }
        await (0, dbClient_1.connectToDatabase)();
        const post = await main_schema_1.Main.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }
        const update = { $push: { Placements: data } };
        const result = await main_schema_1.Main.findByIdAndUpdate(postId, update, { new: true });
        if (!result) {
            throw new Error('Post not found');
        }
        return true;
    }
    catch (err) {
        throw `Error inserting placement service: ${err}`;
    }
}
