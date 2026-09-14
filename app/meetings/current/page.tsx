import MeetingDetail from "@/components/MeetingDetail";
import type { SacramentMeeting } from "../../../lib/types.ts"

export const dynamic = 'force-dynamic';

const today = new Date();
const dayOfWeek = today.getDay(); // 0 (Sun) through 6 (Sat)
const sunday = new Date(today);
sunday.setDate(today.getDate() - dayOfWeek); // roll back to Sunday

export default async function CurrentMeetingPage() {
    const date = sunday.toISOString().split("T")[0];
    console.log(date);
    const response = await fetch(`/api/meetings?date=${date}`);
    const meetings: SacramentMeeting[] = await response.json();

    if (!meetings || meetings.length === 0) {
        return <div className="m-12 text-red-400 text-lg font-bold">Error 404: No meetings found</div>;
    }
    
    return <MeetingDetail meeting={meetings[0]} />;
}