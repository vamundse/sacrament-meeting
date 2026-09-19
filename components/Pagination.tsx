'use client';

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";

export function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    if (totalPages === 0) {
        return null;
    }

    const currentPage = Number(searchParams.get('page') || '1');

    function createPageURL(page: number) {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', String(page));
        return `${pathname}?${params.toString()}`;
    }

    return (
        <nav className="flex items-center justify-center space-x-4 m-4" aria-label="Pagination">
            {currentPage > 1 && (
                <Link className="rounded border border-sky-900 bg-sky-900 px-3 py-2 font-medium text-white hover:bg-blue-700" href={createPageURL(currentPage - 1)}>
                    Previous
                </Link>
            )}
            <span>
                Page {currentPage} of {totalPages}
            </span>
            {currentPage < totalPages && (
                <Link className="rounded border border-sky-900 bg-sky-900 px-3 py-2 font-medium text-white hover:bg-blue-700" href={createPageURL(currentPage + 1)}>
                    Next
                </Link>
            )}
        </nav>
    );
}