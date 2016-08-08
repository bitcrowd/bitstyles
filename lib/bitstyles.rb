require "bitstyles/version"
require "bitstyles/engine"

bitstyles_path = File.expand_path("../../bitstyles/", __FILE__)
ENV["SASS_PATH"] = [
  ENV["SASS_PATH"],
  bitstyles_path,
].compact.join(File::PATH_SEPARATOR)
