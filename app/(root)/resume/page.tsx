"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

export default function ResumePage() {
    useEffect(() => {
        redirect(process.env.NEXT_PUBLIC_RESUME_LINK || "/");
    }, []);
    return <div>Redirecting to drive...</div>;
}
