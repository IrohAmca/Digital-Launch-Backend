import mongoose, { Schema, Document } from 'mongoose';

interface ICatalog extends Document {
    Catalog_Section: {
        Turkish: {
            Main_Title: string,
            Title: string,
            Catalog: string,
            Button_Text: string,
        },
        English: {
            Main_Title: string,
            Title: string,
            Catalog: string,
            Button_Text: string,
        }
    }
}

const CatalogSchema: Schema = new Schema({
    Catalog_Section: {
        Turkish: {
            Main_Title: { type: String, required: true },
            Title: { type: String, required: true },
            Catalog: { type: String, required: true },
            Button_Text: { type: String, required: true },
        },
        English: {
            Main_Title: { type: String, required: true },
            Title: { type: String, required: true },
            Catalog: { type: String, required: true },
            Button_Text: { type: String, required: true },
        }
    }
});

const Catalog = mongoose.model<ICatalog>('Catalog', CatalogSchema, "test");

export { Catalog, ICatalog };