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
                section_id: Number
            }
        ],
        CTACard: [
            {
                Title: string,
                ButtonText: string,
                ButtonUrl: string,
                section_id: Number
            }
        ],
        FullScreenCards: [
            {
                MediaURL: string,
                Title: string,
                ButtonText: string,
                ButtonUrl: string,
                LogoMediaURL: string,
                section_id: Number
            }
        ],
        FullText: [
            {
                Text: string,
                section_id: Number
            }
        ],
        HeaderState: [
            {
                TitleHeader: string,
                LogoMediaURL: string,
                section_id: Number
            }
        ],
        InfoCards: [
            {
                Icon: string,
                Title: string,
                Subtitle: string,
                section_id: Number
            }
        ],
        LargeCard: [
            {
                MediaURL: string,
                Url: string,
                section_id: Number
            }
        ],
        LargeFlipCard: [
            {
                FrontMedia: string,
                BackMedia: string,
                section_id: Number
            }
        ],
        LargePopUpCard: [
            {
                MediaURL: string,
                section_id: Number
            }
        ],
        LargeScalableCard: [
            {
                MediaURL: string,
                section_id: Number
            }
        ],
        LargeTopTitleHeroCard: [
            {
                Title: string,
                SubTitle: string,
                Button: string,
                ButtonURL: string,
                section_id: Number
            }
        ],
        LeftTextCard: [
            {
                Text: string,
                Media: string,
                section_id: Number
            }
        ],
        MiniCards: [
            {
                ButtonText: string,
                Text: string,
                LogoMediaURL: string,
                section_id: Number
            }
        ],
        ReelsCards: [
            {
                MediaURL: string,
                Title: string,
                Subtitle: string,
                section_id: Number
            }
        ],
        RightTextCard: [
            {
                Text: string,
                MediaURL: string,
                section_id: Number
            }
        ],
        Title: [
            {
                Title: string,
                section_id: Number
            }
        ],
        TopTextCard: [
            {
                Text: string,
                MediaURL: string,
                section_id: Number
            }
        ],
        TwinCard: [
            {
                RightMediaURL: string,
                LeftMediaURL: string,
                section_id: Number
            }
        ],
        TwinFlipCard: [
            {
                RightFrontMediaURL: string,
                RightBackMediaURL: string,
                LeftFrontMediaURL: string,
                LeftBackMediaURL: string,
                section_id: Number
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
            section_id: Number
            }
        ],
    },
    Placements: [
        {
            index: string,
            name: string,
            switchActive: boolean,
            section_id: Number
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
                section_id: Number
            }
        ],
        CTACard: [
            {
                Title: String,
                ButtonText: String,
                ButtonUrl: String,
                section_id: Number
            }
        ],
        FullScreenCards: [
            {
                MediaURL: String,
                Title: String,
                ButtonText: String,
                ButtonUrl: String,
                LogoMediaURL: String,
                section_id: Number
            }
        ],
        FullText: [
            {
                Text: String,
                section_id: Number
            }
        ],
        HeaderState: [
            {
                TitleHeader: String,
                LogoMediaURL: String,
                section_id: Number
            }
        ],
        InfoCards: [
            {
                Icon: String,
                Title: String,
                Subtitle: String,
                section_id: Number
            }
        ],
        LargeCard: [
            {
                MediaURL: String,
                Url: String,
                section_id: Number
            }
        ],
        LargeFlipCard: [
            {
                FrontMedia: String,
                BackMedia: String,
                section_id: Number
            }
        ],
        LargePopUpCard: [
            {
                MediaURL: String,
                section_id: Number
            }
        ],
        LargeScalableCard: [
            {
                MediaURL: String,
                section_id: Number
            }
        ],
        LargeTopTitleHeroCard: [
            {
                Title: String,
                SubTitle: String,
                Button: String,
                ButtonURL: String,
                section_id: Number
            }
        ],
        LeftTextCard: [
            {
                Text: String,
                Media: String,
                section_id: Number
            }
        ],
        MiniCards: [
            {
                ButtonText: String,
                Text: String,
                LogoMediaURL: String,
                section_id: Number
            }
        ],
        ReelsCards: [
            {
                MediaURL: String,
                Title: String,
                Subtitle: String,
                section_id: Number
            }
        ],
        RightTextCard: [
            {
                Text: String,
                MediaURL: String,
                section_id: Number
            }
        ],
        Title: [
            {
                Title: String,
                section_id: Number
            }
        ],
        TopTextCard: [
            {
                Text: String,
                MediaURL: String,
                section_id: Number
            }
        ],
        TwinCard: [
            {
                RightMediaURL: String,
                LeftMediaURL: String,
                section_id: Number
            }
        ],
        TwinFlipCard: [
            {
                RightFrontMediaURL: String,
                RightBackMediaURL: String,
                LeftFrontMediaURL: String,
                LeftBackMediaURL: String,
                section_id: Number
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
                    section_id: Number
                },
                LeftCard: {
                    MediaURL: String,
                    Title: String,
                    Subtitle: String,
                    ButtonText: String,
                    ButtonUrl: String,
                    section_id: Number
                }
            }
        ],
    },
    Placements: [
        {
            index: String,
            name: String,
            switchActive: Boolean,
            section_id: Number
        }
    ]
});

const Main = mongoose.model<IMain>('Main', MainSchema, "test");

export { Main, IMain };