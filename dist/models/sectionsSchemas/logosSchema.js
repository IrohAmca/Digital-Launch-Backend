"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logos = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const LogosSchema = new mongoose_1.Schema({
    Logos_Section: {
        Turkish: {
            Main_Title: { type: String, required: true },
            Title: { type: String, required: true },
            Logos: [{
                    Logo: { type: String, required: true },
                    Link: { type: String, required: true },
                }],
        },
        English: {
            Main_Title: { type: String, required: true },
            Title: { type: String, required: true },
            Logos: [{
                    Logo: { type: String, required: true },
                    Link: { type: String, required: true },
                }],
        }
    }
});
const Logos = mongoose_1.default.model('Logos', LogosSchema, "test");
exports.Logos = Logos;
