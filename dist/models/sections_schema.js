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
exports.Section = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const SectionSchema = new mongoose_1.Schema({
    Sections: {
        Trailer_Section: {
            Turkish: {
                Logo: { type: String, required: true },
                Title: { type: String, required: true },
                Subtitle: { type: String, required: true },
                Paragraph: { type: String, required: true },
                Button_Text: { type: String, required: true },
                Video_Link: { type: String, required: true },
                Background_Image: { type: String, required: true },
            },
            English: {
                Logo: { type: String, required: true },
                Title: { type: String, required: true },
                Subtitle: { type: String, required: true },
                Paragraph: { type: String, required: true },
                Button_Text: { type: String, required: true },
                Video_Link: { type: String, required: true },
                Background_Image: { type: String, required: true },
            }
        },
        Livestream_Section: {
            Turkish: {
                Livestream_Status: { type: String, required: true },
                Livestream_Link: { type: String, required: true },
            },
            English: {
                Livestream_Status: { type: String, required: true },
                Livestream_Link: { type: String, required: true },
            }
        },
        Introduction_Section: {
            Turkish: {
                Main_Title: { type: String, required: true },
                Title: { type: String, required: true },
                Paragraph: { type: String, required: true },
                Video_Link: { type: String, required: true },
                Image: { type: String, required: true },
                Button_Text: { type: String, required: true },
            },
            English: {
                Main_Title: { type: String, required: true },
                Title: { type: String, required: true },
                Paragraph: { type: String, required: true },
                Video_Link: { type: String, required: true },
                Image: { type: String, required: true },
                Button_Text: { type: String, required: true },
            }
        },
        Logos_Section: {
            Turkish: {
                Main_Title: { type: String, required: true },
                Title: { type: String, required: true },
                Logos: [{
                        Logo: { type: String, required: true },
                        Link: { type: String, required: true },
                    }],
            },
            English: {
                Main_Title: { type: String, required: true },
                Title: { type: String, required: true },
                Logos: [{
                        Logo: { type: String, required: true },
                        Link: { type: String, required: true },
                    }],
            }
        },
        Sponsors_Section: {
            Turkish: {
                Image: { type: String, required: true },
                Link: { type: String, required: true },
            },
            English: {
                Image: { type: String, required: true },
                Link: { type: String, required: true },
            }
        },
        Features_Section: {
            Turkish: {
                Main_Title: { type: String, required: true },
                Title: { type: String, required: true },
                Features: [{
                        Feature_Title: { type: String, required: true },
                        Feature_Image: { type: String, required: true },
                        Feature_Paragraph: { type: String, required: true },
                    }],
            },
            English: {
                Main_Title: { type: String, required: true },
                Title: { type: String, required: true },
                Features: [{
                        Feature_Title: { type: String, required: true },
                        Feature_Image: { type: String, required: true },
                        Feature_Paragraph: { type: String, required: true },
                    }],
            }
        },
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
        },
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
        },
        Images_Section: {
            Turkish: {
                Main_Title: { type: String, required: true },
                Title: { type: String, required: true },
                Images: [{
                        Image_Link: { type: String, required: true },
                        Image_Caption: { type: String, required: true },
                        Image_Title: { type: String, required: true },
                    }],
            },
            English: {
                Main_Title: { type: String, required: true },
                Title: { type: String, required: true },
                Images: [{
                        Image_Link: { type: String, required: true },
                        Image_Caption: { type: String, required: true },
                        Image_Title: { type: String, required: true },
                    }],
            }
        },
        Contact_Section: {
            Turkish: {
                Main_Title: { type: String, required: true },
                Title: { type: String, required: true },
                Paragraph: { type: String, required: true },
                Address: { type: String, required: true },
                Phone: { type: String, required: true },
                Email: { type: String, required: true },
                Social_Media: [{
                        Social_Media_Platform: { type: String, required: true },
                        Social_Media_Link: { type: String, required: true },
                    }],
            },
            English: {
                Main_Title: { type: String, required: true },
                Title: { type: String, required: true },
                Paragraph: { type: String, required: true },
                Address: { type: String, required: true },
                Phone: { type: String, required: true },
                Email: { type: String, required: true },
                Social_Media: [{
                        Social_Media_Platform: { type: String, required: true },
                        Social_Media_Link: { type: String, required: true },
                    }],
            }
        },
        CTA_Section: {
            Turkish: {
                Title: { type: String, required: true },
                Button_Text: { type: String, required: true },
            },
            English: {
                Title: { type: String, required: true },
                Button_Text: { type: String, required: true },
            }
        },
    }
});
const Section = mongoose_1.default.model('Section', SectionSchema, "test");
exports.Section = Section;
