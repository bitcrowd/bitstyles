#!/bin/sh

cleanup() {
  rm -rf "$temp_folder"
}

set -o nounset
trap cleanup 1 2 15

temp_folder="./.test"
git_url="https://github.com/bitcrowd/bitstyles.git"
cache_file="../test/backstop_data/.cache"
styleguide_startup_delay=5

# Checkout master from GitHub
mkdir $temp_folder
git clone $git_url $temp_folder
cd $temp_folder || exit 1
git checkout master
master_revision=$(git rev-parse master)

# If there’s no local copy of reference images, or if they’re from an older
# version of master, we generate new reference images
if [ ! -f $cache_file ] || [ $master_revision != "$(<$cache_file)" ]; then
  echo "Generating reference images"
  yarn

  npm run styleguide &
  styleguide_PID=$!
  styleguide_PGID=$( ps -o pgid "$styleguide_PID" | grep "[0-9]" | tr -d ' ' )
  sleep $styleguide_startup_delay
  npm run test:build
  kill -15 "$styleguide_PID"
  kill -0 "-$styleguide_PGID" && kill -15 "-$styleguide_PGID"

  # Copy the new reference images up into the current branch
  cp -r ./test/backstop_data/bitmaps_reference ../test/backstop_data/
  echo "$master_revision" > $cache_file
fi

cd ../ || exit 1

echo "Generating comparison images"
npm run styleguide &
styleguide_PID=$!
styleguide_PGID=$( ps -o pgid "$styleguide_PID" | grep "[0-9]" | tr -d ' ' )
sleep $styleguide_startup_delay
npm run test:compare
kill -15 "$styleguide_PID"
kill -0 -"$styleguide_PGID" && kill -15 -"$styleguide_PGID"

cleanup
