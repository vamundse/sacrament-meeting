'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav aria-label="Main navigation" className="flex flex-wrap gap-4 bg-gray-200 p-4 text-black">
            <Link
                href="/"
                className={pathname === '/' ? 'font-bold' : ''}
                aria-current={pathname === '/' ? 'page' : undefined}
            >
                Home
            </Link>
            <Link
                href="/meetings"
                className={pathname === '/meetings' ? 'font-bold' : ''}
                aria-current={pathname === '/meetings' ? 'page' : undefined}
            >
                All Meetings
            </Link>
            <Link
                href="/meetings/current"
                className={pathname === '/meetings/current' ? 'font-bold' : ''}
                aria-current={pathname === '/meetings/current' ? 'page' : undefined}
            >
                Current Meeting
            </Link>
        </nav>
    );
}
