import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/inertia/Layouts/AppLayout';

interface SharedProps {
    auth: { user: { id: number; name: string; email: string } | null };
    quote: { message: string; author: string };
    [key: string]: unknown;
}

export default function Dashboard() {
    const { auth, quote } = usePage<SharedProps>().props;

    return (
        <AppLayout title="Dashboard">
            <Head title="Dashboard" />

            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-semibold text-slate-800">
                        Welcome back{auth.user ? `, ${auth.user.name}` : ''}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">Here&apos;s what&apos;s happening today.</p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {['Total Users', 'Active Sessions', 'Pending Tasks'].map((label, i) => (
                        <div
                            key={label}
                            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                        >
                            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
                            <p className="mt-2 text-3xl font-bold text-slate-800">{(i + 1) * 42}</p>
                        </div>
                    ))}
                </div>

                {/* Quote card */}
                <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
                    <p className="italic text-blue-800">&ldquo;{quote.message}&rdquo;</p>
                    <p className="mt-2 text-sm font-medium text-blue-600">— {quote.author}</p>
                </div>
            </div>
        </AppLayout>
    );
}
