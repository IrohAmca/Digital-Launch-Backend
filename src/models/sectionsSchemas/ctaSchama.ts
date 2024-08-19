import mongoose, { Schema, Document } from 'mongoose';

interface ICta extends Document {
    CTA_Section: {
        Turkish: {
            Title: string,
            Button_Text: string,
        },
        English: {
            Title: string,
            Button_Text: string,
        }
    }
}

const CtaSchema: Schema = new Schema({
    CTA_Section: {
        Turkish: {
            Title: { type: String, required: true },
            Button_Text: { type: String, required: true },
        },
        English: {
            Title: { type: String, required: true },
            Button_Text: { type: String, required: true },
        }
    }
});

const Cta = mongoose.model<ICta>('Cta', CtaSchema, "test");

export { Cta, ICta };
