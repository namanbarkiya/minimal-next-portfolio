import { Icons } from "@/components/icons";

interface SocialInterface {
    name: string;
    username: string;
    icon: any;
    link: string;
}

export const SocialLinks: SocialInterface[] = [
    {
        name: "Github",
        username: "@namanbarkiya",
        icon: Icons.gitHub,
        link: "https://github.com/namanbarkiya",
    },
    {
        name: "LinkedIn",
        username: "Naman Barkiya",
        icon: Icons.linkedin,
        link: "https://www.linkedin.com/in/naman-barkiya-015323200/",
    },
    {
        name: "Twitter",
        username: "@namanbarkiya",
        icon: Icons.twitter,
        link: "https://twitter.com/namanbarkiya",
    },
    {
        name: "Gmail",
        username: "naman.barkiya02",
        icon: Icons.gmail,
        link: "mailto:naman.barkiya02@gmail.com",
    },
];
