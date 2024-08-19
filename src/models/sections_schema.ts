import mongoose, { Schema, Document } from 'mongoose';

interface ISection extends Document {
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
    }
}

const SectionSchema: Schema = new Schema({
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

const Section = mongoose.model<ISection>('Section', SectionSchema, "test");

export { Section, ISection };