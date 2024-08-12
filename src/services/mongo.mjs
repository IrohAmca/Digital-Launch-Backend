import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
class MongoDB {
    constructor() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(new URL(__filename).pathname);
        const envPath = path.resolve(__dirname, '.env');

        dotenv.config({ path: envPath });
        console.log(process.env.MONGO_URI);
        this.client = new MongoClient(process.env.MONGO_URI);
    }
    async fistConnection(dataset, collection) {
        try {
            await this.client.db(dataset).createCollection(collection, {
                validator: {
                    $jsonSchema: {
                        bsonType: "object",
                        required: ["Genel_Bilgiler", "Ust_Bolum", "Ozellikler", "Dosyalar", "Iletisim", "Tasarım"],
                        properties: {
                            Genel_Bilgiler: {
                                bsonType: "object",
                                required: ["Lansman_Adi", "Lansman_Başlangıc_Tarihi", "Lansman_Bitis_Tarihi", "Firma_Adi"],
                                properties: {
                                    Lansman_Adi: { bsonType: "string" },
                                    Lansman_Başlangıc_Tarihi: { bsonType: "date" },
                                    Lansman_Bitis_Tarihi: { bsonType: "date" },
                                    Firma_Adi: { bsonType: "string" }
                                }
                            },
                            Ust_Bolum: {
                                bsonType: "object",
                                required: ["Canli_Yayin_Linki", "Cover_Gorseli", "Urun_Logosu", "Kunye_Bilgileri", "Açıklama_Yazısı"],
                                properties: {
                                    Canli_Yayin_Linki: { bsonType: "string" },
                                    Cover_Gorseli: { bsonType: "string" },
                                    Urun_Logosu: { bsonType: "string" },
                                    Kunye_Bilgileri: { bsonType: "string" },
                                    Açıklama_Yazısı: { bsonType: "string" }
                                }
                            },
                            Ozellikler: {
                                bsonType: "array",
                                items: {
                                    bsonType: "object",
                                    required: ["Ozellikler_Bolum_Basligi", "Ozellik_Baslik", "Ozellik_Acıklama"],
                                    properties: {
                                        Ozellikler_Bolum_Basligi: { bsonType: "string" },
                                        Ozellik_Baslik: { bsonType: "string" },
                                        Ozellik_Acıklama: { bsonType: "string" }
                                    }
                                }
                            },
                            Dosyalar: {
                                bsonType: "array",
                                items: {
                                    bsonType: "object",
                                    required: ["Bolum_Baslıgı", "Dosya_Ust_Acıklama", "Dosya_Baslık", "Dosya_Link", "Dosya_Gorsel"],
                                    properties: {
                                        Bolum_Baslıgı: { bsonType: "string" },
                                        Dosya_Ust_Acıklama: { bsonType: "string" },
                                        Dosya_Baslık: { bsonType: "string" },
                                        Dosya_Link: { bsonType: "string" },
                                        Dosya_Gorsel: { bsonType: "string" }
                                    }
                                }
                            },
                            Iletisim: {
                                bsonType: "object",
                                required: ["Bolum_Baslıgı", "Acıklama", "Adres", "Telefon", "EMail", "Sosyal_Medya"],
                                properties: {
                                    Bolum_Baslıgı: { bsonType: "string" },
                                    Acıklama: { bsonType: "string" },
                                    Adres: { bsonType: "string" },
                                    Telefon: { bsonType: "string" },
                                    EMail: { bsonType: "string" },
                                    Sosyal_Medya: {
                                        bsonType: "array",
                                        items: { bsonType: "string" }
                                    }
                                }
                            },
                            Tasarım: {
                                bsonType: "object",
                                required: ["Ana_Renk", "Arkaplan_Renk", "Baslık_Metin_Renk", "Ust_Baslık_Metin_Renk", "Paragraf_Metin_Renk", "Button_Renk", "Ozellikler_Arka_Plan_Renk"],
                                properties: {
                                    Ana_Renk: { bsonType: "string" },
                                    Arkaplan_Renk: { bsonType: "string" },
                                    Baslık_Metin_Renk: { bsonType: "string" },
                                    Ust_Baslık_Metin_Renk: { bsonType: "string" },
                                    Paragraf_Metin_Renk: { bsonType: "string" },
                                    Button_Renk: { bsonType: "string" },
                                    Ozellikler_Arka_Plan_Renk: { bsonType: "string" }
                                }
                            }
                        }
                    }
                }
            }
            );
            this.client.close();
        } catch (err) {
            console.log(err);
            this.client.close();
            throw err;
        }
    }
    async insertOne(dataset, collection, data) {
        try {
            await this.client.connect();
            await this.client.db(dataset).collection(collection).insertOne(data);
            this.client.close();
        } catch (err) {
            console.log(err);
            this.client.close();
            throw err;
        }
    }
    async insertMany(dataset, collection, data) {
        try {
            await this.client.db(dataset).collection(collection).insertMany(data);
            this.client.close();
        } catch (err) {
            console.log(err);
            this.client.close();
            throw err;
        }
    }
    async updateOne(dataset, collection, query, data) {
        try {
            await this.client.db(dataset).collection(collection).updateOne(query, data);
            this.client.close();
        } catch (err) {
            console.log(err);
            this.client.close();
            throw err;
        }
    }
    async updateMany(dataset, collection, query, data) {
        try {
            await this.client.db(dataset).collection(collection).updateMany(query, data);
            this.client.close();
        } catch (err) {
            console.log(err);
            this.client.close();
            throw err;
        }
    }
    async deleteOne(dataset, collection, query) {
        try {
            await this.client.db(dataset).collection(collection).deleteOne(query);
            this.client.close();
        } catch (err) {
            console.log(err);
            this.client.close();
            throw err;
        }
    }
    async deleteMany(dataset, collection, query) {
        try {
            await this.client.db(dataset).collection(collection).deleteMany(query);
            this.client.close();
        } catch (err) {
            console.log(err);
            this.client.close();
            throw err;
        }
    }
    async find(dataset, collection, query) {
        try {
            const result = await this.client.db(dataset).collection(collection).find(query);
            this.client.close();
            return result;
        } catch (err) {
            console.log(err);
            this.client.close();
            throw err;
        }
    }
    async findOne(dataset, collection, query) {
        try {
            const result = await this.client.db(dataset).collection(collection).findOne(query);
            this.client.close();
            return result;
        } catch (err) {
            console.log(err);
            this.client.close();
            throw err;
        }
    }
    async findAll(dataset, collection) {
        try {
            const result = await this.client.db(dataset).collection(collection).find();
            this.client.close();
            return result;
        } catch (err) {
            console.log(err);
            this.client.close();
            throw err;
        }
    }
    async dropCollection(dataset, collection) {
        try {
            await this.client.db(dataset).collection(collection).drop();
            this.client.close();
        } catch (err) {
            console.log(err);
            this.client.close();
            throw err;
        }
    }
}

export default MongoDB;