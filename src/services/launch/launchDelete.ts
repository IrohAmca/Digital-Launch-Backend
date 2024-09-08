import mongoose from 'mongoose';
import { connectToDatabase} from './dbClient';
import { Main } from '../../models/main_schema';

async function deleteLaunch(id: string) {
    try {
        await connectToDatabase();
        await Main.findByIdAndDelete(id);
    } catch (err) {
        console.error("Error deleting post:", err);
        throw err;
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
}

async function deleteComponent(postId: string, partname: string, sectionId: string) {
    try {
        await connectToDatabase();

        const updateResult = await Main.updateOne(
            {
                _id: postId,
                [`Components.${partname}._id`]: sectionId
            },
            {
                $pull: {
                    [`Components.${partname}`]: { _id: sectionId }
                }
            }
        );

        if (updateResult.modifiedCount === 0) {
            throw new Error('Component not found');
        }

    } catch (err) {
        throw `Error deleting component: ${err}`;
    }
}


export { deleteLaunch, deleteAllLaunch, deleteComponent };