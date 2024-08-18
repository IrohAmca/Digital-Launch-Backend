import mongoose, { Schema, Document } from 'mongoose';

interface IPost extends Document {
    Genel_Bilgiler: {
        Turkce: {
            Lansman_Adi: string,
            Lansman_URL: string,
            Lansman_Başlangıc_Tarihi: Date,
            Lansman_Bitis_Tarihi: Date,
            Sıra_Numarası: string,
        },
        Ingilizce: {
            Lansman_Adi: string,
            Lansman_URL: string,
            Lansman_Başlangıc_Tarihi: Date,
            Lansman_Bitis_Tarihi: Date,
            Sıra_Numarası: string,
        }
    },
    Bolumler: {
        Fragman_Bolumu: {
            Turkce: {
                Logo: string,
                Baslık: string,
                Alt_Baslık: string,
                Paragraf: string,
                Button_Metini: string,
                Video_Link: string,
                Arkaplan_Gorseli: string,
            },
            Ingilizce: {
                Logo: string,
                Baslık: string,
                Alt_Baslık: string,
                Paragraf: string,
                Button_Metini: string,
                Video_Link: string,
                Arkaplan_Gorseli: string,
            }
        },
        Yayın_Bolumu: {
            Turkce: {
                Yayın_Status: string,
                Yayın_Link: string,
            },
            Ingilizce: {
                Yayın_Status: string,
                Yayın_Link: string,
            }
        },
        Tanıtım_Bolumu: {
            Turkce: {
                Ust_Baslık: string,
                Baslık: string,
                Paragraf: string,
                Video_Link: string,
                Gorsel: string,
                Button_Metni: string,
            },
            Ingilizce: {
                Ust_Baslık: string,
                Baslık: string,
                Paragraf: string,
                Video_Link: string,
                Gorsel: string,
                Button_Metni: string,
            }
        },
        Logolar_Bolumu: {
            Turkce: {
                Ust_Baslık: string,
                Baslık: string,
                Logolar: {
                    Logo: string,
                    Link: string,
                }[],
            }
            Ingilizce: {
                Ust_Baslık: string,
                Baslık: string,
                Logolar: {
                    Logo: string,
                    Link: string,
                }[],
            }
        },
        Sponsorlar_Bolumu: {
            Turkce: {
                Gorsel: string,
                Link: string,
            },
            Ingilizce: {
                Gorsel: string,
                Link: string,
            }
        },
        Ozellikler_Bolumu: {
            Turkce: {
                Ust_Baslık: string,
                Baslık: string,
                Ozellikler: {
                    Ozellik_Baslik: string,
                    Ozellik_Gorsel: string,
                    Ozellik_Paragraf: string,
                }[],
            },
            Ingilizce: {
                Ust_Baslık: string,
                Baslık: string,
                Ozellikler: {
                    Ozellik_Baslik: string,
                    Ozellik_Gorsel: string,
                    Ozellik_Paragraf: string,
                }[],
            }
        },
        Sertifikalar_Bolumu: {
            Turkce: {
                Ust_Baslık: string,
                Baslık: string,
                Sertifikalar: {
                    Link: string,
                }[],
            },
            Ingilizce: {
                Ust_Baslık: string,
                Baslık: string,
                Sertifikalar: {
                    Link: string,
                }[],
            }
        },
        Katalog_Bolumu: {
            Turkce: {
                Ust_Baslık: string,
                Baslık: string,
                Katalog: string,
                Button_Metni: string,
            },
            Ingilizce: {
                Ust_Baslık: string,
                Baslık: string,
                Katalog: string,
                Button_Metni: string,
            }
        },
        Gorseller_Bolumu: {
            Turkce: {
                Ust_Baslık: string,
                Baslık: string,
                Gorseller: {
                    Gorsel_Link: string,
                    Gorsel_Ust_Acıklama: string,
                    Gorsel_Ust_Baslık: string,
                }[],
            },
            Ingilizce: {
                Ust_Baslık: string,
                Baslık: string,
                Gorseller: {
                    Gorsel_Link: string,
                    Gorsel_Ust_Acıklama: string,
                    Gorsel_Ust_Baslık: string,
                }[],
            }
        },
        Iletisim_Bolumu: {
            Turkce: {
                Ust_Baslık: string,
                Baslık: string,
                Paragraf: string,
                Adres: string,
                Telefon: string,
                E_Posta: string,
                Sosyal_Medya: {
                    Sosyal_Medya_Platfrom: string,
                    Sosyal_Medya_Link: string,
                }[],
            },
            Ingilizce: {
                Ust_Baslık: string,
                Baslık: string,
                Paragraf: string,
                Adres: string,
                Telefon: string,
                E_Posta: string,
                Sosyal_Medya: {
                    Sosyal_Medya_Platfrom: string,
                    Sosyal_Medya_Link: string,
                }[],
            }
        },
        CTA_Bolumu: {
            Turkce: {
                Baslık: string,
                Button_Metni: string,
            },
            Ingilizce: {
                Baslık: string,
                Button_Metni: string,
            }
        },
    },
    Tasarım_Ayarları: {
        Ana_Renk: string,
        Arkaplan_Renk: string,
        Baslık_Metin_Renk: string,
        Ust_Baslık_Metin_Renk: string,
        Paragraf_Metin_Renk: string,
        Button_Renk: string,
        Ozellikler_Arka_Plan_Renk: string,
    },
    Sıralama_Ayarları: {},
    SEO_Ayarları: {
        Turkce: {
            Baslık: string,
            Anahtar_Kelimeler: string,
            Açıklama: string,
            Sosyal_Medya_Paylasım_Gorseli: string,
            Index_Durumu: boolean,
            Takip_Etme: boolean,
        },
        Ingilizce: {
            Baslık: string,
            Anahtar_Kelimeler: string,
            Açıklama: string,
            Sosyal_Medya_Paylasım_Gorseli: string,
            Index_Durumu: boolean,
            Takip_Etme: boolean,
        }
    }
}

const PostSchema: Schema = new Schema({
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
    Sıralama_Ayarları: {
    },
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

const Post = mongoose.model<IPost>('Post', PostSchema, "test");

export { IPost, Post };
