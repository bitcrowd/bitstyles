#!/bin/sh

cleanup() {
  rm -rf $temp_folder
}

set -o errexit -o nounset
trap cleanup 1 2 15

temp_folder="./.test"
git_url="https://github.com/bitcrowd/bitstyles.git"
cache_file="../test/backstop_data/.cache"

# Checkout master from GitHub
mkdir $temp_folder
git clone $git_url $temp_folder
cd $temp_folder
git checkout master
master_revision=`git rev-parse master`

# If there’s no local copy of reference images, or if they’re from an older
# version of master, we generate new reference images
if [ ! -f $cache_file ] || [ $master_revision != $(<$cache_file) ]; then
  yarn

  # Generate reference images
  npm run styleguide &
  sleep 10
  npm run test:build
  kill $(ps aux | grep '[s]tyleguide' | awk '{print $2}')

  # Copy the new reference images up into the current branch, then delete these
  cp -r ./test/backstop_data/bitmaps_reference/ ../test/backstop_data/bitmaps_reference/
  echo $master_revision > $cache_file
fi

cd ../

# Generate test images
npm run styleguide &
sleep 10
npm run test:compare
kill $(ps aux | grep '[s]tyleguide' | awk '{print $2}')

cleanup
