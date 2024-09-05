"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSectionPart = updateSectionPart;
const mongoose_1 = __importDefault(require("mongoose"));
const main_schema_1 = require("../../models/main_schema");
const dbClient_1 = require("./dbClient");
async function updateSectionPart(partname, sectionData, postId, sectionId) {
    try {
        if (!mongoose_1.default.Types.ObjectId.isValid(postId)) {
            throw new Error('Invalid ObjectId');
        }
        await (0, dbClient_1.connectToDatabase)();
        const update = { $set: { [`${partname}.$[elem]`]: sectionData } };
        const result = await main_schema_1.Main.findByIdAndUpdate(postId, update, { new: true, arrayFilters: [{ "elem._id": sectionId }] });
        if (!result) {
            throw new Error('Post not found');
        }
    }
    catch (err) {
        console.error("Error updating section part:", err);
        throw err;
    }
    finally {
        const isClosed = await (0, dbClient_1.closeConnection)();
        if (typeof isClosed === 'boolean' && isClosed) {
            // console.log("Connection closed");
        }
        else {
            throw new Error(isClosed);
        }
    }
}
