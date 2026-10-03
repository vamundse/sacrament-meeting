'use client';

import { SignOutButton } from './SignOutButton';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export function Header() {
    const { status } = useSession();
    const today = new Date().toLocaleDateString('dk');
    return (
        <header className="flex justify-between gap-4 px-4 text-center py-4 bg-sky-900">
            <h2 className="text-white text-lg font-bold">Odense Ward</h2>
            <p className="text-white text-lg">{today}</p>
            {status === 'authenticated' ? (
                <SignOutButton />
            ) : (
                <Link href="/login" className="self-start cursor-pointer rounded-md border border-sky-300 px-3 py-1 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Log In
                </Link>
            )}
        </header>
    )
}