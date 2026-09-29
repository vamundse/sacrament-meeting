'use client';

import { useState } from "react";

export function RepeatebleField({ name, label, defaultValues = [] }: { name: string; label: string; defaultValues?: string[] }) {
    const [count, setCount] = useState(defaultValues.length || 1);

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="text-sm font-bold text-blue-800 dark:text-blue-300">{label}</label>
            {Array.from({ length: count }).map((_, i) => (
                <input
                    key={i}
                    type="text"
                    name={name}
                    className="rounded-md border-2 border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 dark:bg-mist-800 dark:border-mist-600 dark:text-gray-100"
                    defaultValue={defaultValues[i]}
                />
            ))}
            <button
                type="button"
                onClick={() => setCount((c) => c + 1)}
                className="self-start text-sm text-blue-600 hover:underline"
            >
                + Add Another
            </button>
        </div>
    );
}

export function SpeakersField({ defaultSpeakers = [] }: { defaultSpeakers?: { name?: string; topic?: string; type?: string }[] }) {
    const [count, setCount] = useState(defaultSpeakers.length || 1);

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="speakers" className="text-sm font-bold text-blue-800 dark:text-blue-300">Speakers:</label>
            {Array.from({ length: count }).map((_, i) => (
                <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 rounded-md border border-gray-300 dark:border-mist-600">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-bold text-blue-800 dark:text-blue-300" htmlFor={`speakerName${i}`}>Name</label>
                        <input
                            type="text"
                            id={`speakerName${i}`}
                            name={`speakerName`}
                            defaultValue={defaultSpeakers[i]?.name}
                            className="rounded-md border-2 border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 dark:bg-mist-800 dark:border-mist-600 dark:text-gray-100"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-bold text-blue-800 dark:text-blue-300" htmlFor={`speakerTopic${i}`}>Topic</label>
                        <input
                            type="text"
                            id={`speakerTopic${i}`}
                            name={`speakerTopic`}
                            defaultValue={defaultSpeakers[i]?.topic}    
                            className="rounded-md border-2 border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 dark:bg-mist-800 dark:border-mist-600 dark:text-gray-100"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-bold text-blue-800 dark:text-blue-300" htmlFor={`speakerType${i}`}>Type</label>
                        <select
                            id={`speakerType${i}`}
                            name={`speakerType`}
                            defaultValue={defaultSpeakers[i]?.type}
                            className="rounded-md border-2 border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 dark:bg-mist-800 dark:border-mist-600 dark:text-gray-100"
                        >
                            <option value="speaker">Speaker</option>
                            <option value="musical-number">Musical Number</option>
                        </select>
                    </div>
                </div>
            ))}
            <button
                type="button"
                onClick={() => setCount((c) => c + 1)}
                className="self-start text-sm text-blue-600 hover:underline"
            >
                + Add Another
            </button>
        </div>
    );
}