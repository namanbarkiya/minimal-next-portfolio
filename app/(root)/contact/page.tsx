import React from "react";

import PageHeader from "@/components/page-header";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export default function ContactPage() {
    return (
        <>
            <PageHeader
                title={pagesConfig.contact.title}
                description={pagesConfig.contact.description}
            />
            <div className="flex justify-center min-w-full">
                <div className="flex w-[40rem]">
                    <ContactForm />
                </div>
            </div>
        </>
    );
}
