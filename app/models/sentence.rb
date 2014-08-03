class Sentence < ActiveRecord::Base

	def self.find_matches(user_id)
		x = User.find_by_id(user_id)
		if x == nil
			return nil
		end
		friends = x.friends



		matches = []
		# For each friend, check their sentence if any.  Check if match, add to matches
		puts friends
		puts "Matching"
		return matches
	end

end
