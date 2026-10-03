"use client";

import type { SacramentMeeting } from "../lib/types";
import Link from "next/link";
import { deleteMeetingAction } from "@/lib/actions";

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
    return (
        <div className="p-4 m-4 m-4 rounded-lg shadow-md bg-gradient-to-b from-white to-mist-100 hover:from-mist-100 hover:to-mist-200 dark:from-mist-800 dark:to-mist-900 dark:hover:from-mist-700 dark:hover:to-mist-800 hover:cursor-pointer transition-all hover:shadow-lg">
            <Link href={`/meetings/${meeting.id}`}>
                <div className="mb-4 border-mist-600">
                    <p className="text-lg font-bold mb-2 capitalize">{meeting.meetingType} Meeting</p>
                    <p className="text-sm"><b>Date:</b> {meeting.date}</p>
                </div>
                <div className="mb-4 space-y-2">
                    <p className="text-sm"><b>Conducting:</b> {meeting.conducting}</p>
                    {meeting.presiding && <p className="text-sm"><b>Presiding:</b> {meeting.presiding}</p>}
                </div>
                {meeting.speakers && meeting.speakers.length > 0 && (
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
                )}
                </Link>
                <div className="flex justify-end">
                    <form
                        className="mt-4 flex justify-end"
                    >
                    <Link href={`/meetings/${meeting.id}/edit`}>
                        <button
                            className="ml-4 px-3 py-1 bg-sky-900 text-white rounded hover:bg-sky-700 transition-all hover:cursor-pointer"
                        >
                            Update Meeting
                        </button>
                    </Link>
                    </form>
                    <form
                        className="mt-4 flex justify-end"
                        action={deleteMeetingAction.bind(null, meeting.id)}
                    >
                    <button
                        className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-all hover:cursor-pointer"
                    >
                        Delete Meeting
                    </button>
                    </form>
                </div>
            </div>
            
    )
}