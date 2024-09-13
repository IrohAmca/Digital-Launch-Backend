import mongoose from 'mongoose';
import { connectToDatabase} from './dbClient';
import { Main } from '../../models/main_schema';

async function updateSectionPart(partname: string, sectionData: any, postId: any, sectionId: string): Promise<boolean> {
    try {
        if (!mongoose.Types.ObjectId.isValid(postId)) {
            throw new Error('Invalid ObjectId');
        }
        await connectToDatabase();

        const post = await Main.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }

        await Main.updateOne(
            {
                _id: postId,
                [`Components.${partname}._id`]: sectionId
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
        throw `Error updating section part: ${err}`;
    }
}

async function updatePlacementService(data: any, name: any, id: any): Promise<boolean> {
    try {
        if (!data || !id || !name) {
            throw new Error('Data, Name, and ID are required');
        }

        const result = await Main.updateOne(
            {
                _id: id,
                'Placements.name': name
            },
            {
                $set: {
                    'Placements.$[elem]': data
                }
            },
            {
                arrayFilters: [{ 'elem.name': name }]
            }
        );

        return true;
    } catch (err) {
        throw new Error(`Error in updatePlacementService: ${err}`);
    }
}

export { updateSectionPart , updatePlacementService };