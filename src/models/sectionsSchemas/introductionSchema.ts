import mongoose, { Schema, Document } from 'mongoose';


interface IIntroduction extends Document {
    Introduction_Section: {
        Turkish: {
            Main_Title: string,
            Title: string,
            Paragraph: string,
            Video_Link: string,
            Image: string,
            Button_Text: string,
        },
        English: {
            Main_Title: string,
            Title: string,
            Paragraph: string,
            Video_Link: string,
            Image: string,
            Button_Text: string,
        }
    }
}

const IntroductionSchema: Schema = new Schema({
    Introduction_Section: {
        Turkish: {
            Main_Title: { type: String, required: true },
            Title: { type: String, required: true },
            Paragraph: { type: String, required: true },
            Video_Link: { type: String, required: true },
            Image: { type: String, required: true },
            Button_Text: { type: String, required: true },
        },
        English: {
            Main_Title: { type: String, required: true },
            Title: { type: String, required: true },
            Paragraph: { type: String, required: true },
            Video_Link: { type: String, required: true },
            Image: { type: String, required: true },
            Button_Text: { type: String, required: true },
        }
    }
});

const Introduction = mongoose.model<IIntroduction>('Introduction', IntroductionSchema, "test");

export { Introduction, IIntroduction };
