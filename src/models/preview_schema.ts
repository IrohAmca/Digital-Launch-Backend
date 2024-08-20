import mongoose, { Schema, Document } from 'mongoose';

interface IPreview extends Document {
    Status: boolean;
}

const PreviewSchema: Schema = new Schema({
    Status: { type: Boolean, required: true },
});

const Preview = mongoose.model<IPreview>('Preview', PreviewSchema, "test");
export { IPreview, Preview };
