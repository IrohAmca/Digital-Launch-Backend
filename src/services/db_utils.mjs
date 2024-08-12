import mongoose from 'mongoose';
import Post from '../models/Post.mjs';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, '.env');

dotenv.config({ path: envPath });

const uri = process.env.MONGO_URI;

async function connectToDatabase() {
    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect(uri, {
            });
            console.log("Connected to MongoDB");
        } catch (err) {
            console.error("MongoDB connection error:", err);
            throw err;
        }
    }
}

async function saveData(postData) {
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

async function readAllData() {
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

async function readData(Lansman_Adi) {
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

export { saveData, readAllData, readData };
