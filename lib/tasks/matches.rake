require 'rubygems'
require 'twilio-ruby'
 
# Get your Account Sid and Auth Token from twilio.com/user/account
account_sid = 'ACf2a92ef7eb689f3b18157adb7e6d0795'
auth_token = 'ef3a597812db185905327911f6048f6f'

# contactList = [
# 				"7632224628",
# 				"7873145590",
# 				"5165246421"
# 			]
						
namespace :hang do 
	desc "Text Matches"
	task :match => :environment do

		contactList = []
		User.all.each do |u|
			# s = Sentence.find_by_user_id(u.id)
			matches = Sentence.find_matches(u.id)
			matches.each do |m|
				contactList.push(m.phone)
			end
		end
		puts contactList
		return

		@client = Twilio::REST::Client.new account_sid, auth_token
		
		$i = 0
		$num = contactList.length

		
		begin	
			
			@client.account.messages.create({
				:body => "LET'S GOOOOOO",
				:to => contactList[$i],    # Replace with your phone number
				:from => "+17633332014"   # Replace with your Twilio number
			})
			
			$i += 1
			
			rescue Twilio::REST::RequestError => e
				puts e.message

		end while $i < $num
	end
end