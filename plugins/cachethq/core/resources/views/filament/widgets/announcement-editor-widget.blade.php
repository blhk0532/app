<x-filament-widgets::widget class="overflow-hidden" id="announcement-editor-widget">
    <x-filament::section :heading="$editingId ? 'Edit Announcement' : 'Create Announcement'">
        <form wire:submit="save" class="space-y-4">
            <div class="grid grid-cols-1 gap-4">
                {{-- Title --}}
                <div>
                    <label for="title" class="fi-input-label block text-sm font-medium leading-6 text-gray-950 dark:text-white">
                        Title <span class="text-danger-600">*</span>
                    </label>
                    <input
                        id="title"
                        type="text"
                        wire:model="title"
                        class="fi-input block w-full rounded-lg border-none bg-white py-1.5 text-base text-gray-950 shadow-sm ring-1 ring-gray-200 transition duration-75 placeholder:text-gray-400 focus:ring-2 focus:ring-primary-600 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                        placeholder="Enter announcement title"
                    />
                    @error('title') <p class="mt-1 text-sm text-danger-600">{{ $message }}</p> @enderror
                </div>

                {{-- Content --}}
                <div>
                    <label for="content" class="fi-input-label block text-sm font-medium leading-6 text-gray-950 dark:text-white">
                        Content
                    </label>
                    <textarea
                        id="content"
                        wire:model="content"
                        rows="6"
                        class="fi-input block w-full rounded-lg border-none bg-white py-1.5 text-base text-gray-950 shadow-sm ring-1 ring-gray-200 transition duration-75 placeholder:text-gray-400 focus:ring-2 focus:ring-primary-600 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                        placeholder="Enter announcement content"
                    ></textarea>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {{-- Priority --}}
                <div>
                    <label for="priority" class="fi-input-label block text-sm font-medium leading-6 text-gray-950 dark:text-white">
                        Priority <span class="text-danger-600">*</span>
                    </label>
                    <select
                        id="priority"
                        wire:model="priority"
                        class="fi-input block w-full rounded-lg border-none bg-white py-1.5 text-base text-gray-950 shadow-sm ring-1 ring-gray-200 transition duration-75 focus:ring-2 focus:ring-primary-600 dark:bg-white/5 dark:text-white dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    @error('priority') <p class="mt-1 text-sm text-danger-600">{{ $message }}</p> @enderror
                </div>

                {{-- Component --}}
                <div>
                    <label for="component_id" class="fi-input-label block text-sm font-medium leading-6 text-gray-950 dark:text-white">
                        Component
                    </label>
                    <select
                        id="component_id"
                        wire:model="component_id"
                        class="fi-input block w-full rounded-lg border-none bg-white py-1.5 text-base text-gray-950 shadow-sm ring-1 ring-gray-200 transition duration-75 focus:ring-2 focus:ring-primary-600 dark:bg-white/5 dark:text-white dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                    >
                        <option value="">None</option>
                        @foreach($components as $component)
                            <option value="{{ $component->id }}">{{ $component->name }}</option>
                        @endforeach
                    </select>
                </div>

                {{-- Tekniker --}}
                <div>
                    <label for="tekniker_id" class="fi-input-label block text-sm font-medium leading-6 text-gray-950 dark:text-white">
                        Tekniker
                    </label>
                    <select
                        id="tekniker_id"
                        wire:model="tekniker_id"
                        class="fi-input block w-full rounded-lg border-none bg-white py-1.5 text-base text-gray-950 shadow-sm ring-1 ring-gray-200 transition duration-75 focus:ring-2 focus:ring-primary-600 dark:bg-white/5 dark:text-white dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                    >
                        <option value="">None</option>
                        @foreach($users as $user)
                            <option value="{{ $user->id }}">{{ $user->name }}</option>
                        @endforeach
                    </select>
                </div>

                {{-- Starts At --}}
                <div>
                    <label for="starts_at" class="fi-input-label block text-sm font-medium leading-6 text-gray-950 dark:text-white">
                        Starts At <span class="text-danger-600">*</span>
                    </label>
                    <input
                        id="starts_at"
                        type="datetime-local"
                        wire:model="starts_at"
                        class="fi-input block w-full rounded-lg border-none bg-white py-1.5 text-base text-gray-950 shadow-sm ring-1 ring-gray-200 transition duration-75 placeholder:text-gray-400 focus:ring-2 focus:ring-primary-600 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                    />
                    @error('starts_at') <p class="mt-1 text-sm text-danger-600">{{ $message }}</p> @enderror
                </div>

                {{-- Ends At --}}
                <div>
                    <label for="ends_at" class="fi-input-label block text-sm font-medium leading-6 text-gray-950 dark:text-white">
                        Ends At
                    </label>
                    <input
                        id="ends_at"
                        type="datetime-local"
                        wire:model="ends_at"
                        class="fi-input block w-full rounded-lg border-none bg-white py-1.5 text-base text-gray-950 shadow-sm ring-1 ring-gray-200 transition duration-75 placeholder:text-gray-400 focus:ring-2 focus:ring-primary-600 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-primary-500 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div class="flex justify-end gap-2">
                @if($editingId)
                    <button
                        type="button"
                        wire:click="resetForm"
                        class="fi-btn relative inline-flex items-center justify-center gap-1.5 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-gray-950 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:ring-white/20 dark:hover:bg-white/20"
                    >
                        Cancel
                    </button>
                @endif

                <button
                    type="submit"
                    class="fi-btn relative inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-70 dark:bg-primary-500 dark:hover:bg-primary-400"
                    wire:loading.attr="disabled"
                >
                    {{ $editingId ? 'Update' : 'Create' }} Announcement
                </button>
            </div>
        </form>
    </x-filament::section>
</x-filament-widgets::widget>
