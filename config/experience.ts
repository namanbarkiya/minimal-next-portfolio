import { ValidCategory, ValidSkills } from "./constants";

interface DetailsInterface {
    title: string;
    imgArr: string[];
    content?: string;
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
    // detailsArr: DetailsInterface[];
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
    },
];
