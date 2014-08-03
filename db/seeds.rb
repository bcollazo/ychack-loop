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
	:password_confirmation => "password", :image_url => "dalton.png")
User.create(:name => "Graham Turk", :phone => "5165246421", :email => "gturk@mit.edu", :password => "password",
	:password_confirmation => "password")
User.create(:name => "Mike Pruszinske", :phone => "7632224628", :email => "mikep@iastate.edu", :password => "password",
	:password_confirmation => "password", :image_url => "mikep.png")
# User.create(:name => "Nicholas Reed", :phone => "7873145590", :email => "nreed@mit.edu", :password => "password",
# 	:password_confirmation => "password")

User.create(:name => "Dillon Chesky", :phone => "7873145590", :email => "dchesky@test.me", :password => "password", :password_confirmation => "password", :image_url => "dillan.png")
User.create(:name => "Sarah Turk", :phone => "7873145590", :email => "sturk@test.me", :password => "password", :password_confirmation => "password", :image_url => "sarah.png")
# User.create(:name => "Dalton Rayhons", :phone => "7873145590", :email => "drayhons@test.me", :password => "password", :password_confirmation => "password", :image_url => "dalton.png")
User.create(:name => "Sean Hanson", :phone => "7873145590", :email => "shanson@test.me", :password => "password", :password_confirmation => "password", :image_url => "sean.png")
User.create(:name => "Morgan Steel", :phone => "7873145590", :email => "msteel@test.me", :password => "password", :password_confirmation => "password", :image_url => "morgan.png")
User.create(:name => "Phil Robinson", :phone => "7873145590", :email => "probinson@test.me", :password => "password", :password_confirmation => "password", :image_url => "phil.png")
User.create(:name => "Joe Gunther", :phone => "7873145590", :email => "jgunther@test.me", :password => "password", :password_confirmation => "password", :image_url => "joe.png")
User.create(:name => "Sam Jones", :phone => "7873145590", :email => "sjones@test.me", :password => "password", :password_confirmation => "password", :image_url => "sam.png")