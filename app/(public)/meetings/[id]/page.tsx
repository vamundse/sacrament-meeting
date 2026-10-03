export const dynamic = 'force-dynamic';

import MeetingDetail from "@/components/MeetingDetail";
import type { SacramentMeeting } from "@/lib/types";
import { notFound } from "next/navigation";

async function getMeetingData(id: string) {
    const apiUrl = process.env.API_URL;
    await new Promise(resolve => setTimeout(resolve, 500));
    const res = await fetch(`${apiUrl}/api/meetings/${id}`);
    if (res.status === 404) {
        notFound();
    }
    const meeting: SacramentMeeting = await res.json();
    return meeting;
}

export default async function MeetingsPageId(
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const meeting = await getMeetingData(id);

    return (
        <div>
            <MeetingDetail meeting={meeting} />
        </div>
    );
}