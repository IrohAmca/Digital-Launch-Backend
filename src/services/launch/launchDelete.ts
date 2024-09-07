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
    } finally {
        try {
            const isClosed = await closeConnection();
            if (typeof isClosed !== 'boolean' || !isClosed) {
                throw new Error(isClosed as string);  
            }
        } catch (closeErr) {
            console.error("Error closing connection:", closeErr);
            throw closeErr; 
        }
    }
}


export { deleteLaunch, deleteAllLaunch, deleteComponent };