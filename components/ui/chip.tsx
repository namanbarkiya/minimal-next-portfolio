import React from "react";

interface ChipProps {
    content: string;
}

// export default function Chip({ content }: ChipProps) {
//     return (
//         <div className="flex justify-center items-center m-1 px-2 py-1 border border-gray-300 rounded-full bg-gray-200 text-base text-gray-700 font-medium">
//             <div className="flex-initial leading-none text-xs font-normal">
//                 名称
//             </div>
//         </div>
//     );
// }
export default function Chip({ content }: ChipProps) {
    return (
        <div className="center relative inline-block select-none whitespace-nowrap rounded-md py-2 px-3 align-baseline font-sans text-xs font-bold uppercase leading-none text-primary border border-gray-300  dark:bg-transparent">
            {content}
        </div>
    );
}
