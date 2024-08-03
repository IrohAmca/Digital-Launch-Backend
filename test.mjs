import mongoose from "mongoose";
import  Post from "./models/Post.mjs";

mongoose.connect("mongodb://localhost:27017/damise", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

Post.create({
    title: "My first post",
    content: "This is my first post"
});
