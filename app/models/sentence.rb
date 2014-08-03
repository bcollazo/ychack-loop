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

		return matches
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
