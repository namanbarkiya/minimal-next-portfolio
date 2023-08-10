import { sendMail } from "@/services/mail-service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, message, social, email } = body;

        sendMail(name, message, social, email);

        return NextResponse.json("Success!");
    } catch (error) {
        console.log(error);
        return new NextResponse("Internal error", { status: 500 });
    }
}
