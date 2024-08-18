import mongoose, { Schema, Document } from 'mongoose';

interface IDesign extends Document {
    Tasarim_Ayarları: {
        Turkce: {
            Ust_Baslık: string,
            Baslık: string,
            Paragraf: string,
            Button_Metni: string,
            Arkaplan_Gorseli: string,
        },
        Ingilizce: {
            Ust_Baslık: string,
            Baslık: string,
            Paragraf: string,
            Button_Metni: string,
            Arkaplan_Gorseli: string,
        }
    }
}

const DesignSchema: Schema = new Schema({
    Tasarim_Ayarları: {
        Turkce: {
            Ust_Baslık: { type: String, required: true },
            Baslık: { type: String, required: true },
            Paragraf: { type: String, required: true },
            Button_Metni: { type: String, required: true },
            Arkaplan_Gorseli: { type: String, required: true },
        },
        Ingilizce: {
            Ust_Baslık: { type: String, required: true },
            Baslık: { type: String, required: true },
            Paragraf: { type: String, required: true },
            Button_Metni: { type: String, required: true },
            Arkaplan_Gorseli: { type: String, required: true },
        }
    }
});

const Design = mongoose.model<IDesign>('Design', DesignSchema, "test");

export { Design, IDesign };