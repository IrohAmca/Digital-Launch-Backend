import mongoose, { Schema, Document } from "mongoose";

interface IPlacemant extends Document {
    Sıralama_Ayarları: {}
}

const PlacemantSchema: Schema = new Schema({
    Sıralama_Ayarları: {
        type: Object,
        required: true
    }
});

const Placemant = mongoose.model<IPlacemant>('Placemant', PlacemantSchema, "test");

export { Placemant, IPlacemant };