import mongoose, { Schema, Document } from 'mongoose';

interface ISponsor extends Document {
    Sponsors_Section: {
        Turkish: {
            Image: string,
            Link: string,
        },
        English: {
            Image: string,
            Link: string,
        }
    }
}

const SponsorSchema: Schema = new Schema({
    Sponsors_Section: {
        Turkish: {
            Image: { type: String, required: true },
            Link: { type: String, required: true },
        },
        English: {
            Image: { type: String, required: true },
            Link: { type: String, required: true },
        }
    }
});

const Sponsor = mongoose.model<ISponsor>('Sponsor', SponsorSchema, "test");

export { Sponsor, ISponsor };