import { Button } from "./ui/button";
// import Image from "next/image";

export default function ProjectCard() {
    return (
        <div
            className="card bg-cover transform hover:scale-110 transition-transform overflow-hidden z-50"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)",
            }}
        >
            <div className="content">
                <h2 className="title">Mountain View</h2>
                <p className="copy">
                    Check out all of these gorgeous mountain trips with
                    beautiful views of, you guessed it, the mountains
                </p>
                <Button>View Trips</Button>
            </div>
        </div>
    );
}
