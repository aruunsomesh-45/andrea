
import Link from 'next/link'

export default function AuthErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <div className="bg-neutral-900 border border-white/10 rounded-2xl p-8 max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4 text-red-500">Authentication Error</h1>
                <p className="text-neutral-400 mb-6">
                    Something went wrong during the authentication process. This could be due to a configuration issue or an expired link.
                </p>                <Link
                    href="/login"
                    className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-6 rounded-lg transition-colors inline-block"
                >
                    Back to Login
                </Link>
            </div>
        </div>
    )
}
