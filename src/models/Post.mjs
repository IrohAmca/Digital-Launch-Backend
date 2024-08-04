import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    Genel_Bilgiler: {
        Lansman_Adi: String,
        Lansman_Başlangıc_Tarihi: Date,
        Lansman_Bitis_Tarihi: Date,
        Firma_Adi: String,
    },
    Ust_Bolum: {
        Canli_Yayin_Linki: String,
        Cover_Gorseli: String,
        Urun_Logosu: String,
        Kunye_Bilgileri: String,
        Açıklama_Yazısı: String,
    },
    Ozellikler: [{
        Ozellikler_Bolum_Basligi: String,
        Ozellik_Baslik: String,
        Ozellik_Acıklama: String,
    }],
    Dosyalar: [{
        Bolum_Baslıgı: String,
        Dosya_Ust_Acıklama: String,
        Dosya_Baslık: String,
        Dosya_Link: String,
        Dosya_Gorsel: String,
    }],
    Iletisim:{
        Bolum_Baslıgı: String,
        Acıklama: String,
        Adres: String,
        Telefon: String,
        EMail: String,
        Sosyal_Medya:[String],
    },
    Tasarım:{
        Ana_Renk: String,
        Arkaplan_Renk: String,
        Baslık_Metin_Renk: String,
        Ust_Baslık_Metin_Renk: String,
        Paragraf_Metin_Renk: String,
        Button_Renk: String,
        Ozellikler_Arka_Plan_Renk: String,
    }
});

export default mongoose.model('Damise_test', PostSchema);