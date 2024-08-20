import mongoose from 'mongoose';
import { IPost, Post } from '../models/main_schema';
import dotenv from 'dotenv';
import path from 'path';
import { IGeneral } from '../models/general_info_schema';

const envPath = path.resolve(__dirname, '../../.env');

dotenv.config({ path: envPath });

const uri = process.env.MONGO_URI || '';

interface ILaunchInfo {
    Launch_Name: string;
    Launch_Start_Date: string;
    Launch_End_Date: string;
    Livestream_Status: boolean;
    id: string;
}

function transformResponse(data: any[]): ILaunchInfo[] {
    return data.map(item => ({
        Launch_Name: item.General_Info.Turkish.Launch_Name,
        Launch_Start_Date: item.General_Info.Turkish.Launch_Start_Date,
        Launch_End_Date: item.General_Info.Turkish.Launch_End_Date,
        Livestream_Status: item.Sections.Livestream_Section.Turkish.Livestream_Status,
        id: item._id
    }));
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

async function readLansman(id: string): Promise<IPost> {
    try {
        await connectToDatabase();
        const post = await Post.findById(id);
        if (!post) {
            throw new Error("Post not found");
        }
        return post;
    } catch (err) {
        console.error("Error reading post:", err);
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
async function readListLansman(): Promise<ILaunchInfo[]> {
    try {
        await connectToDatabase();
        const posts = await Post.find({}, 'General_Info.Turkish.Launch_Name General_Info.Turkish.Launch_Start_Date General_Info.Turkish.Launch_End_Date Sections.Livestream_Section.Turkish.Livestream_Status');
        return transformResponse(posts);
    } catch (err) {
        console.error("Error reading posts:", err);
        throw err;
    } finally {
        mongoose.connection.close();
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

async function deleteLansman(id: string) {
    try {
        await connectToDatabase();
        await Post.findByIdAndDelete(id);
    } catch (err) {
        console.error("Error deleting post:", err);
        throw err;
    }
}

export { readAllData, readData, updateSection, updateSectionPart, saveGeneralInfo, readListLansman, deleteLansman,readLansman };
