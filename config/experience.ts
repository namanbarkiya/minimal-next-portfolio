import BuiltDesignDesc from "@/components/exp-desc/builtdesign-desc";
import { ValidCategory, ValidSkills } from "./constants";

interface PagesInfoInterface {
    title: string;
    imgArr: string[];
    description?: string;
}

interface ExperienceInterface {
    id: string;
    companyName: string;
    category: ValidCategory[];
    shortDescription: string;
    websiteLink: string;
    techStack: ValidSkills[];
    startDate: Date;
    endDate: Date;
    companyLogoImg: any;
    descriptionComponent: any;
    pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
    {
        id: "built-design",
        companyName: "Builtdesign",
        category: [
            ValidCategory.FullStack,
            ValidCategory.WebDev,
            ValidCategory.UIUX,
        ],
        shortDescription:
            "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
        websiteLink: "https://www.example.com",
        techStack: [
            ValidSkills.NextJS,
            ValidSkills.React,
            ValidSkills.NodeJS,
            ValidSkills.MongoDB,
            ValidSkills.GraphQL,
            ValidSkills.NestJS,
            ValidSkills.Typescript,
        ],
        startDate: new Date("2021-07-01"),
        endDate: new Date("2022-07-01"),
        companyLogoImg: "/experience/builtdesign/logo.png",
        descriptionComponent: BuiltDesignDesc,
        pagesInfoArr: [
            {
                title: "Landing Page",
                description: "test description",
                imgArr: [
                    "/experience/builtdesign/landing_1.webp",
                    "/experience/builtdesign/landing_3.webp",
                    "/experience/builtdesign/landing_5.webp",
                    "/experience/builtdesign/landing_6.webp",
                    "/experience/builtdesign/landing_2.webp",
                    "/experience/builtdesign/landing_4.webp",
                ],
            },
            {
                title: "Custom PDF Reader and optimizer",
                description: "test description",
                imgArr: ["/experience/builtdesign/pdf_opt.webp"],
            },
            {
                title: "Clients Dashboard",
                description: "test description",
                imgArr: [
                    "/experience/builtdesign/cli_dashboard_1.webp",
                    "/experience/builtdesign/cli_dashboard_2.webp",
                    "/experience/builtdesign/cli_dashboard_3.webp",
                ],
            },
            {
                title: "Admin Dashboard",
                description: "test description",
                imgArr: ["/experience/builtdesign/logo.png"],
            },
        ],
    },
    {
        id: "the-super-career",
        companyName: "The Super Career",
        category: [
            ValidCategory.FullStack,
            ValidCategory.WebDev,
            ValidCategory.UIUX,
        ],
        shortDescription:
            "Developed and optimized a high-performing website catering to over 4000 users, emphasizing efficiency and maintainability.",
        websiteLink: "https://www.example.com",
        techStack: [
            ValidSkills.NextJS,
            ValidSkills.React,
            ValidSkills.NodeJS,
            ValidSkills.MongoDB,
            ValidSkills.GraphQL,
            ValidSkills.NestJS,
            ValidSkills.Typescript,
        ],
        startDate: new Date("2021-07-01"),
        endDate: new Date("2022-07-01"),
        companyLogoImg: "/experience/supercareer/logo.png",
        descriptionComponent: BuiltDesignDesc,
        pagesInfoArr: [
            {
                title: "Landing Page",
                description: "test description",
                imgArr: [
                    "/experience/builtdesign/landing_1.webp",
                    "/experience/builtdesign/landing_3.webp",
                    "/experience/builtdesign/landing_5.webp",
                    "/experience/builtdesign/landing_6.webp",
                    "/experience/builtdesign/landing_2.webp",
                    "/experience/builtdesign/landing_4.webp",
                ],
            },
            {
                title: "Custom PDF Reader and optimizer",
                description: "test description",
                imgArr: ["/experience/builtdesign/pdf_opt.webp"],
            },
            {
                title: "Clients Dashboard",
                description: "test description",
                imgArr: [
                    "/experience/builtdesign/cli_dashboard_1.webp",
                    "/experience/builtdesign/cli_dashboard_2.webp",
                    "/experience/builtdesign/cli_dashboard_3.webp",
                ],
            },
            {
                title: "Admin Dashboard",
                description: "test description",
                imgArr: ["/experience/builtdesign/logo.png"],
            },
        ],
    },
];
