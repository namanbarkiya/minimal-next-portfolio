interface ProjectCardProps {
    title: string;
    description: string;
    bgSrc: any;
}

import { Button } from "./ui/button";

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div
            className="card bg-cover transform hover:scale-110 transition-transform overflow-hidden z-40"
            style={{
                backgroundImage: `url(${props.bgSrc})`,
            }}
        >
            <div className="content">
                <h2 className="title">{props.title}</h2>
                <p className="copy">{props.description}</p>
                <Button>View more</Button>
            </div>
        </div>
    );
}
