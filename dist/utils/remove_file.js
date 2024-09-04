"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFile = removeFile;
const fs_1 = __importDefault(require("fs"));
function removeFile(path) {
    return new Promise((resolve, reject) => {
        fs_1.default.unlink(path, (err) => {
            if (err) {
                console.error('Error', err);
                resolve(false);
            }
            else {
                resolve(true);
            }
        });
    });
}
