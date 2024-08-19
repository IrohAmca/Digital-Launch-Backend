import mongoose,{Schema,Document} from "mongoose";

interface ISEO extends Document{
    SEO_Settings:{
        Turkish: {
            Title: string,
            Keywords: string,
            Description: string,
            Social_Media_Sharing_Image: string,
            Index_Status: boolean,
            Follow_Status: boolean,
        },
        English: {
            Title: string,
            Keywords: string,
            Description: string,
            Social_Media_Sharing_Image: string,
            Index_Status: boolean,
            Follow_Status: boolean,
        }
    }
}

const SEOSchema:Schema = new Schema({
    SEO_Settings:{
        Turkish: {
            Title: {type:String,required:true},
            Keywords: {type:String,required:true},
            Description: {type:String,required:true},
            Social_Media_Sharing_Image: {type:String,required:true},
            Index_Status: {type:Boolean,required:true},
            Follow_Status: {type:Boolean,required:true},
        },
        English: {
            Title: {type:String,required:true},
            Keywords: {type:String,required:true},
            Description: {type:String,required:true},
            Social_Media_Sharing_Image: {type:String,required:true},
            Index_Status: {type:Boolean,required:true},
            Follow_Status: {type:Boolean,required:true},
        }
    }
});

const SEO = mongoose.model<ISEO>('SEO',SEOSchema,"test");

export {SEO,ISEO};

