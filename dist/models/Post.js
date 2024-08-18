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
exports.Post = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const PostSchema = new mongoose_1.Schema({
    Genel_Bilgiler: {
        Lansman_Adi: { type: String, required: true },
        Lansman_Başlangıc_Tarihi: { type: Date, required: true },
        Lansman_Bitis_Tarihi: { type: Date, required: true },
        Firma_Adi: { type: String, required: true },
    },
    Ust_Bolum: {
        Canli_Yayin_Linki: { type: String, required: true },
        Cover_Gorseli: { type: String, required: true },
        Urun_Logosu: { type: String, required: true },
        Kunye_Bilgileri: { type: String, required: true },
        Açıklama_Yazısı: { type: String, required: true },
    },
    Ozellikler: [{
            Ozellikler_Bolum_Basligi: { type: String, required: true },
            Ozellik_Baslik: { type: String, required: true },
            Ozellik_Acıklama: { type: String, required: true },
        }],
    Dosyalar: [{
            Bolum_Baslıgı: { type: String, required: true },
            Dosya_Ust_Acıklama: { type: String, required: true },
            Dosya_Baslık: { type: String, required: true },
            Dosya_Link: { type: String, required: true },
            Dosya_Gorsel: { type: String, required: true },
        }],
    Iletisim: {
        Bolum_Baslıgı: { type: String, required: true },
        Acıklama: { type: String, required: true },
        Adres: { type: String, required: true },
        Telefon: { type: String, required: true },
        EMail: { type: String, required: true },
        Sosyal_Medya: [{ type: String, required: true }],
    },
    Tasarım: {
        Ana_Renk: { type: String, required: true },
        Arkaplan_Renk: { type: String, required: true },
        Baslık_Metin_Renk: { type: String, required: true },
        Ust_Baslık_Metin_Renk: { type: String, required: true },
        Paragraf_Metin_Renk: { type: String, required: true },
        Button_Renk: { type: String, required: true },
        Ozellikler_Arka_Plan_Renk: { type: String, required: true },
    }
});
const Post = mongoose_1.default.model('Post', PostSchema, "test");
exports.Post = Post;
