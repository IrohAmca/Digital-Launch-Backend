"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = connectToDatabase;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const logger_1 = require("../../utils/logger/logger");
const envPath = path_1.default.resolve(__dirname, '../../../.env');
dotenv_1.default.config({ path: envPath });
const uri = process.env.MONGO_URI || '';
async function connectToDatabase() {
    if (mongoose_1.default.connection.readyState === 0) {
        try {
            await mongoose_1.default.connect(uri);
            (0, logger_1.info)('MongoDB connection successful');
        }
        catch (err) {
            (0, logger_1.error)('Error connecting to MongoDB:' + err);
            throw err;
        }
    }
}
