import mongoose, { Schema, Document } from 'mongoose';

interface ICertificate extends Document {
    Certificates_Section: {
        Turkish: {
            Main_Title: string,
            Title: string,
            Certificates: {
                Link: string,
            }[],
        },
        English: {
            Main_Title: string,
            Title: string,
            Certificates: {
                Link: string,
            }[],
        }
    }
}

const CertificateSchema: Schema = new Schema({
    Certificates_Section: {
        Turkish: {
            Main_Title: { type: String, required: true },
            Title: { type: String, required: true },
            Certificates: [{
                Link: { type: String, required: true },
            }],
        },
        English: {
            Main_Title: { type: String, required: true },
            Title: { type: String, required: true },
            Certificates: [{
                Link: { type: String, required: true },
            }],
        }
    }
});

const Certificate = mongoose.model<ICertificate>('Certificate', CertificateSchema, "test");

export { Certificate, ICertificate };
