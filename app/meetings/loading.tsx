export default function Loading() {
    return (
        <div className="p-6">
            <div className="animate-pulse space-y-4">
                <div className="h-10 bg-mist-700 rounded w-1/3"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-64 bg-mist-700 rounded-lg"></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
