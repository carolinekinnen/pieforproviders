# frozen_string_literal: true

task prep: :environment do
  exec "yarn lint:fix &&
        yarn test-once &&
        bundle exec rails erd annotate_models annotate_routes &&
        bundle exec rubocop -a &&
        bundle exec rspec &&
        bundle exec rails db:migrate:with_data &&
        COVERAGE=false bundle exec rails rswag &&
        yarn cy:ci"
end
