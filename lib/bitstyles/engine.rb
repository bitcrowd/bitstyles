module Bitstyles
  class Engine < Rails::Engine

    initializer 'bitstyles.assets.precompile' do |app|
      app.config.assets.paths << root.join('assets').to_s
    end

  end
end
