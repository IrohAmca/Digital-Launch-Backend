"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const PostSchema = new mongoose_1.Schema({
    General_Info: {
        Turkish: {
            Launch_Name: { type: String },
            Launch_URL: { type: String },
            Launch_Start_Date: { type: Date, default: null },
            Launch_End_Date: { type: Date, default: null },
            Order_Number: { type: String },
        },
        English: {
            Launch_Name: { type: String },
            Launch_URL: { type: String },
            Launch_Start_Date: { type: Date, default: null },
            Launch_End_Date: { type: Date, default: null },
            Order_Number: { type: String },
        }
    },
    Sections: {
        Trailer_Section: {
            Turkish: {
                Logo: { type: String },
                Title: { type: String },
                Subtitle: { type: String },
                Paragraph: { type: String },
                Button_Text: { type: String },
                Video_Link: { type: String },
                Background_Image: { type: String },
            },
            English: {
                Logo: { type: String },
                Title: { type: String },
                Subtitle: { type: String },
                Paragraph: { type: String },
                Button_Text: { type: String },
                Video_Link: { type: String },
                Background_Image: { type: String },
            }
        },
        Livestream_Section: {
            Turkish: {
                Livestream_Status: { type: Boolean },
                Livestream_Link: { type: String },
            },
            English: {
                Livestream_Status: { type: Boolean },
                Livestream_Link: { type: String },
            }
        },
        Introduction_Section: {
            Turkish: {
                Main_Title: { type: String },
                Title: { type: String },
                Paragraph: { type: String },
                Video_Link: { type: String },
                Image: { type: String },
                Button_Text: { type: String },
            },
            English: {
                Main_Title: { type: String },
                Title: { type: String },
                Paragraph: { type: String },
                Video_Link: { type: String },
                Image: { type: String },
                Button_Text: { type: String },
            }
        },
        Logos_Section: {
            Turkish: {
                Main_Title: { type: String },
                Title: { type: String },
                Logos: [{
                        Logo: { type: String },
                        Link: { type: String },
                    }],
            },
            English: {
                Main_Title: { type: String },
                Title: { type: String },
                Logos: [{
                        Logo: { type: String },
                        Link: { type: String },
                    }],
            }
        },
        Sponsors_Section: {
            Turkish: {
                Image: { type: String },
                Link: { type: String },
            },
            English: {
                Image: { type: String },
                Link: { type: String },
            }
        },
        Features_Section: {
            Turkish: {
                Main_Title: { type: String },
                Title: { type: String },
                Features: [{
                        Feature_Title: { type: String },
                        Feature_Image: { type: String },
                        Feature_Paragraph: { type: String },
                    }],
            },
            English: {
                Main_Title: { type: String },
                Title: { type: String },
                Features: [{
                        Feature_Title: { type: String },
                        Feature_Image: { type: String },
                        Feature_Paragraph: { type: String },
                    }],
            }
        },
        Certificates_Section: {
            Turkish: {
                Main_Title: { type: String },
                Title: { type: String },
                Certificates: [{
                        Link: { type: String },
                    }],
            },
            English: {
                Main_Title: { type: String },
                Title: { type: String },
                Certificates: [{
                        Link: { type: String },
                    }],
            }
        },
        Catalog_Section: {
            Turkish: {
                Main_Title: { type: String },
                Title: { type: String },
                Catalog: { type: String },
                Button_Text: { type: String },
            },
            English: {
                Main_Title: { type: String },
                Title: { type: String },
                Catalog: { type: String },
                Button_Text: { type: String },
            }
        },
        Images_Section: {
            Turkish: {
                Main_Title: { type: String },
                Title: { type: String },
                Images: [{
                        Image_Link: { type: String },
                        Image_Caption: { type: String },
                        Image_Title: { type: String },
                    }],
            },
            English: {
                Main_Title: { type: String },
                Title: { type: String },
                Images: [{
                        Image_Link: { type: String },
                        Image_Caption: { type: String },
                        Image_Title: { type: String },
                    }],
            }
        },
        Contact_Section: {
            Turkish: {
                Main_Title: { type: String },
                Title: { type: String },
                Paragraph: { type: String },
                Address: { type: String },
                Phone: { type: String },
                Email: { type: String },
                Social_Media: [{
                        Social_Media_Platform: { type: String },
                        Social_Media_Link: { type: String },
                    }],
            },
            English: {
                Main_Title: { type: String },
                Title: { type: String },
                Paragraph: { type: String },
                Address: { type: String },
                Phone: { type: String },
                Email: { type: String },
                Social_Media: [{
                        Social_Media_Platform: { type: String },
                        Social_Media_Link: { type: String },
                    }],
            }
        },
        CTA_Section: {
            Turkish: {
                Title: { type: String },
                Button_Text: { type: String },
            },
            English: {
                Title: { type: String },
                Button_Text: { type: String },
            }
        },
    },
    Design_Settings: {
        Primary_Color: { type: String },
        Background_Color: { type: String },
        Title_Text_Color: { type: String },
        Main_Title_Text_Color: { type: String },
        Paragraph_Text_Color: { type: String },
        Button_Color: { type: String },
        Features_Background_Color: { type: String },
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
            "index": { type: Number },
            "status": { type: Boolean }
        },
        Logos_Section: {
            "index": { type: Number },
            "status": { type: Boolean }
        },
        Sponsor_Section: {
            "index": { type: Number },
            "status": { type: Boolean }
        },
        Features_Section: {
            "index": { type: Number },
            "status": { type: Boolean }
        },
        Certificates_Section: {
            "index": { type: Number },
            "status": { type: Boolean }
        },
        Catalog_Section: {
            "index": { type: Number },
            "status": { type: Boolean }
        },
        Images_Section: {
            "index": { type: Number },
            "status": { type: Boolean }
        },
        Contact_Section: {
            "index": { type: Number },
            "status": { type: Boolean }
        },
        CTA_Section: {
            "index": { type: Number },
            "status": { type: Boolean }
        }
    },
    SEO_Settings: {
        Turkish: {
            Title: { type: String },
            Keywords: { type: String },
            Description: { type: String },
            Social_Media_Sharing_Image: { type: String },
            Index_Status: { type: Boolean },
            Follow_Status: { type: Boolean },
        },
        English: {
            Title: { type: String },
            Keywords: { type: String },
            Description: { type: String },
            Social_Media_Sharing_Image: { type: String },
            Index_Status: { type: Boolean },
            Follow_Status: { type: Boolean },
        }
    },
    Preview: {
        Status: { type: Boolean }
    }
});
const Post = mongoose_1.default.model('Post', PostSchema, "test");
exports.Post = Post;
