// import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { BsInfoCircle } from "react-icons/bs";

interface CustomToolkitProps {
    children: React.ReactNode;
    text: string;
}

export default function CustomToolkit({ children, text }: CustomToolkitProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent className="flex text-muted-foreground items-center">
                    <BsInfoCircle className="w-4 h-4 mr-2" />
                    <span>{text}</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
