task :herokudb do
  exec 'heroku pg:reset DATABASE --confirm aftermarket-vintage && heroku run rake db:migrate && heroku run rake db:seed'
end
