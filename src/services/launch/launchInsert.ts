import mongoose from 'mongoose';
import { IMain, Main } from '../../models/main_schema';
import { connectToDatabase} from './dbClient';

async function submitGeneral(data: any) {
    try {
        const objID = await saveGeneralInfo(data);
        return objID;
    } catch (err) {
        console.log("Error in saveData:", err);
        throw err;
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
        const post = await Main.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }
        const result = await Main.updateOne(
            { _id: postId },
            { $set: { [sectionName]: sectionData } }
        );
        if (result.modifiedCount === 0) {
            throw new Error('No document modified');
        }
        return true;
    } catch (err) {
        throw `Error updating section: ${err}`;
    }
}

async function setSectionPart(partname: string, sectionData: any, postId: any) {
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
        return (result.Components as any)[partname].slice(-1)[0]._id;
    } catch (err) {
        throw `Error setting section part: ${err}`;
    }
}

async function insertPlacementService(data: any, postId: string): Promise<any> {
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
            {_id: postId},
            {$set: {Placements: data}}
        );

        return true;
    } catch (err) {
        throw `Error inserting placement service: ${err}`;
    }
}

export { updateSection, setSectionPart, saveGeneralInfo, submitGeneral, connectToDatabase, insertPlacementService };
