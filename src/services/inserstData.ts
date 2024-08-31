import mongoose from 'mongoose';
import { IMain, Main } from '../models/main_schema';
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '../../.env');

dotenv.config({ path: envPath });

const uri = process.env.MONGO_URI || '';

async function submitGeneral(data: any) {
    try {
        const objID = await saveGeneralInfo(data);
        return objID;
    } catch (err) {
        console.log("Error in saveData:", err);
        throw err;
    }
    finally{
        mongoose.connection.close();
    }
}


async function connectToDatabase() {
    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect(uri);
            console.log("Connected to MongoDB");
        } catch (err) {
            console.error("MongoDB connection error:", err);
            throw err;
        }
    }
}

async function saveGeneralInfo(generalInfo: IMain) {
    await connectToDatabase();
    const post = new Main({ LaunchFormData: generalInfo.LaunchFormData });
    const savedPost = await post.save();
    mongoose.connection.close();
    return savedPost._id;
}

async function updateSection(sectionName: string, sectionData: string, postId: any) {
    try {
        await connectToDatabase();
        await Main.findByIdAndUpdate(
            postId,
            { $set: { [sectionName]: sectionData } },
            { new: true }
        );
    } catch (err) {
        console.error("Error updating section:", err);
        throw err;
    }
    finally{
        mongoose.connection.close();
    }
}

async function updateSectionPart(partname: string, sectionData: any, postId: any) {
    try {
        await connectToDatabase();
        const update = { $set: { [`Components.${partname}`]: sectionData } };
        await Main.findByIdAndUpdate(postId, update, { new: true });
    } catch (err) {
        console.error("Error updating section part:", err);
        throw err;
    }
    finally{
        mongoose.connection.close();
    }
}
export { updateSection, updateSectionPart, saveGeneralInfo, submitGeneral };
