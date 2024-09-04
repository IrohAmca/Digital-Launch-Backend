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
    },
    Placements: {
        Placement: [
            {
                index: String,
                name: String,
                switchActive: Boolean,
            }
        ]
    }
});
const Main = mongoose_1.default.model('Main', MainSchema, "test");
exports.Main = Main;
