desc "Called by the Heroku scheduler add-on to reset the demo"
task :reset_demo => :environment do
  puts "Cleaning Up The DB..."
  DatabaseCleaner.strategy = :truncation
  DatabaseCleaner.clean
  puts "Seeding the DB..."
  Rake::Task["db:seed"].invoke
  puts "Done!"
end
