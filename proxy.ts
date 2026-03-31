import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isBlockedBotUserAgent } from "@/lib/bot-block";

export async function proxy(request: NextRequest) {
  const ua = request.headers.get("user-agent");

  if (isBlockedBotUserAgent(ua)) {
    return new NextResponse(null, { status: 403 });
  }

  // Let all other requests continue
  return NextResponse.next();
}
