<x-filament-widgets::widget
    class="overflow-hidden"
    id="announcement-widget"
    wire:poll.10s="refreshAnnouncements"
>
    <div class="w-full">
        @if(count($announcements) > 0)
            @foreach($announcements as $announcement)
                <div class="bg-gray-100 p-4 rounded-md mb-4">
                    <div class="flex justify-between items-start">
                        <h3 class="font-bold">{{ $announcement->title }}</h3>
                        <a
                            href="?edit_announcement={{ $announcement->id }}"
                            class="text-xs text-blue-500 hover:text-blue-700"
                        >
                            ...
                        </a>
                    </div>
                    <p class="text-gray-600">{!! $announcement->content !!}</p>
                    <div class="text-xs text-gray-500 mt-2 space-y-1">
                        <p>
                            <span class="font-semibold">From:</span>
                            {{ \Carbon\Carbon::parse($announcement->starts_at)->format('Y-m-d H:i') }}
                            @if($announcement->ends_at)
                                <span class="font-semibold">To:</span>
                                {{ \Carbon\Carbon::parse($announcement->ends_at)->format('Y-m-d H:i') }}
                            @endif
                        </p>
                        @if($announcement->user)
                            <p><span class="font-semibold">Created by:</span> {{ $announcement->user->name }}</p>
                        @endif
                        @if($announcement->tekniker)
                            <p><span class="font-semibold">Technician:</span> {{ $announcement->tekniker->name }}</p>
                        @endif
                        @if($announcement->component)
                            <p><span class="font-semibold">Component:</span> {{ $announcement->component->name }}</p>
                        @endif
                        @if($announcement->priority)
                            <p>
                                <span class="px-2 py-0.5 rounded text-white {{
                                    $announcement->priority === 'high' ? 'bg-red-500' :
                                    ($announcement->priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500')
                                }}">
                                    {{ ucfirst($announcement->priority) }}
                                </span>
                            </p>
                        @endif
                    </div>
                </div>
            @endforeach
        @else
            <p class="text-gray-500">No announcements.</p>
        @endif
    </div>
</x-filament-widgets::widget>
