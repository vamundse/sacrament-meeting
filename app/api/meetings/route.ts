import { NextResponse, NextRequest } from "next/server";
import { getMeetings } from "@/lib/meetings_db";

export async function GET(request: NextRequest) {
    try {
        const query = new URL(request.url).searchParams.get('query') ?? '';
        const meetings = await getMeetings(query);

        if (meetings.length === 0) {
            return NextResponse.json([]);
        }

        return NextResponse.json(meetings);
        
    } catch (error) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}