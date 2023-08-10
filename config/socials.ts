import { Icons } from "@/components/icons";
import { SiGmail, SiLinkedin, SiTwitter } from "react-icons/si";

interface SocialInterface {
    name: string;
    username: string;
    icon: any;
    link: string;
}

export const SocialLinks: SocialInterface[] = [
    {
        name: "Github",
        username: "@namanarkiya",
        icon: Icons.gitHub,
        link: "https://github.com/namanbarkiya",
    },
    {
        name: "LinkedIn",
        username: "Naman Barkiya",
        icon: SiLinkedin,
        link: "https://www.linkedin.com/in/naman-barkiya-015323200/",
    },
    {
        name: "Twitter",
        username: "@namanbarkiya",
        icon: SiTwitter,
        link: "https://twitter.com/namanbarkiya",
    },
    {
        name: "Gmail",
        username: "naman.barkiya02",
        icon: SiGmail,
        link: "mailto:naman.barkiya02@gmail.com",
    },
];
