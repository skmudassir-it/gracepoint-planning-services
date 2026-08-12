import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/quote-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = quoteSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return NextResponse.json(
        {
          success: false,
          error: firstError?.message ?? "Please check your details and try again.",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }
    const { name, email, service } = parsed.data;
    // In production this payload would be persisted / routed to a planning coordinator.
    // Deliberately no redirect — the client shows a success toast.
    return NextResponse.json({
      success: true,
      message: `Thanks ${name.split(" ")[0]}, your request regarding ${service} has been received.`,
      receivedAt: new Date().toISOString(),
      receipt: `GP-${Date.now().toString(36).toUpperCase()}`,
      email,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }
}
