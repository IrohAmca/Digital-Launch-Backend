import mongoose, { Schema, Document } from 'mongoose';

interface ITrailer extends Document {
    Trailer_Section: {
        Turkish: {
            Logo: string,
            Title: string,
            Subtitle: string,
            Paragraph: string,
            Button_Text: string,
            Video_Link: string,
            Background_Image: string,
        },
        English: {
            Logo: string,
            Title: string,
            Subtitle: string,
            Paragraph: string,
            Button_Text: string,
            Video_Link: string,
            Background_Image: string,
        }
    }
}

const TrailerSchema: Schema = new Schema({
    Trailer_Section: {
        Turkish: {
            Logo: { type: String, required: true },
            Title: { type: String, required: true },
            Subtitle: { type: String, required: true },
            Paragraph: { type: String, required: true },
            Button_Text: { type: String, required: true },
            Video_Link: { type: String, required: true },
            Background_Image: { type: String, required: true },
        },
        English: {
            Logo: { type: String, required: true },
            Title: { type: String, required: true },
            Subtitle: { type: String, required: true },
            Paragraph: { type: String, required: true },
            Button_Text: { type: String, required: true },
            Video_Link: { type: String, required: true },
            Background_Image: { type: String, required: true },
        }
    }
});


const Trailer = mongoose.model<ITrailer>('Trailer', TrailerSchema, "test");

export { Trailer, ITrailer };

