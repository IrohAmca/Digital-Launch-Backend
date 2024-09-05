import mongoose from "mongoose";

function generateID() {
    return Math.floor(Math.random() * 12587746);
}

function insertID(data: any[]) {
    return data.map((item) => ({ ...item, section_id: generateID() }));
}

export { insertID };