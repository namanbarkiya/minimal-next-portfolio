"use client";
import { pagesConfig } from "@/config/pages";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: pagesConfig.resume.metadata.title,
  description: pagesConfig.resume.metadata.description,
};

export default function ResumePage() {
  useEffect(() => {
    redirect(process.env.NEXT_PUBLIC_RESUME_LINK || "/");
  }, []);
  return <div>Redirecting to the resume...</div>;
}
