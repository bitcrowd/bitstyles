#!/bin/sh

set -o errexit -o nounset

temp_folder="./.test"
git_url="https://github.com/bitcrowd/bitstyles.git"

# Checkout master from GitHub
mkdir $temp_folder
git clone $git_url $temp_folder
cd $temp_folder
git checkout master
phantomjs --version
yarn

# Generate reference images
npm run styleguide &
sleep 10
npm run test:build
echo `ps aux | grep '[s]tyleguide'`
kill $(ps aux | grep '[s]tyleguide' | awk '{print $2}')

# copy then delete the new reference images
cp -r ./test/backstop_data/bitmaps_reference/ ../test/backstop_data/bitmaps_reference/
cd ../
rm -rf $temp_folder

# Generate test images
npm run styleguide &
sleep 10
npm run test:compare
echo `ps aux | grep '[s]tyleguide'`
kill $(ps aux | grep '[s]tyleguide' | awk '{print $2}')
