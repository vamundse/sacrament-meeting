import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto p-4 m-4 rounded-lg shadow-md bg-gradient-to-b from-white to-mist-100 dark:from-mist-800 dark:to-mist-900 text-center">
      <h1 className="text-lg font-bold mb-4">Meeting Not Found</h1>
      <p className="mb-4 text-sm">The meeting you are looking for does not exist.</p>
      <Link
        href="/meetings"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all inline-block"
      >
        Back to Meetings
      </Link>
    </div>
  );
}