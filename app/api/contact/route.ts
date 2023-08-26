import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, message, social, email } = body;

        const res = await fetch(
            `${process.env.GOOGLE_FORM_LINK}/formResponse?entry.150239605=${name}&entry.2001119656=${email}&entry.1488410870=${message}&entry.603167420=${social}`
        );

        return NextResponse.json("Success!");
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
