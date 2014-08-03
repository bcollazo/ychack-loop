# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.create(:name => "Bryan Collazo", :phone => "7873145590", :email => "bcollazo@mit.edu", :password => "password",
	:password_confirmation => "password")
User.create(:name => "Dalton Viggers", :phone => "5159747923", :email => "dalton.viggers@yahoo.com", :password => "password",
	:password_confirmation => "password")
# TODO: NICE DATA
User.create(:name => "Graham Turk", :phone => "5165246421", :email => "gturk@mit.edu", :password => "password",
	:password_confirmation => "password")
User.create(:name => "Mike Pruszinske", :phone => "7632224628", :email => "mikep@iastate.edu", :password => "password",
	:password_confirmation => "password")
User.create(:name => "Nicholas Reed", :phone => "7873145590", :email => "nreed@mit.edu", :password => "password",
	:password_confirmation => "password")