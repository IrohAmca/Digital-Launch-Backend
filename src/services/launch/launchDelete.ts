import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { Main } from '../../models/main_schema';

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

async function deleteLaunch(id: string) {
    try {
        await connectToDatabase();
        await Main.findByIdAndDelete(id);
    } catch (err) {
        console.error("Error deleting post:", err);
        throw err;
    }
    finally{
        mongoose.connection.close();
    }
}

async function deleteAllLaunch() {
    try {
        await connectToDatabase();
        await Main.deleteMany({});
    } catch (err) {
        console.error("Error deleting all posts:", err);
        throw err;
    }
    finally{
        mongoose.connection.close();
    }
}
export { deleteLaunch, deleteAllLaunch };