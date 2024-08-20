import mongoose from 'mongoose';
import { IPost, Post } from '../models/main_schema';
import dotenv from 'dotenv';
import path from 'path';

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

function transformResponse(data: any[]): ILaunchInfo[] {
    return data.map(item => ({
        Launch_Name: item.General_Info.Turkish.Launch_Name,
        Launch_Start_Date: item.General_Info.Turkish.Launch_Start_Date,
        Launch_End_Date: item.General_Info.Turkish.Launch_End_Date,
        Livestream_Status: item.Sections.Livestream_Section.Turkish.Livestream_Status,
        id: item._id
    }));
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

export { readListLansman, readLansman, readAllData };