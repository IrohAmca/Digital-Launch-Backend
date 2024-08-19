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
const Post = mongoose_1.default.model('Post', PostSchema, "test");
exports.Post = Post;
