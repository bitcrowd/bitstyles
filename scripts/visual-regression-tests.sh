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
  echo "Generating reference images"
  yarn

  npm run styleguide &
  styleguide_PGID=$( ps -o pgid "$!" | grep [0-9] | tr -d ' ' )
  sleep 10
  npm run test:build
  echo "styleguide pgid: $styleguide_PGID"
  kill -TERM -- -$styleguide_PGID

  # Copy the new reference images up into the current branch
  ls ../test/backstop_data/bitmaps_reference/
  cp -r ./test/backstop_data/bitmaps_reference/ ../test/backstop_data/bitmaps_reference/
  echo $master_revision > $cache_file
fi

cd ../

echo "Generating comparison images"
npm run styleguide &
styleguide_PGID=$( ps -o pgid "$!" | grep [0-9] | tr -d ' ' )
sleep 10
npm run test:compare
kill -TERM -- -$styleguide_PGID

cleanup
