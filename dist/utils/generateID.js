"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertID = insertID;
function generateID() {
    return Math.floor(Math.random() * 12587746);
}
function insertID(data) {
    return data.map((item) => ({ ...item, section_id: generateID() }));
}
