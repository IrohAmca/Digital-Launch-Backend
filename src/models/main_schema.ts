import mongoose, { Schema, Document } from 'mongoose';

interface IPost extends Document {
    General_Info: {
        Turkish: {
            Launch_Name: string,
            Launch_URL: string,
            Launch_Start_Date: Date,
            Launch_End_Date: Date,
            Order_Number: string,
        },
        English: {
            Launch_Name: string,
            Launch_URL: string,
            Launch_Start_Date: Date,
            Launch_End_Date: Date,
            Order_Number: string,
        }
    },
    Sections: {
        Trailer_Section: {
            Turkish: {
                Logo: string,
                Title: string,
                Subtitle: string,
                Paragraph: string,
                Button_Text: string,
                Video_Link: string,
                Background_Image: string,
            },
            English: {
                Logo: string,
                Title: string,
                Subtitle: string,
                Paragraph: string,
                Button_Text: string,
                Video_Link: string,
                Background_Image: string,
            }
        },
        Livestream_Section: {
            Turkish: {
                Livestream_Status: string,
                Livestream_Link: string,
            },
            English: {
                Livestream_Status: string,
                Livestream_Link: string,
            }
        },
        Introduction_Section: {
            Turkish: {
                Main_Title: string,
                Title: string,
                Paragraph: string,
                Video_Link: string,
                Image: string,
                Button_Text: string,
            },
            English: {
                Main_Title: string,
                Title: string,
                Paragraph: string,
                Video_Link: string,
                Image: string,
                Button_Text: string,
            }
        },
        Logos_Section: {
            Turkish: {
                Main_Title: string,
                Title: string,
                Logos: {
                    Logo: string,
                    Link: string,
                }[],
            }
            English: {
                Main_Title: string,
                Title: string,
                Logos: {
                    Logo: string,
                    Link: string,
                }[],
            }
        },
        Sponsors_Section: {
            Turkish: {
                Image: string,
                Link: string,
            },
            English: {
                Image: string,
                Link: string,
            }
        },
        Features_Section: {
            Turkish: {
                Main_Title: string,
                Title: string,
                Features: {
                    Feature_Title: string,
                    Feature_Image: string,
                    Feature_Paragraph: string,
                }[],
            },
            English: {
                Main_Title: string,
                Title: string,
                Features: {
                    Feature_Title: string,
                    Feature_Image: string,
                    Feature_Paragraph: string,
                }[],
            }
        },
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
        },
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
        },
        Images_Section: {
            Turkish: {
                Main_Title: string,
                Title: string,
                Images: {
                    Image_Link: string,
                    Image_Caption: string,
                    Image_Title: string,
                }[],
            },
            English: {
                Main_Title: string,
                Title: string,
                Images: {
                    Image_Link: string,
                    Image_Caption: string,
                    Image_Title: string,
                }[],
            }
        },
        Contact_Section: {
            Turkish: {
                Main_Title: string,
                Title: string,
                Paragraph: string,
                Address: string,
                Phone: string,
                Email: string,
                Social_Media: {
                    Social_Media_Platform: string,
                    Social_Media_Link: string,
                }[],
            },
            English: {
                Main_Title: string,
                Title: string,
                Paragraph: string,
                Address: string,
                Phone: string,
                Email: string,
                Social_Media: {
                    Social_Media_Platform: string,
                    Social_Media_Link: string,
                }[],
            }
        },
        CTA_Section: {
            Turkish: {
                Title: string,
                Button_Text: string,
            },
            English: {
                Title: string,
                Button_Text: string,
            }
        },
    },
    Design_Settings: {
        Primary_Color: string,
        Background_Color: string,
        Title_Text_Color: string,
        Main_Title_Text_Color: string,
        Paragraph_Text_Color: string,
        Button_Color: string,
        Features_Background_Color: string,
    },
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
    },
    SEO_Settings: {
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

const PostSchema: Schema = new Schema({
    General_Info: {
        Turkish: {
            Launch_Name: { type: String, default: '' },
            Launch_URL: { type: String, default: '' },
            Launch_Start_Date: { type: Date, default: null },
            Launch_End_Date: { type: Date, default: null },
            Order_Number: { type: String, default: '' },
        },
        English: {
            Launch_Name: { type: String, default: '' },
            Launch_URL: { type: String, default: '' },
            Launch_Start_Date: { type: Date, default: null },
            Launch_End_Date: { type: Date, default: null },
            Order_Number: { type: String, default: '' },
        }
    },
    Sections: {
        Trailer_Section: {
            Turkish: {
                Logo: { type: String, default: '' },
                Title: { type: String, default: '' },
                Subtitle: { type: String, default: '' },
                Paragraph: { type: String, default: '' },
                Button_Text: { type: String, default: '' },
                Video_Link: { type: String, default: '' },
                Background_Image: { type: String, default: '' },
            },
            English: {
                Logo: { type: String, default: '' },
                Title: { type: String, default: '' },
                Subtitle: { type: String, default: '' },
                Paragraph: { type: String, default: '' },
                Button_Text: { type: String, default: '' },
                Video_Link: { type: String, default: '' },
                Background_Image: { type: String, default: '' },
            }
        },
        Broadcast_Section: {
            Turkish: {
                Broadcast_Status: { type: String, default: '' },
                Broadcast_Link: { type: String, default: '' },
            },
            English: {
                Broadcast_Status: { type: String, default: '' },
                Broadcast_Link: { type: String, default: '' },
            }
        },
        Introduction_Section: {
            Turkish: {
                Main_Title: { type: String, default: '' },
                Title: { type: String, default: '' },
                Paragraph: { type: String, default: '' },
                Video_Link: { type: String, default: '' },
                Image: { type: String, default: '' },
                Button_Text: { type: String, default: '' },
            },
            English: {
                Main_Title: { type: String, default: '' },
                Title: { type: String, default: '' },
                Paragraph: { type: String, default: '' },
                Video_Link: { type: String, default: '' },
                Image: { type: String, default: '' },
                Button_Text: { type: String, default: '' },
            }
        },
        Logos_Section: {
            Turkish: {
                Main_Title: { type: String, default: '' },
                Title: { type: String, default: '' },
                Logos: [{
                    Logo: { type: String, default: '' },
                    Link: { type: String, default: '' },
                }],
            },
            English: {
                Main_Title: { type: String, default: '' },
                Title: { type: String, default: '' },
                Logos: [{
                    Logo: { type: String, default: '' },
                    Link: { type: String, default: '' },
                }],
            }
        },
        Sponsors_Section: {
            Turkish: {
                Image: { type: String, default: '' },
                Link: { type: String, default: '' },
            },
            English: {
                Image: { type: String, default: '' },
                Link: { type: String, default: '' },
            }
        },
        Features_Section: {
            Turkish: {
                Main_Title: { type: String, default: '' },
                Title: { type: String, default: '' },
                Features: [{
                    Feature_Title: { type: String, default: '' },
                    Feature_Image: { type: String, default: '' },
                    Feature_Paragraph: { type: String, default: '' },
                }],
            },
            English: {
                Main_Title: { type: String, default: '' },
                Title: { type: String, default: '' },
                Features: [{
                    Feature_Title: { type: String, default: '' },
                    Feature_Image: { type: String, default: '' },
                    Feature_Paragraph: { type: String, default: '' },
                }],
            }
        },
        Certificates_Section: {
            Turkish: {
                Main_Title: { type: String, default: '' },
                Title: { type: String, default: '' },
                Certificates: [{
                    Link: { type: String, default: '' },
                }],
            },
            English: {
                Main_Title: { type: String, default: '' },
                Title: { type: String, default: '' },
                Certificates: [{
                    Link: { type: String, default: '' },
                }],
            }
        },
        Catalog_Section: {
            Turkish: {
                Main_Title: { type: String, default: '' },
                Title: { type: String, default: '' },
                Catalog: { type: String, default: '' },
                Button_Text: { type: String, default: '' },
            },
            English: {
                Main_Title: { type: String, default: '' },
                Title: { type: String, default: '' },
                Catalog: { type: String, default: '' },
                Button_Text: { type: String, default: '' },
            }
        },
        Images_Section: {
            Turkish: {
                Main_Title: { type: String, default: '' },
                Title: { type: String, default: '' },
                Images: [{
                    Image_Link: { type: String, default: '' },
                    Image_Caption: { type: String, default: '' },
                    Image_Title: { type: String, default: '' },
                }],
            },
            English: {
                Main_Title: { type: String, default: '' },
                Title: { type: String, default: '' },
                Images: [{
                    Image_Link: { type: String, default: '' },
                    Image_Caption: { type: String, default: '' },
                    Image_Title: { type: String, default: '' },
                }],
            }
        },
        Contact_Section: {
            Turkish: {
                Main_Title: { type: String, default: '' },
                Title: { type: String, default: '' },
                Paragraph: { type: String, default: '' },
                Address: { type: String, default: '' },
                Phone: { type: String, default: '' },
                Email: { type: String, default: '' },
                Social_Media: [{
                    Social_Media_Platform: { type: String, default: '' },
                    Social_Media_Link: { type: String, default: '' },
                }],
            },
            English: {
                Main_Title: { type: String, default: '' },
                Title: { type: String, default: '' },
                Paragraph: { type: String, default: '' },
                Address: { type: String, default: '' },
                Phone: { type: String, default: '' },
                Email: { type: String, default: '' },
                Social_Media: [{
                    Social_Media_Platform: { type: String, default: '' },
                    Social_Media_Link: { type: String, default: '' },
                }],
            }
        },
        CTA_Section: {
            Turkish: {
                Title: { type: String, default: '' },
                Button_Text: { type: String, default: '' },
            },
            English: {
                Title: { type: String, default: '' },
                Button_Text: { type: String, default: '' },
            }
        },
    },
    Design_Settings: {
        Primary_Color: { type: String, default: '' },
        Background_Color: { type: String, default: '' },
        Title_Text_Color: { type: String, default: '' },
        Main_Title_Text_Color: { type: String, default: '' },
        Paragraph_Text_Color: { type: String, default: '' },
        Button_Color: { type: String, default: '' },
        Features_Background_Color: { type: String, default: '' },
    },
    Sorting_Settings: {
        Trailer_Section: {
            "index": { type: Number },
            "status": { type: Boolean }
        },
        Livestream_Section: {
            "index": { type: Number },
            "status": { type: Boolean }
        },
        Introduction_Section: {
            "index": { type: Number},
            "status": { type: Boolean}
        },
        Logos_Section: {
            "index": { type: Number},
            "status": { type: Boolean}
        },
        Sponsor_Section: {
            "index": { type: Number},
            "status": { type: Boolean}
        },
        Features_Section: {
            "index": { type: Number},
            "status": { type: Boolean}
        },
        Certificates_Section: {
            "index": { type: Number},
            "status": { type: Boolean}
        },
        Catalog_Section: {
            "index": { type: Number},
            "status": { type: Boolean}
        },
        Images_Section: {
            "index": { type: Number},
            "status": { type: Boolean}
        },
        Contact_Section: {
            "index": { type: Number},
            "status": { type: Boolean}
        },
        CTA_Section: {
            "index": { type: Number},
            "status": { type: Boolean}
        }
    },
    SEO_Settings: {
        Turkish: {
            Title: { type: String, default: '' },
            Keywords: { type: String, default: '' },
            Description: { type: String, default: '' },
            Social_Media_Sharing_Image: { type: String, default: '' },
            Index_Status: { type: Boolean, default: true },
            Follow_Status: { type: Boolean, default: true },
        },
        English: {
            Title: { type: String, default: '' },
            Keywords: { type: String, default: '' },
            Description: { type: String, default: '' },
            Social_Media_Sharing_Image: { type: String, default: '' },
            Index_Status: { type: Boolean, default: true },
            Follow_Status: { type: Boolean, default: true },
        }
    }
});

const Post = mongoose.model<IPost>('Post', PostSchema, "test");

export { IPost, Post };
