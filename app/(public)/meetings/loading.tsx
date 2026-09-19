export default function LoadingMeetings() {
    return (
        <div>
            <h1 className="text-2xl font-bold m-4 h-8 bg-gray-300 dark:bg-mist-700 rounded w-48 animate-pulse"></h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="p-4 shadow-lg bg-gradient-to-b from-white to-gray-100 dark:from-mist-800 dark:to-mist-900 rounded space-y-3">
                        <div className="h-6 bg-gray-300 dark:bg-mist-700 rounded w-32 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 dark:bg-mist-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-300 dark:bg-mist-700 rounded w-2/3 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 dark:bg-mist-700 rounded w-1/3 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 dark:bg-mist-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-300 dark:bg-mist-700 rounded w-2/3 animate-pulse"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}