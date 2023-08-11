interface PagesConfig {
    [key: string]: {
        title: string;
        description: string;
        featuredDescription: string;
    };
}

export const pagesConfig: PagesConfig = {
    skills: {
        title: "Skills",
        description: "This is skills page",
        featuredDescription: "This is a description for featured content",
    },
    experience: {
        title: "experience",
        description: "This is experience page",
        featuredDescription: "This is a description for featured content",
    },
    contact: {
        title: "contact",
        description: "This is contact page",
        featuredDescription: "This is a description for featured content",
    },
};
