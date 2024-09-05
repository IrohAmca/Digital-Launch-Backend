import mongoose from 'mongoose';
import { connectToDatabase, closeConnection } from './dbClient';
import { Main } from '../../models/main_schema';

async function deleteLaunch(id: string) {
    try {
        await connectToDatabase();
        await Main.findByIdAndDelete(id);
    } catch (err) {
        console.error("Error deleting post:", err);
        throw err;
    }
    finally {
        const isClosed = await closeConnection();
        if(typeof isClosed === 'boolean' && isClosed){
            // console.log("Connection closed");
        }else{
            throw new Error(isClosed as string);
        }
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
    finally {
        const isClosed = await closeConnection();
        if(typeof isClosed === 'boolean' && isClosed){
            // console.log("Connection closed");
        }else{
            throw new Error(isClosed as string);
        }
    }
}
export { deleteLaunch, deleteAllLaunch };