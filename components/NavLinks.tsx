'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <nav className="flex space-x-4 bg-gray-200 p-4 text-black">
            <Link
                href="/"
                className={pathname === '/' ? 'active' : ''}
                aria-current={pathname === '/' ? 'page' : undefined}
            >
                Home
            </Link>
            <Link
                href="/meetings"
                className={pathname === '/meetings' ? 'active' : ''}
                aria-current={pathname === '/meetings' ? 'page' : undefined}
            >
                All Meetings
            </Link>
            <Link
                href="/meetings/current"
                className={pathname === '/meetings/current' ? 'active' : ''}
                aria-current={pathname ==='/meetings/current' ? 'page' : undefined}
                >
                    Current Meeting
            </Link>
        </nav>
    );
}