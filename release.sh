#!/bin/bash -e

TYPE=$1

if [ -z "$TYPE" ]; then
    echo "Usage: $0 <type>"
    echo "type: major, minor, patch"
    exit 1
fi

# Tag release
npm version $TYPE

# Build source
npm run build

# Publish to npm
npm publish

# Push to GitHub
git push origin main
git push --tags