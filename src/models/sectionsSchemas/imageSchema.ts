import mongoose, { Schema, Document } from 'mongoose';

interface IImage extends Document {
    Images_Section: {
        Turkish: {
            Main_Title: string,
            Title: string,
            Images: {
                Image_Link: string,
                Image_Caption: string,
                Image_Title: string,
            }[],
        },
        English: {
            Main_Title: string,
            Title: string,
            Images: {
                Image_Link: string,
                Image_Caption: string,
                Image_Title: string,
            }[],
        }
    }
}

const ImageSchema: Schema = new Schema({
    Images_Section: {
        Turkish: {
            Main_Title: { type: String, required: true },
            Title: { type: String, required: true },
            Images: [{
                Image_Link: { type: String, required: true },
                Image_Caption: { type: String, required: true },
                Image_Title: { type: String, required: true },
            }],
        },
        English: {
            Main_Title: { type: String, required: true },
            Title: { type: String, required: true },
            Images: [{
                Image_Link: { type: String, required: true },
                Image_Caption: { type: String, required: true },
                Image_Title: { type: String, required: true },
            }],
        }
    }
});

const Image = mongoose.model<IImage>('Image', ImageSchema, "test");

export { Image, IImage };
