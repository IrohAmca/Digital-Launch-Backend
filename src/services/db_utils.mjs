import mongoose from "mongoose";
import Post from "../models/Post.mjs";


async function saveData(post) {
    await connectToDatabase();
    post.save().then(() => {
        console.log("Post saved")
        mongoose.connection.close()
    }).catch((err) => {
        console.log(err)
        mongoose.connection.close()
    })
}

async function connectToDatabase() {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect('mongodb://localhost:27017/damise');
    }
}

async function readAllData() {
    try {
        await connectToDatabase();
        const posts = await Post.find({});
        mongoose.connection.close();
        return posts;
    } catch (err) {
        console.log(err);
        mongoose.connection.close();
        throw err;
    }
}

async function readData(Lansman_Adi){
    try {
        await connectToDatabase();
        const post = await Post.findOne({ "Genel_Bilgiler.Lansman_Adi": Lansman_Adi });
        mongoose.connection.close();
        return post;
    } catch (err) {
        console.log(err);
        mongoose.connection.close();
        throw err;
    }
}

export { saveData, readAllData, readData };
