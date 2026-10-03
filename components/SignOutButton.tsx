import { signOutAction } from '@/lib/actions';

export function SignOutButton() {
    return (
        <form action={signOutAction}>
            <button
                type="submit"
                className="cursor-pointer rounded-md border border-sky-300 px-3 py-1 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-sky-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
                Sign Out
            </button>
        </form>
    );
}