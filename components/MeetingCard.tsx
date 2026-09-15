import type { SacramentMeeting } from "../lib/types";

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
    return (
        <div className="p-4 rounded-lg shadow-md bg-gradient-to-b from-white to-mist-100 hover:from-mist-100 hover:to-mist-200 dark:from-mist-800 dark:to-mist-900 dark:hover:from-mist-700 dark:hover:to-mist-800 hover:cursor-pointer transition-all hover:shadow-lg">
            <div className="mb-4 border-mist-600">
                <p className="text-lg font-bold mb-2 capitalize">{meeting.meetingType} Meeting</p>
                <p className="text-sm"><b>Date:</b> {meeting.date}</p>
            </div>
            <div className="mb-4 space-y-2">
                <p className="text-sm"><b>Conducting:</b> {meeting.conducting}</p>
                {meeting.presiding && <p className="text-sm"><b>Presiding:</b> {meeting.presiding}</p>}
            </div>
            <div>
                <p className="text-sm font-bold mb-2 text-blue-800 dark:text-blue-300">Speakers & Music</p>
                <div className="space-y-1">
                    {meeting.speakers.map((speaker, i) => (
                        <p key={i} className="text-sm ml-3">
                            <b>{speaker.name}</b> <span className="dark:text-gray-200">({speaker.type})</span>
                            {speaker.topic && <span className="dark:text-yellow-200"> — {speaker.topic}</span>}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}