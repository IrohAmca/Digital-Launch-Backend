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
        AccordionRightCard: [
            {
                MediaURL: string,
                Sections: [
                    {
                        Id: number,
                        Title: string,
                        Subtitle: string
                    }
                ],

            }
        ],
        CTACard: [
            {
                Title: string,
                ButtonText: string,
                ButtonUrl: string,

            }
        ],
        FullScreenCardsSlider: [
            {
                FullScreenCards: [
                    {
                        MediaURL: string,
                        Title: string,
                        ButtonText: string,
                        ButtonUrl: string,
                        LogoMediaURL: string,

                    }
                ]
            }
        ],
        FullText: [
            {
                Text: string,

            }
        ],
        HeaderState: [
            {
                TitleHeader: string,
                LogoMediaURL: string,

            }
        ],
        InfoCardsSlider: [
            {
                InfoCards: [
                    {
                        Icon: string,
                        Title: string,
                        Subtitle: string,

                    }
                ]
            }
        ],
        LargeCard: [
            {
                MediaURL: string,
                Url: string,

            }
        ],
        LargeFlipCard: [
            {
                FrontMedia: string,
                BackMedia: string,

            }
        ],
        LargePopUpCard: [
            {
                MediaURL: string,

            }
        ],
        LargeScalableCard: [
            {
                MediaURL: string,

            }
        ],
        LargeTopTitleHeroCard: [
            {
                MediaURL: string,
                Title: string,
                SubTitle: string,
                Button: string,
                ButtonURL: string,

            }
        ],
        LeftTextCard: [
            {
                Text: string,
                Media: string,

            }
        ],
        MiniCardsSlider: [
            {
                MiniCards: [
                    {
                        ButtonText: String,
                        Text: String,
                        LogoMediaURL: String,
                        MediaURL: String,
                        ButtonURL: String,

                    }
                ]
            }
        ],
        ReelsCardsSlider: [
            {
                ReelsCards: [
                    {
                        MediaURL: string,
                        Title: string,
                        Subtitle: string,

                    }
                ]
            }
        ],
        RightTextCard: [
            {
                Text: string,
                MediaURL: string,

            }
        ],
        Title: [
            {
                Title: string,

            }
        ],
        TopTextCard: [
            {
                Text: string,
                MediaURL: string,

            }
        ],
        TwinCard: [
            {
                RightMediaURL: string,
                LeftMediaURL: string,

            }
        ],
        TwinFlipCard: [
            {
                RightFrontMediaURL: string,
                RightBackMediaURL: string,
                LeftFrontMediaURL: string,
                LeftBackMediaURL: string,

            }
        ],
        TwinTopTitleHeroCard: [
            {
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
                },

            }
        ],
    },
    Placements: [
        {
            index: Number,
            name: string,
            switchActive: boolean,
            id : string,
        }
    ]
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
        AccordionRightCard: [
            {
                MediaURL: String,
                Sections: [
                    {
                        Id: Number,
                        Title: String,
                        Subtitle: String
                    }
                ],

            }
        ],
        CTACard: [
            {
                Title: String,
                ButtonText: String,
                ButtonUrl: String,

            }
        ],
        FullScreenCardsSlider: [
            {
                FullScreenCards: [
                    {
                        MediaURL: String,
                        Title: String,
                        ButtonText: String,
                        ButtonUrl: String,
                        LogoMediaURL: String,

                    }
                ]
            }
        ],
        FullText: [
            {
                Text: String,

            }
        ],
        HeaderState: [
            {
                TitleHeader: String,
                LogoMediaURL: String,

            }
        ],
        InfoCardsSlider: [
            {
                InfoCards: [
                    {
                        Icon: String,
                        Title: String,
                        Subtitle: String,

                    }
                ]
            }
        ],
        LargeCard: [
            {
                MediaURL: String,
                Url: String,

            }
        ],
        LargeFlipCard: [
            {
                FrontMedia: String,
                BackMedia: String,

            }
        ],
        LargePopUpCard: [
            {
                MediaURL: String,

            }
        ],
        LargeScalableCard: [
            {
                MediaURL: String,

            }
        ],
        LargeTopTitleHeroCard: [
            {
                MediaURL: String,
                Title: String,
                SubTitle: String,
                Button: String,
                ButtonURL: String,

            }
        ],
        LeftTextCard: [
            {
                Text: String,
                Media: String,

            }
        ],
        MiniCardsSlider: [
            {
                MiniCards: [
                    {
                        ButtonText: String,
                        Text: String,
                        LogoMediaURL: String,
                        MediaURL: String,
                        ButtonURL: String,

                    }
                ]
            }
        ],
        ReelsCardsSlider: [
            {
                ReelsCards: [
                    {
                        MediaURL: String,
                        Title: String,
                        Subtitle: String,

                    }
                ]
            }
        ],
        RightTextCard: [
            {
                Text: String,
                MediaURL: String,

            }
        ],
        Title: [
            {
                Title: String,

            }
        ],
        TopTextCard: [
            {
                Text: String,
                MediaURL: String,

            }
        ],
        TwinCard: [
            {
                RightMediaURL: String,
                LeftMediaURL: String,

            }
        ],
        TwinFlipCard: [
            {
                RightFrontMediaURL: String,
                RightBackMediaURL: String,
                LeftFrontMediaURL: String,
                LeftBackMediaURL: String,

            }
        ],
        TwinTopTitleHeroCard: [
            {
                RightCard: {
                    MediaURL: String,
                    Title: String,
                    Subtitle: String,
                    ButtonText: String,
                    ButtonUrl: String,

                },
                LeftCard: {
                    MediaURL: String,
                    Title: String,
                    Subtitle: String,
                    ButtonText: String,
                    ButtonUrl: String,

                }
            }
        ],
    },
    Placements: [
        {
            index: Number,
            name: String,
            switchActive: Boolean,
            id : String,
        }
    ]
});

const Main = mongoose.model<IMain>('Main', MainSchema, "test");

export { Main, IMain };