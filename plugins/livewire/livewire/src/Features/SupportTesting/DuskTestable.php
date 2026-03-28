<?php

declare(strict_types=1);

namespace Livewire\Features\SupportTesting;

use Exception;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Route;
use Laravel\Dusk\Browser;
use Laravel\Dusk\Console\DuskCommand;
use Orchestra\Testbench\Dusk\Options;
use PHPUnit\Framework\TestCase;
use Psy\Shell;

use function Livewire\invade;
use function Livewire\on;

class DuskTestable
{
    public static $currentTestCase;

    public static $shortCircuitCreateCall = false;

    public static $isTestProcess = false;

    public static $browser;

    public static function provide()
    {
        Route::get('livewire-dusk/{component}', ShowDuskComponent::class)->middleware('web');

        on('browser.testCase.setUp', function ($testCase) {
            static::$currentTestCase = $testCase;
            static::$isTestProcess = true;

            $tweakApplication = $testCase::tweakApplicationHook();

            invade($testCase)->beforeServingApplication(function ($app, $config) use ($tweakApplication) {
                $config->set('app.debug', true);

                if (is_callable($tweakApplication)) {
                    $tweakApplication();
                }

                static::loadTestComponents();
            });
        });

        on('browser.testCase.tearDown', function () {
            static::wipeRuntimeComponentRegistration();

            static::$browser && static::$browser->quit();

            static::$currentTestCase = null;
        });

        if (isset($_SERVER['CI']) && class_exists(Options::class)) {
            Options::withoutUI();
        }

        Browser::mixin(new DuskBrowserMacros);
    }

    /**
     * @return Browser
     */
    public static function create($components, $params = [], $queryParams = [])
    {
        $components = is_array($components) ? $components : [$components];
        $firstComponent = array_shift($components);

        if (is_string($firstComponent) && ! class_exists($firstComponent)) {
            // Simple component name (eg. `counter`)
            $id = $firstComponent;
            $components = [$firstComponent, ...$components];
        } else {
            if (is_string($firstComponent)) {
                // Component class name (eg. `App\Livewire\Counter`)
                $className = $firstComponent;
            } else {
                // Anonymous class instance (eg. `new class extends Component {}`)
                // Remove the runtime '$123' suffix to make the class name stable
                $className = str()->beforeLast($firstComponent::class, '$');
            }

            // A string ID that can be used in the URL
            $id = 'a'.mb_substr(md5($className), 0, 8);
            $components = [$id => $firstComponent, ...$components];
        }

        return self::createBrowser($id, $components, $params, $queryParams)->visit('/livewire-dusk/'.$id.'?'.Arr::query($queryParams));
    }

    public static function createBrowser($id, $components, $params = [], $queryParams = [])
    {
        if (self::$shortCircuitCreateCall) {
            throw new class($components) extends Exception
            {
                public $components;

                public $isDuskShortcircuit = true;

                public function __construct($components)
                {
                    $this->components = $components;
                }
            };
        }

        [$class, $method] = self::findTestClassAndMethodThatCalledThis();

        self::registerComponentsForNextTest([$id, $class, $method]);

        $testCase = invade(self::$currentTestCase);

        return self::$browser = $testCase->newBrowser($testCase->createWebDriver());
    }

    public static function actingAs(Authenticatable $user, $driver = null)
    {
        //
    }

    public static function findTestClassAndMethodThatCalledThis()
    {
        $traces = debug_backtrace(options: DEBUG_BACKTRACE_IGNORE_ARGS, limit: 10);

        foreach ($traces as $trace) {
            if (is_subclass_of($trace['class'], TestCase::class)) {
                return [$trace['class'], $trace['function']];
            }
        }

        throw new Exception;
    }

    public static function loadTestComponents()
    {
        if (self::$isTestProcess) {
            return;
        }

        $tmp = __DIR__.'/_runtime_components.json';

        if (file_exists($tmp)) {
            // We can't just "require" this file because of race conditions...
            [$id, $testClass, $method] = json_decode(file_get_contents($tmp), associative: true);

            if (! method_exists($testClass, $method)) {
                return;
            }

            self::$shortCircuitCreateCall = true;

            $components = null;

            try {
                if (\Orchestra\Testbench\phpunit_version_compare('10.0', '>=')) {
                    (new $testClass($method))->$method();
                } else {
                    (new $testClass)->$method();
                }
            } catch (Exception $e) {
                if (! $e->isDuskShortcircuit) {
                    throw $e;
                }
                $components = $e->components;
            }

            self::$shortCircuitCreateCall = false;

            foreach ($components as $name => $class) {
                if (is_object($class)) {
                    $class = $class::class;
                }

                if (is_numeric($name)) {
                    app('livewire')->component($class);
                } else {
                    app('livewire')->component($name, $class);
                }
            }
        }
    }

    public static function registerComponentsForNextTest($components)
    {
        $tmp = __DIR__.'/_runtime_components.json';

        file_put_contents($tmp, json_encode($components, JSON_PRETTY_PRINT));
    }

    public static function wipeRuntimeComponentRegistration()
    {
        $tmp = __DIR__.'/_runtime_components.json';

        file_exists($tmp) && unlink($tmp);
    }

    public function breakIntoATinkerShell($browsers, $e)
    {
        $sh = new Shell;

        $sh->add(new DuskCommand($this, $e));

        $sh->setScopeVariables([
            'browsers' => $browsers,
        ]);

        $sh->addInput('dusk');

        $sh->setBoundObject($this);

        $sh->run();

        return $sh->getScopeVariables(false);
    }
}
