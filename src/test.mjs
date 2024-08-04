import mongoose from "mongoose";
import  Post from "./models/Post.mjs";

mongoose.connect("mongodb://localhost:27017/damise", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const newPost = new Post({
    Genel_Bilgiler: {
        Lansman_Adi: "Test Lansman",
        Lansman_Başlangıc_Tarihi: new Date(),
        Lansman_Bitis_Tarihi: new Date(),
        Firma_Adi: "Test Firma",
    },
    Ust_Bolum: {
        Canli_Yayin_Linki: "https://www.google.com",
        Cover_Gorseli: "https://www.google.com",
        Urun_Logosu: "https://www.google.com",
        Kunye_Bilgileri: "Test Kunye",
        Açıklama_Yazısı: "Test Açıklama",
    },
    Ozellikler: [{
        Ozellikler_Bolum_Basligi: "Test Bolum",
        Ozellik_Baslik: "Test Baslik",
        Ozellik_Acıklama: "Test Acıklama",
    }],
    Dosyalar: [{
        Bolum_Baslıgı: "Test Bolum",
        Dosya_Ust_Acıklama: "Test Acıklama",
        Dosya_Baslık: "Test Baslık",
        Dosya_Link: "https://www.google.com",
        Dosya_Gorsel: "https://www.google.com",
    }],
    Iletisim:{
        Bolum_Baslıgı: "Test Bolum",
        Acıklama: "Test Acıklama",
        Adres: "Test Adres",
        Telefon: "Test Telefon",
        EMail: "Test Email",
        Sosyal_Medya:["Test Sosyal Medya"],
    },
    Tasarım:{
        Ana_Renk: "Test Renk",
        Arkaplan_Renk: "Test Renk",
        Baslık_Metin_Renk: "Test Renk",
        Ust_Baslık_Metin_Renk: "Test Renk",
        Paragraf_Metin_Renk: "Test Renk",
        Button_Renk: "Test Renk",
        Ozellikler_Arka_Plan_Renk: "Test Renk",
    }
})

newPost.save().then(() => {
    console.log("Post saved")
    mongoose.connection.close()
}).catch((err) => {
    console.log(err)
    mongoose.connection.close()
})
