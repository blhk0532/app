<div {{ $attributes->style([
    Illuminate\Support\Arr::toCssStyles([
        \Filament\Support\get_color_css_variables(
            $color,
            shades: [200, 400, 700, 900],
        ),
    ]),
])->merge(['title' => $title]) }}>
    <div class="absolute -left-[calc(28px+10px+13px)] top-4 flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-white text-custom-700 isolate">
        @svg($icon, 'size-5')
    </div>
</div>
