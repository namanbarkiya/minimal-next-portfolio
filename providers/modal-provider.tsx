"use client";

import { useEffect, useState } from "react";

import { SuccessModal } from "@/components/modals/success-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <SuccessModal />
        </>
    );
};
