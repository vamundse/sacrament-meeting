import { redirect } from "next/navigation";
import { getMeetingIdByDate } from "@/lib/meetings_db";

export const dynamic = 'force-dynamic';

export default async function CurrentMeetingPage() {
    const sunday = new Date();
    sunday.setDate(sunday.getDate() - sunday.getDay());
    const date = [
        sunday.getFullYear(),
        String(sunday.getMonth() + 1).padStart(2, "0"),
        String(sunday.getDate()).padStart(2, "0"),
    ].join("-");
    const meetingId = await getMeetingIdByDate(date);

    redirect(meetingId === null ? "/meetings" : `/meetings/${meetingId}`);
}
