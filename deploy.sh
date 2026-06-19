#!/bin/bash
set -e

echo "Building..."
npm run build

echo "Replacing site files..."
find . -mindepth 1 -maxdepth 1 ! -name '.git' ! -name 'src' ! -name 'public' ! -name 'node_modules' ! -name 'package.json' ! -name 'package-lock.json' ! -name '.gitignore' ! -name 'deploy.sh' ! -name 'build' -exec rm -rf {} +
cp -r build/. .
rm -rf build

echo "Committing and pushing..."
git add -A
git commit -m "Deploy $(date '+%Y-%m-%d %H:%M')"
git push origin master

echo "Done. Live at https://jjeon02.github.io"
