import mongoose, { Schema, Document } from 'mongoose';

interface ILivestream extends Document {
    Livestream_Section: {
        Turkish: {
            Livestream_Status: string,
            Livestream_Link: string,
        },
        English: {
            Livestream_Status: string,
            Livestream_Link: string,
        }
    }
}

const LivestreamSchema: Schema = new Schema({
    Livestream_Section: {
        Turkish: {
            Livestream_Status: { type: String, required: true },
            Livestream_Link: { type: String, required: true },
        },
        English: {
            Livestream_Status: { type: String, required: true },
            Livestream_Link: { type: String, required: true },
        }
    }
});

const Livestream = mongoose.model<ILivestream>('Livestream', LivestreamSchema, "test");

export { Livestream, ILivestream };