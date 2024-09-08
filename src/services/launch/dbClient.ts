import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import {info} from '../../utils/logger/logger';

const envPath = path.resolve(__dirname, '../../../.env');

dotenv.config({ path: envPath });

const uri = process.env.MONGO_URI || '';

async function connectToDatabase() {
    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect(uri);
            info('MongoDB connection successful');
        } catch (err) {
            throw `Error connecting to MongoDB: ${err}`;
        }
    }
}

/* async function closeConnection() {
    try {
        await mongoose.connection.close();
        return true
    }
    catch (err) {
        console.error("Error closing connection:", err);
        return err;
    }
} */
export { connectToDatabase };