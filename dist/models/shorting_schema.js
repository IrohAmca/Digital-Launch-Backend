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
exports.Shorting = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const ShortingSchema = new mongoose_1.Schema({
    Sorting_Settings: {
        Trailer_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Livestream_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Introduction_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Logos_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Sponsor_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Features_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Certificates_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Catalog_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Images_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Contact_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        CTA_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        }
    }
});
const Shorting = mongoose_1.default.model('Shorting', ShortingSchema, "test");
exports.Shorting = Shorting;
