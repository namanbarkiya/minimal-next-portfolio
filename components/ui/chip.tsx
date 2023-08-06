import React from "react";

interface ChipProps {
    content: string;
}

export default function Chip({ content }: ChipProps) {
    return (
        <div className="center relative inline-block select-none whitespace-nowrap rounded-md py-2 px-3 align-baseline font-sans text-xs font-bold leading-none text-primary border border-gray-300  dark:bg-transparent">
            {content}
        </div>
    );
}
