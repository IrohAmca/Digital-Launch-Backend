import mongoose, { Schema, Document } from 'mongoose';

interface IGallery extends Document {
    Gallery: {
        Media: [
            {
                MediaNem: String,
                MediaURL: String,
                MediaType: String,
            }
        ]
    }
}

const GallerySchema = new Schema({
    Gallery: {
        Media: [
            {
                MediaName: String,
                MediaURL: String,
                MediaType: String,
            }
        ]
    }
});

const Gallery = mongoose.model<IGallery>('Gallery', GallerySchema, 'Gallery');

export {Gallery , IGallery};

