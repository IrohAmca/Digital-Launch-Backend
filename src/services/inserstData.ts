import mongoose from 'mongoose';
import { IPost, Post } from '../models/main_schema';
import dotenv from 'dotenv';
import path from 'path';
import { IGeneral } from '../models/general_info_schema';

const envPath = path.resolve(__dirname, '../../.env');

dotenv.config({ path: envPath });

const uri = process.env.MONGO_URI || '';

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

async function saveGeneralInfo(generalInfo: IGeneral) {
    await connectToDatabase();
    const post = new Post({ General_Info: generalInfo.GeneralInfo });
    const savedPost = await post.save();
    return savedPost._id;
}

async function updateSection(sectionName: string, sectionData: string, postId: any) {
    try {
        await connectToDatabase();
        await Post.findByIdAndUpdate(
            postId,
            { $set: { [sectionName]: sectionData } },
            { new: true }
        );
    } catch (err) {
        console.error("Error updating section:", err);
        throw err;
    }
}

async function updateSectionPart(partname: string, sectionData: string, postId: any) {
    try {
        await connectToDatabase();
        await Post.findByIdAndUpdate(
            postId,
            { $set: { "Sections.$[section].Parts.$[partname].Data": sectionData } },
            { new: true, arrayFilters: [{ "section.PartName": partname }] }
        );
    } catch (err) {
        console.error("Error updating section part:", err);
        throw err;
    }
}

export {updateSection, updateSectionPart, saveGeneralInfo};
