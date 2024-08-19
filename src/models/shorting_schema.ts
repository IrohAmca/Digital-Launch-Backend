import mongoose, { Schema, Document } from "mongoose";

interface IShorting extends Document {
    Sorting_Settings: {
        Trailer_Section: {
            "index": number,
            "status": boolean
        },
        Livestream_Section: {
            "index": number,
            "status": boolean
        },
        Introduction_Section: {
            "index": number,
            "status": boolean
        },
        Logos_Section: {
            "index": number,
            "status": boolean
        },
        Sponsor_Section: {
            "index": number,
            "status": boolean
        },
        Features_Section: {
            "index": number,
            "status": boolean
        },
        Certificates_Section: {
            "index": number,
            "status": boolean
        },
        Catalog_Section: {
            "index": number,
            "status": boolean
        },
        Images_Section: {
            "index": number,
            "status": boolean
        },
        Contact_Section: {
            "index": number,
            "status": boolean
        },
        CTA_Section: {
            "index": number,
            "status": boolean
        }
    }
}

const ShortingSchema: Schema = new Schema({
    Sorting_Settings: {
        Trailer_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Livestream_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Introduction_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Logos_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Sponsor_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Features_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Certificates_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Catalog_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Images_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        Contact_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        },
        CTA_Section: {
            "index": { type: Number, required: true },
            "status": { type: Boolean, required: true }
        }
    }
});

const Shorting = mongoose.model<IShorting>('Shorting', ShortingSchema, "test");

export { Shorting, IShorting };