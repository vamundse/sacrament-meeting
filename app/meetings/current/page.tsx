import MeetingDetail from "@/components/MeetingDetail";
import { getMeetings } from "@/lib/meetings_db";

export const dynamic = 'force-dynamic';

const today = new Date();
const dayOfWeek = today.getDay(); // 0 (Sun) through 6 (Sat)
const sunday = new Date(today);
sunday.setDate(today.getDate() - dayOfWeek); // roll back to Sunday

export default async function CurrentMeetingPage() {
    const date = sunday.toISOString().split("T")[0];
    const meetings = getMeetings();

    const meeting = meetings.find(meeting => meeting.date === date);

    if (!meeting) {
        return <div className="m-12 text-red-400 text-lg font-bold">Error 404: No meeting found for the current week</div>;
    }
    
    return <MeetingDetail meeting={meeting} />;
}