import { NextResponse, NextRequest } from "next/server";
import { getMeetings } from "@/lib/meetings_db";

export async function GET(request: NextRequest) {
    const date = new URL(request.url).searchParams.get('date');

    if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        return NextResponse.json(
            { error: "400: Invalid date format" },
            { status: 400 }
        )
    }

    const meetings = getMeetings(date);

    if(!meetings || meetings.length === 0) {
        return NextResponse.json(
            { error: "404: No meetings found" },
            { status: 404 }
        )
    }

    return NextResponse.json(meetings);
}