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
exports.Main = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const MainSchema = new mongoose_1.Schema({
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
        FullScreenCardsSlider: [
            {
                FullScreenCards: [
                    {
                        MediaURL: String,
                        Title: String,
                        ButtonText: String,
                        ButtonUrl: String,
                        LogoMediaURL: String,
                        section_id: Number
                    }
                ]
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
        InfoCardsSlider: [
            {
                InfoCards: [
                    {
                        Icon: String,
                        Title: String,
                        Subtitle: String,
                        section_id: Number
                    }
                ]
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
                MediaURL: String,
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
        MiniCardsSlider: [
            {
                MiniCards: [
                    {
                        ButtonText: String,
                        Text: String,
                        LogoMediaURL: String,
                        section_id: Number
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
                        section_id: Number
                    }
                ]
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
const Main = mongoose_1.default.model('Main', MainSchema, "test");
exports.Main = Main;
