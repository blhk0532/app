import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/inertia/Layouts/AppLayout';

export default function Home() {
    return (
        <AppLayout title="Home">
            <Head title="Home" />

            <div className="max-w-2xl space-y-4">
                <h2 className="text-xl font-semibold text-slate-800">Inertia React Area</h2>
                <p className="text-slate-600">
                    This surface runs under <strong>/spa</strong>, isolated from Filament and Livewire. Auth is
                    required.
                </p>
                <Link
                    href="/spa/dashboard"
                    className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                    Go to Dashboard →
                </Link>
            </div>
        </AppLayout>
    );
}
