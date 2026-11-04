#!/usr/bin/env sh

# abort on errors
set -e

# clean up previous
rm -rf dist

# build website
bun run build

# change to build directory
cd dist

# create .nojekyll file
touch .nojekyll

# git init
git init

# git remote (required for .gitconfig)
git remote add origin git@github.com:chora-studio/website.git

# git commit
git add -A
git commit -m 'publish'

# push to gh-pages branch
git push origin main:gh-pages -f

cd -
