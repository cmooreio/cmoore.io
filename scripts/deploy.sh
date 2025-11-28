#!/bin/bash
# Deploy cmoore.io site to dist branch
# Usage: ./scripts/deploy.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"
DIST_WORKTREE="/tmp/cmoore-io-dist"

cd "$REPO_DIR"

# Export git commit hash for build
export VITE_GIT_COMMIT=$(git rev-parse --short HEAD)
echo "Building site (commit: $VITE_GIT_COMMIT)..."
npm run build

echo "Setting up dist worktree..."
if [ -d "$DIST_WORKTREE" ]; then
    cd "$DIST_WORKTREE"
    git pull origin dist
else
    git worktree add "$DIST_WORKTREE" dist
fi

echo "Copying build output..."
rm -rf "$DIST_WORKTREE"/*
cp -r "$REPO_DIR/.vitepress/dist/"* "$DIST_WORKTREE/"

echo "Committing and pushing..."
cd "$DIST_WORKTREE"
git add -A

if git diff --cached --quiet; then
    echo "No changes to deploy"
else
    git commit -m "deploy: built site"
    git push origin dist
    echo "Deployed successfully!"
fi

echo "Site will update within 60 seconds (git-sync interval)"
