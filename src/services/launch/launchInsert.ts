import mongoose from 'mongoose';
import { IMain, Main } from '../../models/main_schema';
import { connectToDatabase, closeConnection } from './dbClient';

async function submitGeneral(data: any) {
    try {
        const objID = await saveGeneralInfo(data);
        return objID;
    } catch (err) {
        console.log("Error in saveData:", err);
        throw err;
    }
    finally {
        const isClosed = await closeConnection();
        if (typeof isClosed === 'boolean' && isClosed) {
            // console.log("Connection closed");
        } else {
            throw new Error(isClosed as string);
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

async function updateSection(sectionName: string, sectionData: any, postId: any) {
    try {
        if (!mongoose.Types.ObjectId.isValid(postId)) {
            throw new Error('Invalid ObjectId');
        }
        await connectToDatabase();
        const update = { $set: { [`${sectionName}`]: sectionData } };
        const result = await Main.findByIdAndUpdate(postId, update, { new: true });
        if (!result) {
            throw new Error('Post not found');
        }
    } catch (err) {
        console.error("Error updating section part:", err);
        throw err;
    } finally {
        const isClosed = await closeConnection();
        if (typeof isClosed === 'boolean' && isClosed) {
            // console.log("Connection closed");
        } else {
            throw new Error(isClosed as string);
        }
    }
}

async function updateSectionPart(partname: string, sectionData: any, postId: any) {
    try {
        if (!mongoose.Types.ObjectId.isValid(postId)) {
            throw new Error('Invalid ObjectId');
        }
        await connectToDatabase();

        const update = { $push: { [`Components.${partname}`]: sectionData } };
        const result = await Main.findByIdAndUpdate(postId, update, { new: true });

        if (!result) {
            throw new Error('Post not found');
        }
    } catch (err) {
        console.error("Error updating section part:", err);
        throw err;
    } finally {
        const isClosed = await closeConnection();
        if (typeof isClosed === 'boolean' && isClosed) {
            // console.log("Connection closed");
        } else {
            throw new Error(isClosed as string);
        }
    }
}
export { updateSection, updateSectionPart, saveGeneralInfo, submitGeneral, connectToDatabase };
