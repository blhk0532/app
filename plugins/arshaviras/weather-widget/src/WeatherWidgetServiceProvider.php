<?php

namespace Arshaviras\WeatherWidget;

use BladeUI\Icons\Factory;
use Filament\Support\Assets\Css;
use Filament\Support\Facades\FilamentAsset;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class WeatherWidgetServiceProvider extends PackageServiceProvider
{
    public static string $name = 'weather-widget';

    public function configurePackage(Package $package): void
    {
        $package->name(static::$name)
            ->hasConfigFile()
            ->hasViews()
            ->hasTranslations();
    }

    public function registeringPackage(): void
    {
        $this->registerIcons();
    }

    protected function registerIcons(): void
    {
        $this->callAfterResolving(Factory::class, function (Factory $factory) {

            $iconSet = config('weather-widget.icon_set', 'line');
            $variant = config('weather-widget.icon_variant', 'static');

            // Build the path
            $weatherIconPath = match ($iconSet) {
                'fill', 'line' => __DIR__."/../resources/svg/weather-icons/{$iconSet}/svg".($variant === 'static' ? '-static' : ''),
                'monochrome' => __DIR__.'/../resources/svg/weather-icons/monochrome/svg-static',
                default => __DIR__.'/../resources/svg/weather-icons/line/svg-static',
            };

            // Weather icons
            $factory->add('weather', [
                'path' => $weatherIconPath,
                'prefix' => 'weather',
            ]);
        });
    }

    public function packageBooted(): void
    {
        // Asset Registration
        FilamentAsset::register(
            $this->getAssets(),
            $this->getAssetPackageName()
        );
    }

    protected function getAssetPackageName(): ?string
    {
        return 'arshaviras/weather-widget';
    }

    /**
     * @return array<Asset>
     */
    protected function getAssets(): array
    {
        return [
            Css::make('weather-widget', __DIR__.'/../resources/dist/weather-widget.css'),
        ];
    }
}
