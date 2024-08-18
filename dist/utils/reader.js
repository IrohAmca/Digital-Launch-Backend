"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitGeneral = submitGeneral;
const db_utils_1 = require("../services/db_utils");
async function submitGeneral(data) {
    try {
        const objID = await (0, db_utils_1.saveGeneralInfo)(data);
        return objID;
    }
    catch (err) {
        console.log("Error in saveData:", err);
        throw err;
    }
}
