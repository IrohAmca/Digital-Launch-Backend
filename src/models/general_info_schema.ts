import mongoose, { Schema, Document } from 'mongoose';

interface IGeneral extends Document {
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
    }
}

const GeneralInfo: Schema = new Schema({
    Genel_Bilgiler: {
        Turkce: {
            Lansman_Adi: { type: String, required: true },
            Lansman_URL: { type: String, required: true },
            Lansman_Başlangıc_Tarihi: { type: Date, required: true },
            Lansman_Bitis_Tarihi: { type: Date, required: true },
            Sıra_Numarası: { type: String, required: true },
        },
        Ingilizce: {
            Lansman_Adi: { type: String, required: true },
            Lansman_URL: { type: String, required: true },
            Lansman_Başlangıc_Tarihi: { type: Date, required: true },
            Lansman_Bitis_Tarihi: { type: Date, required: true },
            Sıra_Numarası: { type: String, required: true },
        }
    }
});


const General = mongoose.model<IGeneral>('GeneralInfo', GeneralInfo, "test");

export { General, IGeneral };