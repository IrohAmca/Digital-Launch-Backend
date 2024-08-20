"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitGeneral = submitGeneral;
const dbService_1 = require("../services/dbService");
async function submitGeneral(data) {
    try {
        const objID = await (0, dbService_1.saveGeneralInfo)(data);
        return objID;
    }
    catch (err) {
        console.log("Error in saveData:", err);
        throw err;
    }
}
