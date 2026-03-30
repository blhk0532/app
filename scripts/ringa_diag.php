<?php

use Illuminate\Contracts\Console\Kernel;
use Illuminate\Support\Facades\DB;

require __DIR__.'/../vendor/autoload.php';
$app = require __DIR__.'/../bootstrap/app.php';
$kernel = $app->make(Kernel::class);
$kernel->bootstrap();

$now = now();
$max = DB::table('outcome_settings')->where('is_active', true)->max('max_retry_count') ?? 3;
$rows = DB::table('ringa_data')->where('team_id', 2)->where('user_id', 2)->orderBy('id')->limit(50)->get();

if ($rows->isEmpty()) {
    echo "No rows found for team_id=2,user_id=2\n";
    exit;
}

foreach ($rows as $r) {
    $fails = [];
    if (! $r->is_active) {
        $fails[] = 'inactive';
    }
    if (strtotime($r->started_at) > strtotime($now)) {
        $fails[] = 'not_started';
    }
    if ($r->available_at && strtotime($r->available_at) > strtotime($now)) {
        $fails[] = 'not_available';
    }
    if ($r->attempts >= $max) {
        $fails[] = 'attempts_exceeded';
    }
    if ($r->outcome && ! in_array($r->outcome, ['Ej Framkopplad', 'Inget Svar', 'Upptagen', 'Telefonsvar'])) {
        $fails[] = 'outcome_excluded';
    }
    if ($r->outcome_category && ! in_array($r->outcome_category, ['Later', 'Return', 'Maybe', 'Retry'])) {
        $fails[] = 'outcome_cat_excluded';
    }
    if (count($fails)) {
        echo $r->id.': '.implode(',', $fails).PHP_EOL;
    }
}
