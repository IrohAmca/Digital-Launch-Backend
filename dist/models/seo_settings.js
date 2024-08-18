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
exports.SEO = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const SEOSchema = new mongoose_1.Schema({
    SEO_Ayarları: {
        Turkce: {
            Baslık: { type: String, required: true },
            Anahtar_Kelimeler: { type: String, required: true },
            Açıklama: { type: String, required: true },
            Sosyal_Medya_Paylasım_Gorseli: { type: String, required: true },
            Index_Durumu: { type: Boolean, required: true },
            Takip_Etme: { type: Boolean, required: true },
        },
        Ingilizce: {
            Baslık: { type: String, required: true },
            Anahtar_Kelimeler: { type: String, required: true },
            Açıklama: { type: String, required: true },
            Sosyal_Medya_Paylasım_Gorseli: { type: String, required: true },
            Index_Durumu: { type: Boolean, required: true },
            Takip_Etme: { type: Boolean, required: true },
        }
    }
});
const SEO = mongoose_1.default.model('SEO', SEOSchema, "test");
exports.SEO = SEO;
