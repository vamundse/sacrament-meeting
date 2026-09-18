import MeetingDetail from "@/components/MeetingDetail";
import { redirect } from "next/navigation";
import type { SacramentMeeting } from "@/lib/types";

const today = new Date();
const dayOfWeek = today.getDay();
const sunday = new Date(today);
sunday.setDate(today.getDate() - dayOfWeek);

async function getMeetingData() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    await new Promise(resolve => setTimeout(resolve, 500));
    const res = await fetch(`${apiUrl}/api/meetings`);
    const meetings: SacramentMeeting[] = await res.json();
    return meetings;
}

export default async function CurrentMeetingPage() {
    const date = sunday.toISOString().split("T")[0];
    
    // const res = await fetch("/api/meetings");
    // const meetings: SacramentMeeting[] = await res.json();
    // const meetings = getMeetings();

    const meetings = await getMeetingData();

    const meeting: SacramentMeeting | null = meetings.find(meeting => meeting.date === date) ?? null;

    if (!meeting) {
        redirect("/meetings");
    }
    
    return <MeetingDetail meeting={meeting} />;
}