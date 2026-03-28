#!/bin/bash

set -e

echo "=========================================="
echo "🚀 Starting Deployment"
echo "=========================================="

cd /var/www/ubuntu/app

echo ""
echo "📦 Pulling latest changes..."
git pull origin $(git branch --show-current)

echo ""
echo "🧹 Clearing caches..."
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear
php artisan event:clear

echo ""
echo "📜 Running migrations..."
php artisan migrate --force

echo ""
echo "📦 Installing Composer dependencies..."
composer install --no-interaction --prefer-dist --optimize-autoloader

echo ""
echo "🎨 Building assets..."
npm ci
npm run build

echo ""
echo "🔄 Restarting Octane Roadrunner..."
sudo pkill -9 -f "roadrunner-worker" || true
sleep 2
php artisan octane:start --port=8000 > /tmp/octane.log 2>&1 &
sleep 4

echo ""
echo "🔄 Restarting Horizon..."
php artisan horizon:terminate
php artisan horizon

echo ""
echo "✅ Deployment Complete!"
echo "=========================================="

# Quick health check
if curl -sf --max-time 5 https://nordicdigitalthailand.com > /dev/null; then
    echo "✅ Site is responding"
else
    echo "⚠️  Site may not be responding - check logs"
fi
