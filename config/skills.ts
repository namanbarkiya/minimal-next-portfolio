import {
    SiAmazonaws,
    SiAngular,
    SiBootstrap,
    SiCss3,
    SiExpress,
    SiGraphql,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiMui,
    SiMysql,
    SiNestjs,
    SiNetlify,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiRedux,
    SiSocketdotio,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

export interface skillsInterface {
    name: string;
    description: string;
    rating: number;
    icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
    {
        name: "Next.js",
        description:
            "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
        rating: 5,
        icon: SiNextdotjs,
    },
    {
        name: "React",
        description:
            "Craft interactive user interfaces using components, state, props, and virtual DOM.",
        rating: 5,
        icon: SiReact,
    },
    {
        name: "GraphQL",
        description:
            "Fetch data precisely with a powerful query language for APIs and runtime execution.",
        rating: 4,
        icon: SiGraphql,
    },
    {
        name: "Nest.js",
        description:
            "Create scalable and modular applications with a progressive Node.js framework.",
        rating: 4,
        icon: SiNestjs,
    },
    {
        name: "express.js",
        description:
            "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
        rating: 5,
        icon: SiExpress,
    },
    {
        name: "Node.js",
        description:
            "Run JavaScript on the server side, enabling dynamic and responsive applications.",
        rating: 5,
        icon: SiNodedotjs,
    },
    {
        name: "MongoDB",
        description:
            "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
        rating: 5,
        icon: SiMongodb,
    },
    {
        name: "Typescript",
        description:
            "Enhance JavaScript with static types, making code more understandable and reliable.",
        rating: 5,
        icon: SiTypescript,
    },
    {
        name: "Javascript",
        description:
            "Create interactive and dynamic web experiences with the versatile scripting language.",
        rating: 5,
        icon: SiJavascript,
    },
    {
        name: "HTML 5",
        description:
            "Structure web content beautifully with the latest version of HyperText Markup Language.",
        rating: 4,
        icon: SiHtml5,
    },
    {
        name: "CSS 3",
        description:
            "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
        rating: 4,
        icon: SiCss3,
    },
    {
        name: "React Native",
        description:
            "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
        rating: 4,
        icon: SiReact,
    },
    {
        name: "Angular",
        description:
            "Build dynamic web apps with a TypeScript-based open-source framework by Google.",
        rating: 3,
        icon: SiAngular,
    },
    {
        name: "Redux",
        description:
            "Manage app state effectively using a predictable and centralized state container.",
        rating: 4,
        icon: SiRedux,
    },
    {
        name: "Socket.io",
        description:
            "Enable real-time, bidirectional communication between clients and servers effortlessly.",
        rating: 3,
        icon: SiSocketdotio,
    },
    {
        name: "Material UI",
        description:
            "Create stunning and responsive UIs with a popular React UI framework.",
        rating: 4,
        icon: SiMui,
    },

    {
        name: "Tailwind CSS",
        description:
            "Design beautiful, modern websites faster with a utility-first CSS framework.",
        rating: 5,
        icon: SiTailwindcss,
    },
    {
        name: "AWS",
        description:
            "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
        rating: 3,
        icon: SiAmazonaws,
    },
    {
        name: "Bootstrap",
        description:
            "Quickly create responsive and appealing web designs using a popular CSS framework.",
        rating: 2,
        icon: SiBootstrap,
    },
    {
        name: "MySQL",
        description:
            "Manage and organize relational databases efficiently for data-driven applications.",
        rating: 2,
        icon: SiMysql,
    },
    {
        name: "Netlify",
        description:
            "Manage and organize relational databases efficiently for data-driven applications.",
        rating: 4,
        icon: SiNetlify,
    },
];

export const skills = skillsUnsorted
    .slice()
    .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
