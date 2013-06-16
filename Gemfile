source 'https://rubygems.org'

ruby '2.0.0'

gem 'rails', '3.2.13'
gem 'rails-api'
gem 'thin'
gem 'active_model_serializers', :github => 'rails-api/active_model_serializers'
gem 'newrelic_rpm'

group :development, :test do
  gem 'debugger'
  gem 'sqlite3'
end

group :production do
  gem 'pg'
end

group :assets do
  gem 'sass-rails', '~> 3.2'
  gem 'coffee-rails', '~> 3.2'
  gem 'uglifier'
  gem 'handlebars_assets', '~> 0.12.1'
end

group :development do
  gem 'quiet_assets'
end
