import { NextResponse, NextRequest } from "next/server";
import { getMeetingById } from "@/lib/meetings_db";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id: idStr } = await params;
    const id = parseInt(idStr, 10);

    if (isNaN(id)) {
        return NextResponse.json(
            { error: "400: Invalid ID parameter" },
            { status: 400 }
        )
    }

    const meeting = await getMeetingById(id);

    if (!meeting) {
        return NextResponse.json(
            { error: "404:Meeting not found" },
            { status: 404 }
        );
    }

    return NextResponse.json(meeting);
}