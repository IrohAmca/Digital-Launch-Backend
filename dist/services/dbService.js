"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readAllData = readAllData;
exports.readData = readData;
exports.updateSection = updateSection;
exports.updateSectionPart = updateSectionPart;
exports.saveGeneralInfo = saveGeneralInfo;
exports.readListLansman = readListLansman;
const mongoose_1 = __importDefault(require("mongoose"));
const main_schema_1 = require("../models/main_schema");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const envPath = path_1.default.resolve(__dirname, '../../.env');
dotenv_1.default.config({ path: envPath });
const uri = process.env.MONGO_URI || '';
function transformResponse(data) {
    return data.map(item => ({
        Launch_Name: item.General_Info.Turkish.Launch_Name,
        Launch_Start_Date: item.General_Info.Turkish.Launch_Start_Date,
        Launch_End_Date: item.General_Info.Turkish.Launch_End_Date,
        Livestream_Status: item.Sections.Livestream_Section.Turkish.Livestream_Status,
        id: item._id
    }));
}
async function connectToDatabase() {
    if (mongoose_1.default.connection.readyState === 0) {
        try {
            await mongoose_1.default.connect(uri);
            console.log("Connected to MongoDB");
        }
        catch (err) {
            console.error("MongoDB connection error:", err);
            throw err;
        }
    }
}
async function readAllData() {
    try {
        await connectToDatabase();
        const posts = await main_schema_1.Post.find({});
        return posts;
    }
    catch (err) {
        console.error("Error reading posts:", err);
        throw err;
    }
    finally {
        mongoose_1.default.connection.close();
    }
}
async function readData(Lansman_Adi) {
    try {
        await connectToDatabase();
        const post = await main_schema_1.Post.findOne({ "Genel_Bilgiler.Lansman_Adi": Lansman_Adi });
        return post;
    }
    catch (err) {
        console.error("Error reading post:", err);
        throw err;
    }
    finally {
        mongoose_1.default.connection.close();
    }
}
async function readListLansman() {
    try {
        await connectToDatabase();
        const posts = await main_schema_1.Post.find({}, 'General_Info.Turkish.Launch_Name General_Info.Turkish.Launch_Start_Date General_Info.Turkish.Launch_End_Date Sections.Livestream_Section.Turkish.Livestream_Status');
        return transformResponse(posts);
    }
    catch (err) {
        console.error("Error reading posts:", err);
        throw err;
    }
    finally {
        mongoose_1.default.connection.close();
    }
}
async function saveGeneralInfo(generalInfo) {
    await connectToDatabase();
    const post = new main_schema_1.Post({ General_Info: generalInfo.GeneralInfo });
    const savedPost = await post.save();
    return savedPost._id;
}
async function updateSection(sectionName, sectionData, postId) {
    try {
        await connectToDatabase();
        await main_schema_1.Post.findByIdAndUpdate(postId, { $set: { [sectionName]: sectionData } }, { new: true });
    }
    catch (err) {
        console.error("Error updating section:", err);
        throw err;
    }
}
async function updateSectionPart(partname, sectionData, postId) {
    try {
        await connectToDatabase();
        await main_schema_1.Post.findByIdAndUpdate(postId, { $set: { "Sections.$[section].Parts.$[partname].Data": sectionData } }, { new: true, arrayFilters: [{ "section.PartName": partname }] });
    }
    catch (err) {
        console.error("Error updating section part:", err);
        throw err;
    }
}
