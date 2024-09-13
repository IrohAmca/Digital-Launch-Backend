"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSectionPart = updateSectionPart;
exports.updatePlacementService = updatePlacementService;
const mongoose_1 = __importDefault(require("mongoose"));
const dbClient_1 = require("./dbClient");
const main_schema_1 = require("../../models/main_schema");
async function updateSectionPart(partname, sectionData, postId, sectionId) {
    try {
        if (!mongoose_1.default.Types.ObjectId.isValid(postId)) {
            throw new Error('Invalid ObjectId');
        }
        await (0, dbClient_1.connectToDatabase)();
        const post = await main_schema_1.Main.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }
        await main_schema_1.Main.updateOne({
            _id: postId,
            [`Components.${partname}._id`]: sectionId
        }, {
            $set: {
                [`Components.${partname}.$`]: sectionData
            }
        });
        /*
                if (updateResult.modifiedCount === 0) {
                    throw new Error('No document modified');
                } */
        return true;
    }
    catch (err) {
        throw `Error updating section part: ${err}`;
    }
}
async function updatePlacementService(data, name, id) {
    try {
        if (!data || !id || !name) {
            throw new Error('Data, Name, and ID are required');
        }
        const result = await main_schema_1.Main.updateOne({
            _id: id,
            'Placements.name': name
        }, {
            $set: {
                'Placements.$[elem]': data
            }
        }, {
            arrayFilters: [{ 'elem.name': name }]
        });
        return true;
    }
    catch (err) {
        throw new Error(`Error in updatePlacementService: ${err}`);
    }
}
