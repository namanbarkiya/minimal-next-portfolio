import { SiNextdotjs, SiReact } from "react-icons/si";

export interface skillsInterface {
    name: string;
    description: string;
    rating: number;
    icon: any;
}

export const skills: skillsInterface[] = [
    {
        name: "Next.js",
        description: "App dir, Routing, Layouts, Loading UI and API routes.",
        rating: 4,
        icon: SiNextdotjs,
    },
    {
        name: "React",
        description: "App dir, Routing, Layouts, Loading UI and API routes.",
        rating: 3,
        icon: SiReact,
    },
];
