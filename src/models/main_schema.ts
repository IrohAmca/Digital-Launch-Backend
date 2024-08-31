import mongoose, { Schema, Document } from 'mongoose';
interface IMain extends Document {
    LaunchFormData: {
        launchName: string;
        language: string;
        groupNumber: string;
        companyName: string;
        logoMedia: string;
        startDate: string;
        endDate: string;
        orderNumber: string;
        isActive: boolean;
        showOnHomepage: boolean;
        titleHeader: string;
    },
    Components: {
        AccordionRightCard: {
            MediaURL: string,
            Sections: [
                {
                    Id: number,
                    Title: string,
                    Subtitle: string
                }
            ]
        },
        CTACard: {
            Title: string,
            ButtonText: string,
            ButtonUrl: string
        },
        FullScreenCardSlider: {
            FullScreenCards: [
                {
                    MediaURL: string,
                    Title: string,
                    ButtonText: string,
                    ButtonUrl: string,
                    LogoMediaURL: string
                }
            ]
        },
        FullText: {
            Text: string
        },
        HeaderState: {
            TitleHeader: string,
            LogoMediaURL: string
        },
        InfoCardSlider: {
            InfoCards: [
                {
                    Icon: string,
                    Title: string,
                    Subtitle: string
                }
            ]
        },
        LargeCard: {
            MediaURL: string,
            Url: string
        },
        LargeFlipCard: {
            FrontMedia: string,
            BackMedia: string
        },
        LargePopUpCard: {
            MediaURL: string,
        },
        LargeScalableCard: {
            MediaURL: string
        },
        LargeTopTitleHeroCard: {
            Title: string,
            SubTitle: string,
            Button: string,
            ButtonURL: string
        },
        LeftTextCard: {
            Text: string,
            Media: string
        },
        MiniCardSliderComponents: {
            MiniCards: [
                {
                    ButtonText: string,
                    Text: string,
                    LogoMediaURL: string
                }
            ]
        },
        ReelsCardSliderComponents: {
            ReelsCards: [
                {
                    MediaURL: string,
                    Title: string,
                    Subtitle: string
                }
            ]
        },
        RightTextCard: {
            Text: string,
            MediaURL: string
        },
        Title: {
            Title: string
        }
        TopTextCard: {
            Text: string,
            MediaURL: string
        },
        TwinCard: {
            RightMediaURL: string,
            LeftMediaURL: string
        },
        TwinFlipCard: {
            RightFrontMediaURL: string,
            RightBackMediaURL: string,
            LeftFrontMediaURL: string,
            LeftBackMediaURL: string
        },
        TwinTopTitleHeroCard: {
            RightCard: {
                MediaURL: string,
                Title: string,
                Subtitle: string,
                ButtonText: string,
                ButtonUrl: string
            },
            LeftCard: {
                MediaURL: string,
                Title: string,
                Subtitle: string,
                ButtonText: string,
                ButtonUrl: string
            }
        }
    }
}

const MainSchema: Schema = new Schema({
    LaunchFormData: {
        launchName: String,
        language: String,
        groupNumber: String,
        companyName: String,
        companyLogo: String,
        startDate: String,
        endDate: String,
        orderNumber: String,
        isActive: Boolean,
        showOnHomepage: Boolean
    },
    Components: {
        AccordionRightCard: {
            MediaURL: String,
            Sections: [
                {
                    Id: Number,
                    Title: String,
                    Subtitle: String
                }
            ]
        },
        CTACard: {
            Title: String,
            ButtonText: String,
            ButtonUrl: String
        },
        FullScreenCardSlider: {
            FullScreenCards: [
                {
                    MediaURL: String,
                    Title: String,
                    ButtonText: String,
                    ButtonUrl: String,
                    LogoMediaURL: String
                }
            ]
        },
        FullText: {
            Text: String
        },
        HeaderState: {
            TitleHeader: String,
            LogoMediaURL: String
        },
        InfoCardSlider: {
            InfoCards: [
                {
                    Icon: String,
                    Title: String,
                    Subtitle: String
                }
            ]
        },
        LargeCard: {
            MediaURL: String,
            Url: String
        },
        LargeFlipCard: {
            FrontMedia: String,
            BackMedia: String
        },
        LargePopUpCard: {
            MediaURL: String,
        },
        LargeScalableCard: {
            MediaURL: String
        },
        LargeTopTitleHeroCard: {
            Title: String,
            SubTitle: String,
            Button: String,
            ButtonURL: String
        },
        LeftTextCard: {
            Text: String,
            Media: String
        },
        MiniCardSliderComponents: {
            MiniCards: [
                {
                    ButtonText: String,
                    Text: String,
                    LogoMediaURL: String
                }
            ]
        },
        ReelsCardSliderComponents: {
            ReelsCards: [
                {
                    MediaURL: String,
                    Title: String,
                    Subtitle: String
                }
            ]
        },
        RightTextCard: {
            Text: String,
            MediaURL: String
        },
        Title: {
            Title: String
        },
        TopTextCard: {
            Text: String,
            MediaURL: String
        },
        TwinCard: {
            RightMediaURL: String,
            LeftMediaURL: String
        },
        TwinFlipCard: {
            RightFrontMediaURL: String,
            RightBackMediaURL: String,
            LeftFrontMediaURL: String,
            LeftBackMediaURL: String
        },
        TwinTopTitleHeroCard: {
            RightCard: {
                MediaURL: String,
                Title: String,
                Subtitle: String,
                ButtonText: String,
                ButtonUrl: String
            },
            LeftCard: {
                MediaURL: String,
                Title: String,
                Subtitle: String,
                ButtonText: String,
                ButtonUrl: String
            }
        }
    }
});

const Main = mongoose.model<IMain>('Main', MainSchema, "test");

export { Main, IMain };