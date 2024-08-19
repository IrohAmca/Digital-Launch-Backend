import mongoose, { Schema, Document } from 'mongoose';

interface IGeneral extends Document {
    GeneralInfo: {
        Turkish: {
            Launch_Name: string,
            Launch_URL: string,
            Launch_Start_Date: Date,
            Launch_End_Date: Date,
            Order_Number: string,
        },
        English: {
            Launch_Name: string,
            Launch_URL: string,
            Launch_Start_Date: Date,
            Launch_End_Date: Date,
            Order_Number: string,
        }
    }
}

const GeneralInfo: Schema = new Schema({
    GeneralInfo: {
        Turkish: {
            Launch_Name: { type: String, required: true },
            Launch_URL: { type: String, required: true },
            Launch_Start_Date: { type: Date, required: true },
            Launch_End_Date: { type: Date, required: true },
            Order_Number: { type: String, required: true },
        },
        English: {
            Launch_Name: { type: String, required: true },
            Launch_URL: { type: String, required: true },
            Launch_Start_Date: { type: Date, required: true },
            Launch_End_Date: { type: Date, required: true },
            Order_Number: { type: String, required: true },
        }
    }
});


const General = mongoose.model<IGeneral>('GeneralInfo', GeneralInfo, "test");

export { General, IGeneral };