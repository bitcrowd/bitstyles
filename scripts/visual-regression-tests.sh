#!/bin/sh

set -o nounset
trap cleanup 1 2 15

cleanup() {
  rm -rf "$temp_folder"
}

kill_children() {
  local pid=$1

  # kill its children
  for child in $(pgrep -P "$pid"); do
    kill_children "$child"
  done

  # kill it
  if [ "$pid" != $$ ]; then
    kill -0 "$pid" && kill "$pid"
  fi
}

temp_folder="./.test"
git_url="https://github.com/bitcrowd/bitstyles.git"
cache_file="../test/backstop_data/.cache"
styleguide_startup_delay=8

# Checkout master from GitHub
mkdir $temp_folder
git clone $git_url $temp_folder
cd $temp_folder || exit 1
git checkout master
master_revision=$(git rev-parse master)

echo "Master revision: $master_revision"
echo "Cached revision: $(cat $cache_file)"
# If there’s no local copy of reference images, or if they’re from an older
# version of master, we generate new reference images
if [ ! -f $cache_file ] || [ "$master_revision" != "$(cat $cache_file)" ]; then
  echo "Generating reference images"
  yarn

  npm run styleguide &
  styleguide_PID=$!
  sleep $styleguide_startup_delay
  npm run test:build

  # Copy the new reference images up into the current branch
  cp -r ./test/backstop_data/bitmaps_reference ../test/backstop_data/
  echo "$master_revision" > $cache_file

  kill_children $styleguide_PID
fi

cd ../ || exit 1

echo "Generating comparison images"
npm run styleguide &
styleguide_PID=$!
sleep $styleguide_startup_delay
npm run test:compare
compare_result=$?

kill_children $styleguide_PID
cleanup
exit $compare_result
