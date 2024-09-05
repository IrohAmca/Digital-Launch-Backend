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

        const updateResult = await Main.updateOne(
            {
                _id: postId,
                [`Components.${partname}.section_id`]: sectionId  
            },
            { 
                $set: { 
                    [`Components.${partname}.$`]: sectionData  
                } 
            }
        );
/* 
        if (updateResult.modifiedCount === 0) {
            throw new Error('No document modified');
        } */

        return true;
    } catch (err) {
        console.error("Error updating section part:", err);
        throw err;
    } finally {
        const isClosed = await closeConnection();
        if (typeof isClosed === 'boolean' && isClosed) {
            // Connection successfully closed
        } else {
            throw new Error(isClosed as string);
        }
    }
}


export { updateSectionPart };