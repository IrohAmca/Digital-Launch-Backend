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
exports.Section = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const SectionSchema = new mongoose_1.Schema({
    Bolumler: {
        Fragman_Bolumu: {
            Turkce: {
                Logo: { type: String, required: true },
                Baslık: { type: String, required: true },
                Alt_Baslık: { type: String, required: true },
                Paragraf: { type: String, required: true },
                Button_Metini: { type: String, required: true },
                Video_Link: { type: String, required: true },
                Arkaplan_Gorseli: { type: String, required: true },
            },
            Ingilizce: {
                Logo: { type: String, required: true },
                Baslık: { type: String, required: true },
                Alt_Baslık: { type: String, required: true },
                Paragraf: { type: String, required: true },
                Button_Metini: { type: String, required: true },
                Video_Link: { type: String, required: true },
                Arkaplan_Gorseli: { type: String, required: true },
            }
        },
        Yayın_Bolumu: {
            Turkce: {
                Yayın_Status: { type: String, required: true },
                Yayın_Link: { type: String, required: true },
            },
            Ingilizce: {
                Yayın_Status: { type: String, required: true },
                Yayın_Link: { type: String, required: true },
            }
        },
        Tanıtım_Bolumu: {
            Turkce: {
                Ust_Baslık: { type: String, required: true },
                Baslık: { type: String, required: true },
                Paragraf: { type: String, required: true },
                Video_Link: { type: String, required: true },
                Gorsel: { type: String, required: true },
                Button_Metni: { type: String, required: true },
            },
            Ingilizce: {
                Ust_Baslık: { type: String, required: true },
                Baslık: { type: String, required: true },
                Paragraf: { type: String, required: true },
                Video_Link: { type: String, required: true },
                Gorsel: { type: String, required: true },
                Button_Metni: { type: String, required: true },
            }
        },
        Logolar_Bolumu: {
            Turkce: {
                Ust_Baslık: { type: String, required: true },
                Baslık: { type: String, required: true },
                Logolar: [{
                        Logo: { type: String, required: true },
                        Link: { type: String, required: true },
                    }],
            },
            Ingilizce: {
                Ust_Baslık: { type: String, required: true },
                Baslık: { type: String, required: true },
                Logolar: [{
                        Logo: { type: String, required: true },
                        Link: { type: String, required: true },
                    }],
            }
        },
        Sponsorlar_Bolumu: {
            Turkce: {
                Gorsel: { type: String, required: true },
                Link: { type: String, required: true },
            },
            Ingilizce: {
                Gorsel: { type: String, required: true },
                Link: { type: String, required: true },
            }
        },
        Ozellikler_Bolumu: {
            Turkce: {
                Ust_Baslık: { type: String, required: true },
                Baslık: { type: String, required: true },
                Ozellikler: [{
                        Ozellik_Baslik: { type: String, required: true },
                        Ozellik_Gorsel: { type: String, required: true },
                        Ozellik_Paragraf: { type: String, required: true },
                    }],
            },
            Ingilizce: {
                Ust_Baslık: { type: String, required: true },
                Baslık: { type: String, required: true },
                Ozellikler: [{
                        Ozellik_Baslik: { type: String, required: true },
                        Ozellik_Gorsel: { type: String, required: true },
                        Ozellik_Paragraf: { type: String, required: true },
                    }],
            }
        }
    }
});
const Section = mongoose_1.default.model('Section', SectionSchema, "test");
exports.Section = Section;
