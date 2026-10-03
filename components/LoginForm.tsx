'use client';

import { useActionState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { authenticate } from '../lib/actions';

export function LoginForm() {
    const { update } = useSession();
    const router = useRouter();

    const [errorMessage, formAction, isPending] = useActionState(
        async (prevState: string | undefined, formData: FormData) => {
            const error = await authenticate(prevState, formData);

            if (error) return error;

            try {
                const session = await update();

                if (!session?.user) {
                    return 'Unable to confirm your session. Please try again.';
                }
            } catch (error) {
                console.error('Failed to refresh session:', error);
                return 'Unable to refresh your session. Please try again.';
            }

            router.replace('/meetings');
            router.refresh();

            return undefined;
        },
        undefined,
    );

    return (
        <form action={formAction} className="space-y-5">
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="username"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
                    required
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-900 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
                    minLength={6}
                    required
                />
            </div>
            <button
                disabled={isPending}
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-sky-900 px-4 py-3 font-semibold text-white transition-colors hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 disabled:cursor-wait disabled:opacity-60"
            >
                {isPending ? 'Signing in...' : 'Sign In'}
            </button>
            {errorMessage && (
                <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200">
                    {errorMessage}
                </p>
            )}
        </form>
    );
}