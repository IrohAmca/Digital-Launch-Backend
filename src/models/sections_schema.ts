import mongoose, { Schema, Document } from 'mongoose';

interface ISection extends Document {
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
        }
    }
}

const SectionSchema: Schema = new Schema({
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

const Section = mongoose.model<ISection>('Section', SectionSchema, "test");

export { Section, ISection };