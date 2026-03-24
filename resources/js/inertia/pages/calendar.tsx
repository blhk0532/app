import AppLayout from '@/layouts/app-layout';
import { calendar } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { lazy, Suspense } from 'react';

const EventCalendarDemo = lazy(() =>
    import('@/components/event-calendar-demo').then((module) => ({
        default: module.EventCalendarDemo,
    })),
);

const CalendarStats = lazy(() =>
    import('@/components/calendar-stats').then((module) => ({
        default: module.CalendarStats,
    })),
);

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Calendar',
        href: calendar().url,
    },
];

export default function Calendar() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Calendar" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl bg-background p-4">
                <div className="relative min-h-[100vh] w-full flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <Suspense fallback={<div className="h-full min-h-[480px] w-full animate-pulse rounded-xl" />}>
                        <EventCalendarDemo />
                    </Suspense>
                </div>

                <div className="mb-6">
                    <Suspense fallback={<div className="h-24 w-full animate-pulse rounded-xl" />}>
                        <CalendarStats />
                    </Suspense>
                </div>
            </div>
        </AppLayout>
    );
}
