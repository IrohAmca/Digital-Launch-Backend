import mongoose, { Schema, Document } from 'mongoose';

interface ILogos extends Document {
    Logos_Section: {
        Turkish: {
            Main_Title: string,
            Title: string,
            Logos: {
                Logo: string,
                Link: string,
            }[],
        }
        English: {
            Main_Title: string,
            Title: string,
            Logos: {
                Logo: string,
                Link: string,
            }[],
        }
    }
}

const LogosSchema: Schema = new Schema({
    Logos_Section: {
        Turkish: {
            Main_Title: { type: String, required: true },
            Title: { type: String, required: true },
            Logos: [{
                Logo: { type: String, required: true },
                Link: { type: String, required: true },
            }],
        },
        English: {
            Main_Title: { type: String, required: true },
            Title: { type: String, required: true },
            Logos: [{
                Logo: { type: String, required: true },
                Link: { type: String, required: true },
            }],
        }
    }
});

const Logos = mongoose.model<ILogos>('Logos', LogosSchema, "test");

export { Logos, ILogos };