"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLansman = deleteLansman;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const main_schema_1 = require("../models/main_schema");
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
async function deleteLansman(id) {
    try {
        await connectToDatabase();
        await main_schema_1.Post.findByIdAndDelete(id);
    }
    catch (err) {
        console.error("Error deleting post:", err);
        throw err;
    }
}
