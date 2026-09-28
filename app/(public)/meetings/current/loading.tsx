export default function LoadingMeeting() {
    return (
        <div className="p-6 shadow-lg bg-gradient-to-b from-white to-gray-100 dark:from-mist-800 dark:to-mist-900">
            {/* Header Section */}
            <div className="mb-6 pb-4 border-b border-mist-600">
                <div className="h-8 bg-gray-300 dark:bg-mist-700 rounded w-48 mb-3 animate-pulse"></div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-5 bg-gray-300 dark:bg-mist-700 rounded animate-pulse"></div>
                    <div className="h-5 bg-gray-300 dark:bg-mist-700 rounded animate-pulse"></div>
                    <div className="h-5 bg-gray-300 dark:bg-mist-700 rounded animate-pulse"></div>
                </div>
            </div>

            {/* Opening Section */}
            <div className="mb-6">
                <div className="h-6 bg-gray-300 dark:bg-mist-700 rounded w-32 mb-3 animate-pulse"></div>
                <div className="h-5 bg-gray-300 dark:bg-mist-700 rounded mb-2 animate-pulse"></div>
                <div className="h-5 bg-gray-300 dark:bg-mist-700 rounded w-2/3 animate-pulse"></div>
            </div>

            {/* Ward Business Section */}
            <div className="mb-6">
                <div className="h-6 bg-gray-300 dark:bg-mist-700 rounded w-40 mb-3 animate-pulse"></div>
                <div className="h-5 bg-gray-300 dark:bg-mist-700 rounded ml-4 mb-2 animate-pulse"></div>
                <div className="h-5 bg-gray-300 dark:bg-mist-700 rounded ml-4 w-3/4 animate-pulse"></div>
            </div>

            {/* Sacrament Section */}
            <div className="mb-6">
                <div className="h-6 bg-gray-300 dark:bg-mist-700 rounded w-32 mb-3 animate-pulse"></div>
                <div className="h-5 bg-gray-300 dark:bg-mist-700 rounded animate-pulse"></div>
            </div>

            {/* Speakers & Music Section */}
            <div className="mb-6">
                <div className="h-6 bg-gray-300 dark:bg-mist-700 rounded w-48 mb-3 animate-pulse"></div>
                <div className="ml-4 space-y-2">
                    <div className="h-5 bg-gray-300 dark:bg-mist-700 rounded animate-pulse"></div>
                    <div className="h-5 bg-gray-300 dark:bg-mist-700 rounded animate-pulse"></div>
                    <div className="h-5 bg-gray-300 dark:bg-mist-700 rounded animate-pulse"></div>
                </div>
            </div>

            {/* Closing Section */}
            <div className="mb-6">
                <div className="h-6 bg-gray-300 dark:bg-mist-700 rounded w-32 mb-3 animate-pulse"></div>
                <div className="h-5 bg-gray-300 dark:bg-mist-700 rounded mb-2 animate-pulse"></div>
                <div className="h-5 bg-gray-300 dark:bg-mist-700 rounded w-2/3 animate-pulse"></div>
            </div>

            {/* Announcements Section */}
            <div className="pt-4 border-t border-mist-600">
                <div className="h-6 bg-gray-300 dark:bg-mist-700 rounded w-40 mb-3 animate-pulse"></div>
                <div className="ml-4 space-y-2">
                    <div className="h-5 bg-gray-300 dark:bg-mist-700 rounded animate-pulse"></div>
                    <div className="h-5 bg-gray-300 dark:bg-mist-700 rounded animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}
