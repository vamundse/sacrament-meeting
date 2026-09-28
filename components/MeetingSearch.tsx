'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export function MeetingSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace} = useRouter();

    const handleSearch = useDebouncedCallback((query: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (query) {
            params.set('query', query);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`)
    }, 300);

    return (
        <input
        className="w-full rounded-b-md border-2 border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
        type="search"
        placeholder="Search by speaker, leader or meeting type..."
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        aria-label="Search meetings"
        /> 
    );
}