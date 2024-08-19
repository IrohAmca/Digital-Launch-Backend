import mongoose, { Schema, Document } from 'mongoose';

interface IContact extends Document {
    Contact_Section: {
        Turkish: {
            Main_Title: string,
            Title: string,
            Paragraph: string,
            Address: string,
            Phone: string,
            Email: string,
            Social_Media: {
                Social_Media_Platform: string,
                Social_Media_Link: string,
            }[],
        },
        English: {
            Main_Title: string,
            Title: string,
            Paragraph: string,
            Address: string,
            Phone: string,
            Email: string,
            Social_Media: {
                Social_Media_Platform: string,
                Social_Media_Link: string,
            }[],
        }
    }
}

const ContactSchema: Schema = new Schema({
    Contact_Section: {
        Turkish: {
            Main_Title: { type: String, required: true },
            Title: { type: String, required: true },
            Paragraph: { type: String, required: true },
            Address: { type: String, required: true },
            Phone: { type: String, required: true },
            Email: { type: String, required: true },
            Social_Media: [{
                Social_Media_Platform: { type: String, required: true },
                Social_Media_Link: { type: String, required: true },
            }],
        },
        English: {
            Main_Title: { type: String, required: true },
            Title: { type: String, required: true },
            Paragraph: { type: String, required: true },
            Address: { type: String, required: true },
            Phone: { type: String, required: true },
            Email: { type: String, required: true },
            Social_Media: [{
                Social_Media_Platform: { type: String, required: true },
                Social_Media_Link: { type: String, required: true },
            }],
        }
    }
});

const Contact = mongoose.model<IContact>('Contact', ContactSchema, "test");

export { Contact, IContact };
