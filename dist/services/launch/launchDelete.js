"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLaunch = deleteLaunch;
exports.deleteAllLaunch = deleteAllLaunch;
exports.deleteComponent = deleteComponent;
const dbClient_1 = require("./dbClient");
const main_schema_1 = require("../../models/main_schema");
async function deleteLaunch(id) {
    try {
        await (0, dbClient_1.connectToDatabase)();
        await main_schema_1.Main.findByIdAndDelete(id);
    }
    catch (err) {
        console.error("Error deleting post:", err);
        throw err;
    }
}
async function deleteAllLaunch() {
    try {
        await (0, dbClient_1.connectToDatabase)();
        await main_schema_1.Main.deleteMany({});
    }
    catch (err) {
        console.error("Error deleting all posts:", err);
        throw err;
    }
}
async function deleteComponent(postId, partname, sectionId) {
    try {
        await (0, dbClient_1.connectToDatabase)();
        // Belirtilen partname dizisi altında sectionId'ye göre elemanı sil
        const updateResult = await main_schema_1.Main.updateOne({
            _id: postId,
            [`Components.${partname}._id`]: sectionId // Dizinin içinde sectionId'yi bul
        }, {
            $pull: {
                [`Components.${partname}`]: { _id: sectionId } // Diziden sectionId'yi sil
            }
        });
        if (updateResult.modifiedCount === 0) {
            throw new Error("Component not found or already deleted.");
        }
        console.log("Component deleted successfully.");
    }
    catch (err) {
        console.error("Error deleting component:", err);
        throw err;
    }
}
