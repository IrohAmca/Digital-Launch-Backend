import mongoose from 'mongoose';
import { IPost, Post } from '../models/main_schema';
import dotenv from 'dotenv';
import path from 'path';
import { IGeneral } from '../models/general_info_schema';
import { ISection } from '../models/sections_schema';
import { Design } from '../models/design_schema';
import { IPlacemant, Placemant } from '../models/placemant_schema';

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

async function saveData(postData: IPost) {
    try {
        await connectToDatabase();
        const post = new Post(postData);
        await post.save();
        console.log("Post saved");
    } catch (err) {
        console.error("Error saving post:", err);
        throw err;
    } finally {
        mongoose.connection.close();
    }
}

async function readAllData(): Promise<IPost[]> {
    try {
        await connectToDatabase();
        const posts = await Post.find({});
        return posts;
    } catch (err) {
        console.error("Error reading posts:", err);
        throw err;
    } finally {
        mongoose.connection.close();
    }
}

async function readData(Lansman_Adi: string): Promise<IPost | null> {
    try {
        await connectToDatabase();
        const post = await Post.findOne({ "Genel_Bilgiler.Lansman_Adi": Lansman_Adi });
        return post;
    } catch (err) {
        console.error("Error reading post:", err);
        throw err;
    } finally {
        mongoose.connection.close();
    }
}

async function saveGeneralInfo(generalInfo: IGeneral) {
    await connectToDatabase();
    const post = new Post({ Genel_Bilgiler: generalInfo.Genel_Bilgiler });
    console.log(post)
    const savedPost = await post.save();
    return savedPost._id;
}

async function saveSections(sectionData: string, postId: any) {
    try {
        await connectToDatabase();
        await Post.findByIdAndUpdate(
            postId,
            { $set: { "Bolumler": sectionData } },
            { new: true }
        );
    } catch (err) {
        console.error("Error saving sections:", err);
        throw err;
    }
}

async function saveDesign(designData: string, postId: any) {
    try {
        await connectToDatabase();
        await Post.findByIdAndUpdate(
            postId,
            { $set: { "Tasarım_Ayarları": designData } },
            { new: true }
        );
    } catch (err) {
        console.error("Error saving design:", err);
        throw err;
    }
}

async function savePlacemant(placemantData: IPlacemant, postId: any) {
    try {
        await connectToDatabase();
        await Post.findByIdAndUpdate(
            postId,
            { $set: { "Sıralama_Ayarları": placemantData } },
            { new: true }
        );
    } catch (err) {
        console.error("Error saving placemant:", err);
        throw err;
    }
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

export { saveData, readAllData, readData, saveGeneralInfo, updateSection, saveDesign };
