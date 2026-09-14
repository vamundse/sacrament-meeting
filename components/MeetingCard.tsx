import type { SacramentMeeting } from "../lib/types";

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
    return (
        <div className="p-4 rounded-lg shadow-md bg-gradient-to-b from-mist-800 to-mist-900 text-white hover:from-mist-700 hover:to-mist-800 hover:cursor-pointer transition-all hover:shadow-lg">
            <div className="mb-4 border-mist-600">
                <p className="text-lg font-bold mb-2 capitalize">{meeting.meetingType} Meeting</p>
                <p className="text-sm"><b>Date:</b> {meeting.date}</p>
            </div>
            <div className="mb-4 space-y-2">
                <p className="text-sm"><b>Conducting:</b> {meeting.conducting}</p>
                {meeting.presiding && <p className="text-sm"><b>Presiding:</b> {meeting.presiding}</p>}
            </div>
            <div>
                <p className="text-sm font-bold mb-2 text-blue-300">Speakers & Music</p>
                <div className="space-y-1">
                    {meeting.speakers.map((speaker, i) => (
                        <p key={i} className="text-sm ml-3">
                            <b>{speaker.name}</b> <span className="text-gray-200">({speaker.type})</span>
                            {speaker.topic && <span className="text-yellow-200"> — {speaker.topic}</span>}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}