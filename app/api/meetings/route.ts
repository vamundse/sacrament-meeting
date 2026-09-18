import { NextResponse, NextRequest } from "next/server";
import { getMeetings } from "@/lib/meetings_db";

export async function GET(request: NextRequest) {
    const query = new URL(request.url).searchParams.get('q') ?? '';
    const meetings = await getMeetings(query);

    if(!meetings) {
        return NextResponse.json(
            { error: "404: No meetings found" },
            { status: 404 }
        )
    }

    return NextResponse.json(meetings);
}