import mongoose, { Schema, Document } from 'mongoose';

interface IDesign extends Document {
    Design_Settings: {
        Primary_Color: string,
        Background_Color: string,
        Title_Text_Color: string,
        Main_Title_Text_Color: string,
        Paragraph_Text_Color: string,
        Button_Color: string,
        Features_Background_Color: string,
    }
}

const DesignSchema: Schema = new Schema({
    Design_Settings: {
        Primary_Color: { type: String, required: true },
        Background_Color: { type: String, required: true },
        Title_Text_Color: { type: String, required: true },
        Main_Title_Text_Color: { type: String, required: true },
        Paragraph_Text_Color: { type: String, required: true },
        Button_Color: { type: String, required: true },
        Features_Background_Color: { type: String, required: true },
    }
});

const Design = mongoose.model<IDesign>('Design', DesignSchema, "test");

export { Design, IDesign };