import React from "react";
import Chip from "./ui/chip";

interface ChipContainerProps {
    textArr: string[];
}

export default function ChipContainer({ textArr }: ChipContainerProps) {
    return (
        <div className="flex my-3 gap-2 flex-wrap">
            {textArr.map((it, ind) => (
                <Chip key={ind} content={it} />
            ))}
        </div>
    );
}
