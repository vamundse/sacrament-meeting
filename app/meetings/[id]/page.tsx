import MeetingDetail from "@/components/MeetingDetail";
import type { SacramentMeeting } from "../../../lib/types.ts"

export default async function MeetingsPageId(
    { params }: { params: Promise <{ id: string }> }
    ) {

        let meeting: SacramentMeeting | null = null;
        let error: string | null = null;

        try {
            const { id } = await params;
            const res = await fetch(`http://localhost:3000/api/meetings/${id}`)

            if(!res.ok) {
                error = `Error ${res.status}: Meeting not found`;
            } else {
                meeting = await res.json();
            }

        } catch (error) {
            console.error(error);
            error = "An error occurred";
        }

        if (error) {
            return <div className="m-12 text-red-400 text-lg font-bold"> { error } </div>;
        }

        if (!meeting) {
            return <div className="m-12 text-red-400 text-lg font-bold"> { error } </div>;
        }

        return (
            <div className=""> 
                <MeetingDetail meeting={meeting} />
            </div>
            );
    }