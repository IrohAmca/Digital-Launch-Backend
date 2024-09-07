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

        const unsetResult = await Main.updateOne(
            {
                _id: postId,
                [`Components.${partname}._id`]: sectionId
            },
            {
                $unset: {
                    [`Components.${partname}.$`]: ""
                }
            }
        );

        if (unsetResult.modifiedCount === 0) {
            throw new Error("Component not found or already deleted.");
        }
        const pullResult = await Main.updateOne(
            {
                _id: postId
            },
            {
                $pull: {
                    [`Components.${partname}`]: null
                }
            }
        );

    } catch (err) {
        console.error("Error deleting component:", err);
        throw err;
    }
}


export { deleteLaunch, deleteAllLaunch, deleteComponent };