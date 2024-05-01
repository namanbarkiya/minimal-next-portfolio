import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const formLink = process.env.SB_GOOGLE_FORM_LINK;
    if (!formLink) {
        return new NextResponse("Please configure the env variables", {
            status: 500,
        });
    }

    const fieldIdFirstName = process.env.SB_GOOGLE_FORM_FIELD_ID_FIRST_NAME;
    const fieldIdLastName = process.env.SB_GOOGLE_FORM_FIELD_ID_LAST_NAME;
    const fieldIdEmail = process.env.SB_GOOGLE_FORM_FIELD_ID_EMAIL;
    const fieldIdCompany = process.env.SB_GOOGLE_FORM_FIELD_ID_COMPANY;
    const fieldIdWebsite = process.env.SB_GOOGLE_FORM_FIELD_ID_WEBSITE;
    const fieldIdMessage = process.env.SB_GOOGLE_FORM_FIELD_ID_MESSAGE;

    try {
        const body = await req.json();
        const { firstName, lastName, email, company, website, message } = body;

        const res = await fetch(
            `${formLink}/formResponse?${fieldIdFirstName}=${firstName}&${fieldIdLastName}=${lastName}&${fieldIdEmail}=${email}&${fieldIdCompany}=${company}&${fieldIdWebsite}=${website}&${fieldIdMessage}=${message}`
        );

        return NextResponse.json("Success!");
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function GET(req: Request) {
    return new NextResponse("Hello from SB Contact API!");
}
