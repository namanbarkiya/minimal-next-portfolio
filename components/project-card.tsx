interface ProjectCardProps {
    title: string;
    description: string;
    bgSrc: any;
}

import Image from "next/image";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import Chip from "./ui/chip";

// export default function ProjectCard(props: ProjectCardProps) {
//     return (
//         <div
//             className="card bg-cover transform hover:scale-110 transition-transform overflow-hidden z-40"
//             style={{
//                 backgroundImage: `url(${props.bgSrc})`,
//             }}
//         >
//             <div className="content">
//                 <h2 className="title">{props.title}</h2>
//                 <p className="copy">{props.description}</p>
//                 <Button>View more</Button>
//             </div>
//         </div>
//     );
// }

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className="p-6 max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-transparent dark:border-gray-700">
            <div>
                <Image
                    className="rounded-lg"
                    src={props.bgSrc}
                    alt="img"
                    sizes="100vw"
                    height={300}
                    width={400}
                />
            </div>
            <div className="pt-5 space-y-3">
                <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {props.description}
                </p>
                <div>
                    <Chip content="UI/UX" />
                </div>
                <Button variant={"default"} className="mt-2">
                    Read more
                    <Icons.chevronRight className="w-4 ml-1" />
                </Button>
            </div>
        </div>
    );
}
