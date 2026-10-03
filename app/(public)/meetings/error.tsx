'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
    error, reset
}: {
    error: Error &  { digest: string };
    reset: () => void
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="max-w-2xl mx-auto p-4 m-4 rounded-lg shadow-md bg-gradient-to-b from-white to-mist-100 dark:from-mist-800 dark:to-mist-900">
            <h1 className="text-lg font-bold mb-4 text-red-700 dark:text-red-400">An error occurred</h1>
            <p className="mb-4 text-sm">{error.message}</p>
            <div className="flex items-center">
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-sky-900 text-white rounded hover:bg-sky-700 transition-all hover:cursor-pointer"
                >
                    Try Again
                </button>
                <Link href="/meetings" className="ml-4 text-sky-900 hover:underline dark:text-sky-200">
                    Go Back to meetings
                </Link>
            </div>
        </div>
    );
}