import { LoginForm } from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <main className="flex w-full flex-1 items-center justify-center px-4 py-12 sm:py-16">
      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-md sm:p-8 dark:border-gray-700 dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-sky-900 dark:text-sky-200">Sign In</h1>
        <p className="mb-6 mt-2 text-sm text-gray-600 dark:text-gray-300">
          Sign in to manage Odense Ward meetings.
        </p>
        <LoginForm />
      </div>
    </main>
  );
}