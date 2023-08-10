import React from "react";

import { ContactForm } from "@/components/forms/contact-form";
import PageHeader from "@/components/page-header";

export default function ContactPage() {
    return (
        <>
            <PageHeader title="Contact Me" description="Contact me page" />
            <div className="flex justify-center min-w-full">
                <div className="flex w-[40rem]">
                    <ContactForm />
                </div>
            </div>
        </>
    );
}
