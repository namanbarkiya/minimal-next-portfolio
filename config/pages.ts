import { ValidPages } from "./constants";

type PagesConfig = {
    [key in ValidPages]: {
        title: string;
        description: string;
        featuredDescription: string;
    };
};

export const pagesConfig: PagesConfig = {
    skills: {
        title: "Skills",
        description: "This is skills page",
        featuredDescription: "This is a description for featured content",
    },
    experience: {
        title: "Experience",
        description: "This is experience page",
        featuredDescription: "This is a description for featured content",
    },
    contact: {
        title: "Contact",
        description: "This is contact page",
        featuredDescription: "This is a description for featured content",
    },
};
