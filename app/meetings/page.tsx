import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "../../lib/types.ts"
import Link from "next/link";

export default async function MeetingsPage() {
    const res = await fetch("http://localhost:3000/api/meetings");
    const meetings: SacramentMeeting[] = await res.json();
    meetings.sort((a, b) => b.date.localeCompare(a.date));

    return (
        <div>
            <h1 className="text-2xl font-bold m-4">All meetings</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
                {meetings.map(meeting => (
                <Link key={ meeting.id } href={`/meetings/${meeting.id}`}>
                    <MeetingCard meeting={meeting} />
                </Link>
                ))}
            </div>
        </div>
    );
}