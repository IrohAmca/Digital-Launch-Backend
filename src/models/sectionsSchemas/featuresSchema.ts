import mongoose, { Schema, Document } from 'mongoose';

interface IFeatures extends Document {
    Features_Section: {
        Turkish: {
            Main_Title: string,
            Title: string,
            Features: {
                Feature_Title: string,
                Feature_Image: string,
                Feature_Paragraph: string,
            }[],
        },
        English: {
            Main_Title: string,
            Title: string,
            Features: {
                Feature_Title: string,
                Feature_Image: string,
                Feature_Paragraph: string,
            }[],
        }
    }
}

const FeaturesSchema: Schema = new Schema({
    Features_Section: {
        Turkish: {
            Main_Title: { type: String, required: true },
            Title: { type: String, required: true },
            Features: [{
                Feature_Title: { type: String, required: true },
                Feature_Image: { type: String, required: true },
                Feature_Paragraph: { type: String, required: true },
            }],
        },
        English: {
            Main_Title: { type: String, required: true },
            Title: { type: String, required: true },
            Features: [{
                Feature_Title: { type: String, required: true },
                Feature_Image: { type: String, required: true },
                Feature_Paragraph: { type: String, required: true },
            }],
        }
    }
});

const Features = mongoose.model<IFeatures>('Features', FeaturesSchema, "test");

export { Features, IFeatures };
