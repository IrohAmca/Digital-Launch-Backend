"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitGeneral = submitGeneral;
const inserstData_1 = require("../services/inserstData");
async function submitGeneral(data) {
    try {
        const objID = await (0, inserstData_1.saveGeneralInfo)(data);
        return objID;
    }
    catch (err) {
        console.log("Error in saveData:", err);
        throw err;
    }
}
