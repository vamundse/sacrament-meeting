export const dynamic = 'force-dynamic';

import MeetingCard from "@/components/MeetingCard";
import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

async function getMeetingData() {
    const apiUrl = process.env.API_URL;

    if (!apiUrl) {
        throw new Error('API_URL environment variable is not set');
    }

    const res = await fetch(`${apiUrl}/api/meetings`);

    if (!res.ok) {
        throw new Error(`Failed to fetch meetings: ${res.status} ${res.statusText}`);
    }

    const meetings: SacramentMeeting[] = await res.json();
    return meetings;
}

export default async function MeetingsPage() {  
    await new Promise(resolve => setTimeout(resolve, 500));  
    const meetings = await getMeetingData();
    const sorted = [...meetings].sort((a, b) => b.date.localeCompare(a.date));

    return (
        <div>
            <h1 className="text-2xl font-bold m-4">All meetings</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
                {sorted.map(meeting => (
                <Link key={ meeting.id } href={`/meetings/${meeting.id}`}>
                    <MeetingCard meeting={meeting} />
                </Link>
                ))}
            </div>
        </div>
    );
}