import mongoose from 'mongoose';
import { IMain, Main } from '../../models/main_schema';
import { connectToDatabase, closeConnection } from './dbClient';


async function updateSectionPart(partname: string, sectionData: any, postId: any, sectionId: any) {
    try {
        if (!mongoose.Types.ObjectId.isValid(postId)) {
            throw new Error('Invalid ObjectId');
        }
        await connectToDatabase();
        const update = { $set: { [`${partname}.$[elem]`]: sectionData } };
        const result = await Main.findByIdAndUpdate(postId, update, { new: true, arrayFilters: [{ "elem._id": sectionId }] });
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

export { updateSectionPart };