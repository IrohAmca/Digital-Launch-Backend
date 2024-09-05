"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSection = updateSection;
exports.updateSectionPart = updateSectionPart;
exports.saveGeneralInfo = saveGeneralInfo;
exports.submitGeneral = submitGeneral;
exports.connectToDatabase = connectToDatabase;
const mongoose_1 = __importDefault(require("mongoose"));
const main_schema_1 = require("../../models/main_schema");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const envPath = path_1.default.resolve(__dirname, '../../.env');
dotenv_1.default.config({ path: envPath });
const uri = process.env.MONGO_URI || '';
async function submitGeneral(data) {
    try {
        const objID = await saveGeneralInfo(data);
        return objID;
    }
    catch (err) {
        console.log("Error in saveData:", err);
        throw err;
    }
    finally {
        mongoose_1.default.connection.close();
    }
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
async function saveGeneralInfo(generalInfo) {
    await connectToDatabase();
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
        await connectToDatabase();
        const update = { $set: { [`${sectionName}`]: sectionData } };
        const result = await main_schema_1.Main.findByIdAndUpdate(postId, update, { new: true });
        if (!result) {
            throw new Error('Post not found');
        }
    }
    catch (err) {
        console.error("Error updating section part:", err);
        throw err;
    }
    finally {
        mongoose_1.default.connection.close();
    }
}
async function updateSectionPart(partname, sectionData, postId) {
    try {
        if (!mongoose_1.default.Types.ObjectId.isValid(postId)) {
            throw new Error('Invalid ObjectId');
        }
        await connectToDatabase();
        const update = { $set: { [`Components.${partname}`]: sectionData } };
        const result = await main_schema_1.Main.findByIdAndUpdate(postId, update, { new: true });
        if (!result) {
            throw new Error('Post not found');
        }
    }
    catch (err) {
        console.error("Error updating section part:", err);
        throw err;
    }
    finally {
        mongoose_1.default.connection.close();
    }
}
