#!/bin/bash

set -e

APP_DIR="/home/ubuntu/nordic"
PHP="/usr/bin/php8.4"

echo "======================================"
echo "Starting deployment..."
echo "======================================"

cd $APP_DIR

echo "Step 1: Pull latest code..."
git fetch origin
git reset --hard origin/main

$PHP artisan octane:status  || true
sudo $PHP supervisorctl status  || true

echo "Step 2: Enable maintenance mode..."
$PHP artisan down || true

echo "Step 3: Install Composer dependencies..."
composer install --no-interaction --prefer-dist --no-scripts --no-dev

echo "Step 4: Install frontend dependencies..."
pnpm install --frozen-lockfile

echo "Step 5: Build frontend assets..."
pnpm run build

echo "Step 6: Run migrations..."
$PHP artisan migrate --force

echo "Step 7: Clear and rebuild caches..."
php artisan optimize:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache
php artisan filament:optimize-clear
php artisan optimize
php artisan filament:optimize

echo "Step 8: Restart Horizon (graceful)..."
$PHP artisan horizon:terminate

echo "Step 9: Reload Octane..."
$PHP artisan octane:status
$PHP artisan octane:reload --no-interaction
sudo $PHP supervisorctl status
sudo $PHP supervisorctl restart all

echo "Step 10: Disable maintenance mode..."
$PHP artisan up
echo "======================================"
echo "Deployment complete. GG"
echo "======================================"
