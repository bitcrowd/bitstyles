# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'bitstyles/version'

Gem::Specification.new do |spec|
  spec.name          = "bitstyles"
  spec.version       = Bitstyles::VERSION
  spec.authors       = ["Darren Cadwallader", "Charlie Owen"]
  spec.email         = ["info@bitcrowd.net"]

  spec.summary       = %q{The CSS library of Bitcrowd GmbH.}
  spec.homepage      = "https://github.com/bitcrowd/bitstyles"
  spec.license       = "ISC"

  if spec.respond_to?(:metadata)
    spec.metadata['allowed_push_host'] = "https://rubygems.org"
  else
    raise "RubyGems 2.0 or newer is required to protect against public gem pushes."
  end

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features|styleguide|scripts|build)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
