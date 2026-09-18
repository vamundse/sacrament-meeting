import MeetingDetail from "@/components/MeetingDetail";
import type { SacramentMeeting } from "@/lib/types";

async function getMeetingData(id: string) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/api/meetings/${id}`);
    const meeting: SacramentMeeting = await res.json();
    return meeting;
}

export default async function MeetingsPageId(
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const meeting = await getMeetingData(id);

    if (!meeting) {
        return <div className="m-12 text-red-400 text-lg font-bold">Meeting not found</div>;
    }

    return (
        <div>
            <MeetingDetail meeting={meeting} />
        </div>
    );
}