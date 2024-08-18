import mongoose,{Schema,Document} from "mongoose";

interface ISEO extends Document{
    SEO_Ayarları:{
        Turkce: {
            Baslık: string,
            Anahtar_Kelimeler: string,
            Açıklama: string,
            Sosyal_Medya_Paylasım_Gorseli: string,
            Index_Durumu: boolean,
            Takip_Etme: boolean,
        },
        Ingilizce: {
            Baslık: string,
            Anahtar_Kelimeler: string,
            Açıklama: string,
            Sosyal_Medya_Paylasım_Gorseli: string,
            Index_Durumu: boolean,
            Takip_Etme: boolean,
        }
    }
}

const SEOSchema:Schema = new Schema({
    SEO_Ayarları:{
        Turkce: {
            Baslık: {type:String,required:true},
            Anahtar_Kelimeler: {type:String,required:true},
            Açıklama: {type:String,required:true},
            Sosyal_Medya_Paylasım_Gorseli: {type:String,required:true},
            Index_Durumu: {type:Boolean,required:true},
            Takip_Etme: {type:Boolean,required:true},
        },
        Ingilizce: {
            Baslık: {type:String,required:true},
            Anahtar_Kelimeler: {type:String,required:true},
            Açıklama: {type:String,required:true},
            Sosyal_Medya_Paylasım_Gorseli: {type:String,required:true},
            Index_Durumu: {type:Boolean,required:true},
            Takip_Etme: {type:Boolean,required:true},
        }
    }
});

const SEO = mongoose.model<ISEO>('SEO',SEOSchema,"test");

export {SEO,ISEO};

