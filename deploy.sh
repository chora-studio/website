#!/usr/bin/env sh

# abort on errors
set -e

# clean up previous
rm -rf dist

# build website
bun run build

# change to build directory
cd dist

# git init
git init

# git remote (required for .gitconfig)
git remote add origin git@codeberg.org:chora-studio/website.git

# git commit
git add -A
git commit -m 'publish'

# push to pages branch
git push origin main:pages -f

cd -
