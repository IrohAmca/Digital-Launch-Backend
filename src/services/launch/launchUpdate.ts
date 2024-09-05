import mongoose from 'mongoose';
import { connectToDatabase, closeConnection } from './dbClient';
import { Main } from '../../models/main_schema';

async function updateSectionPart(partname: string, sectionData: any, postId: any, sectionId: number) {
    try {
        if (!mongoose.Types.ObjectId.isValid(postId)) {
            throw new Error('Invalid ObjectId');
        }
        await connectToDatabase();

        const post = await Main.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }
        const result = Main.updateOne(
            {
                _id: postId,
                [`Components.${partname}`]: {
                    $elemMatch: { section_id: sectionId}}
            },
            { $set: { [`${partname}.$`]: sectionData } }
        );
        if (!result) {
            throw new Error('Post not found after update');
        }

        // console.log('Update successful:', result);
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