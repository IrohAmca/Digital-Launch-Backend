"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveData = saveData;
exports.readAllData = readAllData;
exports.readData = readData;
exports.saveGeneralInfo = saveGeneralInfo;
exports.updateSection = updateSection;
exports.saveDesign = saveDesign;
const mongoose_1 = __importDefault(require("mongoose"));
const main_schema_1 = require("../models/main_schema");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const envPath = path_1.default.resolve(__dirname, '../../.env');
dotenv_1.default.config({ path: envPath });
const uri = process.env.MONGO_URI || '';
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
async function saveData(postData) {
    try {
        await connectToDatabase();
        const post = new main_schema_1.Post(postData);
        await post.save();
        console.log("Post saved");
    }
    catch (err) {
        console.error("Error saving post:", err);
        throw err;
    }
    finally {
        mongoose_1.default.connection.close();
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
async function saveGeneralInfo(generalInfo) {
    await connectToDatabase();
    const post = new main_schema_1.Post({ Genel_Bilgiler: generalInfo.Genel_Bilgiler });
    const savedPost = await post.save();
    return savedPost._id;
}
async function saveSections(sectionData, postId) {
    try {
        await connectToDatabase();
        await main_schema_1.Post.findByIdAndUpdate(postId, { $set: { "Bolumler": sectionData } }, { new: true });
    }
    catch (err) {
        console.error("Error saving sections:", err);
        throw err;
    }
}
async function saveDesign(designData, postId) {
    try {
        await connectToDatabase();
        await main_schema_1.Post.findByIdAndUpdate(postId, { $set: { "Tasarım_Ayarları": designData } }, { new: true });
    }
    catch (err) {
        console.error("Error saving design:", err);
        throw err;
    }
}
async function savePlacemant(placemantData, postId) {
    try {
        await connectToDatabase();
        await main_schema_1.Post.findByIdAndUpdate(postId, { $set: { "Sıralama_Ayarları": placemantData } }, { new: true });
    }
    catch (err) {
        console.error("Error saving placemant:", err);
        throw err;
    }
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
