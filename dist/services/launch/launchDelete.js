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
async function deleteAllLaunch() {
    try {
        await (0, dbClient_1.connectToDatabase)();
        await main_schema_1.Main.deleteMany({});
    }
    catch (err) {
        console.error("Error deleting all posts:", err);
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
async function deleteComponent(postId, partname, sectionId) {
    try {
        await (0, dbClient_1.connectToDatabase)();
        const unsetResult = await main_schema_1.Main.updateOne({
            _id: postId,
            [`Components.${partname}._id`]: sectionId
        }, {
            $unset: {
                [`Components.${partname}.$`]: ""
            }
        });
        if (unsetResult.modifiedCount === 0) {
            throw new Error("Component not found or already deleted.");
        }
        const pullResult = await main_schema_1.Main.updateOne({
            _id: postId
        }, {
            $pull: {
                [`Components.${partname}`]: null
            }
        });
    }
    catch (err) {
        console.error("Error deleting component:", err);
        throw err;
    }
    finally {
        try {
            const isClosed = await (0, dbClient_1.closeConnection)();
            if (typeof isClosed !== 'boolean' || !isClosed) {
                throw new Error(isClosed);
            }
        }
        catch (closeErr) {
            console.error("Error closing connection:", closeErr);
            throw closeErr;
        }
    }
}
