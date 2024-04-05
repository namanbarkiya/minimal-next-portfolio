"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import namanImg from "@/public/naman-img.jpg";

export function HeroImageCard() {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-black relative group/card  hover:shadow-2xl hover:shadow-black/[0.5] dark:hover:shadow-white/[0.4] dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-full border dark:bg-white ease-in-out duration-300 ">
                <CardItem translateZ="150" className="w-full">
                    <Image
                        src={namanImg}
                        height={100}
                        width={100}
                        sizes="100vw"
                        className="bg-primary rounded-full h-auto w-auto max-w-[16rem] border-8 border-primary dark:border-white dark:bg-white"
                        alt="naman-barkiya-img"
                    />
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}
