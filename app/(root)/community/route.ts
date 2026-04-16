import { NextResponse } from "next/server";

export async function GET() {
  const discordLink = process.env.NEXT_PUBLIC_DISCORD_LINK;

  if (!discordLink) {
    return new NextResponse("Discord link not configured", {
      status: 500,
    });
  }

  return NextResponse.redirect(discordLink);
}