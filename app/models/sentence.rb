class Sentence < ActiveRecord::Base

	def self.find_matches(user_id)
		x = User.find_by_id(user_id)
		if x == nil
			return []
		end
		friends = x.friends

		matches = []
		s = Sentence.find_by_user_id(x.id)
		friends.each do |f|
			fs = Sentence.find_by_user_id(f.id)
			if fs != nil
				if s.matches(fs)
					matches.push(f)
				end
			end
		end

		contactList = []
		name = x.name || x.email
		matches.each do |m|
			puts "MATCHED! ", m
			contactList.push(m.phone)
		end

		if contactList.count > 0
			puts "SENDING TEXTS TO ", contactList, name
			send_texts(contactList, name)
		end

		return matches
	end

	def self.send_texts(contactList, name)
		return;
		
		account_sid = 'ACf2a92ef7eb689f3b18157adb7e6d0795'
		auth_token = 'ef3a597812db185905327911f6048f6f'

		@client = Twilio::REST::Client.new account_sid, auth_token
		
		$i = 0
		$num = contactList.length

		begin
			body = name + " is down to Hang!"
			puts $i, body

			@client.account.messages.create({
				:body => body,
				:to => contactList[$i],    # Replace with your phone number
				:from => "+17633332014"   # Replace with your Twilio number
			})
			
			$i += 1
			
			rescue Twilio::REST::RequestError => e
				puts e.message

		end while $i < $num
	end

	def matches(s)
		a = self.start
		b = self.end
		c = s.start
		d = s.end

		if a <= c
			return c <= b
		else
			return a <= c
		end
	end

end
