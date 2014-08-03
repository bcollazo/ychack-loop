class Sentence < ActiveRecord::Base

	def self.find_matches(user_id)
		friends = Friends.where("a_id = ? OR b_id = ?", [user_id, user_id])

		matches = []
		# For each friend, check their sentence if any.  Check if match, add to matches
		puts friends
		puts "Matching"
		return matches
	end

end
