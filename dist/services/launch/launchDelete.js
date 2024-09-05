"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLaunch = deleteLaunch;
exports.deleteAllLaunch = deleteAllLaunch;
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
