import MeetingDetail from "@/components/MeetingDetail";
import { getMeetingById } from "../../../lib/meetings_db";

export default async function MeetingsPageId(
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const numberId = parseInt(id);
    const meeting = getMeetingById(numberId);

    if (!meeting) {
        return <div className="m-12 text-red-400 text-lg font-bold">Meeting not found</div>;
    }

    return (
        <div>
            <MeetingDetail meeting={meeting} />
        </div>
    );
}