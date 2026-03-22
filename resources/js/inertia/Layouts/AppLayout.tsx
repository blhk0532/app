import { Link, usePage } from '@inertiajs/react';
import { type ReactNode, useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface SharedProps {
    name: string;
    auth: { user: User | null };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

interface Props {
    children: ReactNode;
    title?: string;
}

export default function AppLayout({ children, title }: Props) {
    const { name, auth, sidebarOpen: initialSidebarOpen } = usePage<SharedProps>().props;

    const [sidebarOpen, setSidebarOpen] = useState(initialSidebarOpen);

    return (
        <div className="flex min-h-screen bg-slate-50 text-slate-900">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}
            >
                <div className="flex h-16 items-center border-b border-slate-200 px-5">
                    <span className="text-lg font-semibold tracking-tight">{name}</span>
                </div>

                <nav className="flex-1 overflow-y-auto p-4">
                    <ul className="space-y-1">
                        <li>
                            <Link
                                href="/spa"
                                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/spa/dashboard"
                                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                            >
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </nav>

                {auth.user && (
                    <div className="border-t border-slate-200 p-4">
                        <p className="truncate text-sm font-medium text-slate-800">{auth.user.name}</p>
                        <p className="truncate text-xs text-slate-500">{auth.user.email}</p>
                    </div>
                )}
            </aside>

            {/* Backdrop for mobile with sidebar open */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main area */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Topbar */}
                <header className="flex h-16 shrink-0 items-center gap-4 border-b border-slate-200 bg-white px-6">
                    <button
                        type="button"
                        className="rounded-md p-1 text-slate-500 hover:bg-slate-100 md:hidden"
                        onClick={() => setSidebarOpen((v) => !v)}
                        aria-label="Toggle sidebar"
                    >
                        <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                        </svg>
                    </button>
                    {title && <h1 className="text-sm font-semibold text-slate-800">{title}</h1>}
                </header>

                {/* Page content */}
                <main className="flex-1 overflow-y-auto p-6 md:p-8">{children}</main>
            </div>
        </div>
    );
}
