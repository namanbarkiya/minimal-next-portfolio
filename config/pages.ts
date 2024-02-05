import { ValidPages } from "./constants";

type PagesConfig = {
    [key in ValidPages]: {
        title: string;
        description: string;
        // featuredDescription: string;
    };
};

export const pagesConfig: PagesConfig = {
    skills: {
        title: "Skills",
        description: "Key skills that define my professional identity.",
        // featuredDescription: "Skill Showcase",
    },
    experience: {
        title: "Experience",
        description: "Highlighting career journey and impactful projects.",
        // featuredDescription: "Work Timeline",
    },
    contact: {
        title: "Contact",
        description: "Let's connect and explore collaborations.",
        // featuredDescription: "Get in Touch",
    },
    contributions: {
        title: "Contributions",
        description: "Open-source contributions and community involvement.",
        // featuredDescription: "Contributions Showcase",
    },
};
