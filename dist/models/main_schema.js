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
        Turkce: {
            Lansman_Adi: { type: String, default: '' },
            Lansman_URL: { type: String, default: '' },
            Lansman_Başlangıc_Tarihi: { type: Date, default: null },
            Lansman_Bitis_Tarihi: { type: Date, default: null },
            Sıra_Numarası: { type: String, default: '' },
        },
        Ingilizce: {
            Lansman_Adi: { type: String, default: '' },
            Lansman_URL: { type: String, default: '' },
            Lansman_Başlangıc_Tarihi: { type: Date, default: null },
            Lansman_Bitis_Tarihi: { type: Date, default: null },
            Sıra_Numarası: { type: String, default: '' },
        }
    },
    Bolumler: {
        Fragman_Bolumu: {
            Turkce: {
                Logo: { type: String, default: '' },
                Baslık: { type: String, default: '' },
                Alt_Baslık: { type: String, default: '' },
                Paragraf: { type: String, default: '' },
                Button_Metini: { type: String, default: '' },
                Video_Link: { type: String, default: '' },
                Arkaplan_Gorseli: { type: String, default: '' },
            },
            Ingilizce: {
                Logo: { type: String, default: '' },
                Baslık: { type: String, default: '' },
                Alt_Baslık: { type: String, default: '' },
                Paragraf: { type: String, default: '' },
                Button_Metini: { type: String, default: '' },
                Video_Link: { type: String, default: '' },
                Arkaplan_Gorseli: { type: String, default: '' },
            }
        },
        Yayın_Bolumu: {
            Turkce: {
                Yayın_Status: { type: String, default: '' },
                Yayın_Link: { type: String, default: '' },
            },
            Ingilizce: {
                Yayın_Status: { type: String, default: '' },
                Yayın_Link: { type: String, default: '' },
            }
        },
        Tanıtım_Bolumu: {
            Turkce: {
                Ust_Baslık: { type: String, default: '' },
                Baslık: { type: String, default: '' },
                Paragraf: { type: String, default: '' },
                Video_Link: { type: String, default: '' },
                Gorsel: { type: String, default: '' },
                Button_Metni: { type: String, default: '' },
            },
            Ingilizce: {
                Ust_Baslık: { type: String, default: '' },
                Baslık: { type: String, default: '' },
                Paragraf: { type: String, default: '' },
                Video_Link: { type: String, default: '' },
                Gorsel: { type: String, default: '' },
                Button_Metni: { type: String, default: '' },
            }
        },
        Logolar_Bolumu: {
            Turkce: {
                Ust_Baslık: { type: String, default: '' },
                Baslık: { type: String, default: '' },
                Logolar: [{
                        Logo: { type: String, default: '' },
                        Link: { type: String, default: '' },
                    }],
            },
            Ingilizce: {
                Ust_Baslık: { type: String, default: '' },
                Baslık: { type: String, default: '' },
                Logolar: [{
                        Logo: { type: String, default: '' },
                        Link: { type: String, default: '' },
                    }],
            }
        },
        Sponsorlar_Bolumu: {
            Turkce: {
                Gorsel: { type: String, default: '' },
                Link: { type: String, default: '' },
            },
            Ingilizce: {
                Gorsel: { type: String, default: '' },
                Link: { type: String, default: '' },
            }
        },
        Ozellikler_Bolumu: {
            Turkce: {
                Ust_Baslık: { type: String, default: '' },
                Baslık: { type: String, default: '' },
                Ozellikler: [{
                        Ozellik_Baslik: { type: String, default: '' },
                        Ozellik_Gorsel: { type: String, default: '' },
                        Ozellik_Paragraf: { type: String, default: '' },
                    }],
            },
            Ingilizce: {
                Ust_Baslık: { type: String, default: '' },
                Baslık: { type: String, default: '' },
                Ozellikler: [{
                        Ozellik_Baslik: { type: String, default: '' },
                        Ozellik_Gorsel: { type: String, default: '' },
                        Ozellik_Paragraf: { type: String, default: '' },
                    }],
            }
        },
        Sertifikalar_Bolumu: {
            Turkce: {
                Ust_Baslık: { type: String, default: '' },
                Baslık: { type: String, default: '' },
                Sertifikalar: [{
                        Link: { type: String, default: '' },
                    }],
            },
            Ingilizce: {
                Ust_Baslık: { type: String, default: '' },
                Baslık: { type: String, default: '' },
                Sertifikalar: [{
                        Link: { type: String, default: '' },
                    }],
            }
        },
        Katalog_Bolumu: {
            Turkce: {
                Ust_Baslık: { type: String, default: '' },
                Baslık: { type: String, default: '' },
                Katalog: { type: String, default: '' },
                Button_Metni: { type: String, default: '' },
            },
            Ingilizce: {
                Ust_Baslık: { type: String, default: '' },
                Baslık: { type: String, default: '' },
                Katalog: { type: String, default: '' },
                Button_Metni: { type: String, default: '' },
            }
        },
        Gorseller_Bolumu: {
            Turkce: {
                Ust_Baslık: { type: String, default: '' },
                Baslık: { type: String, default: '' },
                Gorseller: [{
                        Gorsel_Link: { type: String, default: '' },
                        Gorsel_Ust_Acıklama: { type: String, default: '' },
                        Gorsel_Ust_Baslık: { type: String, default: '' },
                    }],
            },
            Ingilizce: {
                Ust_Baslık: { type: String, default: '' },
                Baslık: { type: String, default: '' },
                Gorseller: [{
                        Gorsel_Link: { type: String, default: '' },
                        Gorsel_Ust_Acıklama: { type: String, default: '' },
                        Gorsel_Ust_Baslık: { type: String, default: '' },
                    }],
            }
        },
        Iletisim_Bolumu: {
            Turkce: {
                Ust_Baslık: { type: String, default: '' },
                Baslık: { type: String, default: '' },
                Paragraf: { type: String, default: '' },
                Adres: { type: String, default: '' },
                Telefon: { type: String, default: '' },
                E_Posta: { type: String, default: '' },
                Sosyal_Medya: [{
                        Sosyal_Medya_Platfrom: { type: String, default: '' },
                        Sosyal_Medya_Link: { type: String, default: '' },
                    }],
            },
            Ingilizce: {
                Ust_Baslık: { type: String, default: '' },
                Baslık: { type: String, default: '' },
                Paragraf: { type: String, default: '' },
                Adres: { type: String, default: '' },
                Telefon: { type: String, default: '' },
                E_Posta: { type: String, default: '' },
                Sosyal_Medya: [{
                        Sosyal_Medya_Platfrom: { type: String, default: '' },
                        Sosyal_Medya_Link: { type: String, default: '' },
                    }],
            }
        },
        CTA_Bolumu: {
            Turkce: {
                Baslık: { type: String, default: '' },
                Button_Metni: { type: String, default: '' },
            },
            Ingilizce: {
                Baslık: { type: String, default: '' },
                Button_Metni: { type: String, default: '' },
            }
        },
    },
    Tasarım_Ayarları: {
        Ana_Renk: { type: String, default: '' },
        Arkaplan_Renk: { type: String, default: '' },
        Baslık_Metin_Renk: { type: String, default: '' },
        Ust_Baslık_Metin_Renk: { type: String, default: '' },
        Paragraf_Metin_Renk: { type: String, default: '' },
        Button_Renk: { type: String, default: '' },
        Ozellikler_Arka_Plan_Renk: { type: String, default: '' },
    },
    Sıralama_Ayarları: {},
    SEO_Ayarları: {
        Turkce: {
            Baslık: { type: String, default: '' },
            Anahtar_Kelimeler: { type: String, default: '' },
            Açıklama: { type: String, default: '' },
            Sosyal_Medya_Paylasım_Gorseli: { type: String, default: '' },
            Index_Durumu: { type: Boolean, default: true },
            Takip_Etme: { type: Boolean, default: true },
        },
        Ingilizce: {
            Baslık: { type: String, default: '' },
            Anahtar_Kelimeler: { type: String, default: '' },
            Açıklama: { type: String, default: '' },
            Sosyal_Medya_Paylasım_Gorseli: { type: String, default: '' },
            Index_Durumu: { type: Boolean, default: true },
            Takip_Etme: { type: Boolean, default: true },
        }
    }
});
const Post = mongoose_1.default.model('Post', PostSchema, "test");
exports.Post = Post;
