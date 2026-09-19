import type { SacramentMeeting } from "../lib/types";

export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
    return (
        <div className="p-6 shadow-lg bg-gradient-to-b from-white to-gray-100 dark:from-mist-800 dark:to-mist-900 dark:text-white">
            <div className="mb-6 pb-4 border-b border-mist-600">
                <h2 className="text-3xl font-bold capitalize mb-3">{meeting.meetingType} Meeting</h2>
                <div className="grid grid-cols-2 gap-4">
                    <p><b>Date:</b> {meeting.date}</p>
                    <p><b>Presiding:</b> {meeting.presiding}</p>
                    <p><b>Conducting:</b> {meeting.conducting}</p>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-300">Opening</h3>
                <p><b>Hymn {meeting.openingHymn.number}:</b> <em>{meeting.openingHymn.title}</em></p>
                <p><b>Prayer:</b> {meeting.openingPrayer}</p>
            </div>

            {meeting.wardBusiness.length > 0 && (
                <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-300">Ward Business</h3>
                    {meeting.wardBusiness.map((item, i) => (
                        <p key={i} className="ml-4">• {item.description}</p>
                    ))}
                </div>
            )}

            {meeting.stakeBusiness && (
                <div className="mb-6 p-3 bg-mist-200 dark:bg-mist-700 rounded">
                    <p className="font-bold text-yellow-800 dark:text-yellow-300">⚠ Stake Business: Yes</p>
                </div>
            )}

            <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-300">Sacrament</h3>
                <p><b>Hymn {meeting.sacramentHymn.number}:</b> <em>{meeting.sacramentHymn.title}</em></p>
            </div>

            {meeting.speakers.length > 0 && (
                <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-300">Speakers & Music</h3>
                    <div className="ml-4 space-y-2">
                        {meeting.speakers.map((speaker, i) => (
                            <p key={i}>
                                <b>{speaker.name}</b> <span className="dark:text-gray-300">({speaker.type})</span>
                                {speaker.topic && <span className="dark:text-yellow-200"> — {speaker.topic}</span>}
                            </p>
                        ))}
                    </div>
                </div>
            )}

            <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-300">Closing</h3>
                <p><b>Hymn {meeting.closingHymn.number}:</b> <em>{meeting.closingHymn.title}</em></p>
                <p><b>Prayer:</b> {meeting.closingPrayer}</p>
            </div>

            {meeting.announcements && meeting.announcements.length > 0 && (
                <div className="pt-4 border-t border-mist-600">
                    <h3 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-300">Announcements</h3>
                    <div className="ml-4 space-y-2">
                        {meeting.announcements.map((announcement, i) => (
                            <p key={i}>📢 {announcement}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}