class User < ActiveRecord::Base
	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, :registerable,
	     :recoverable, :rememberable, :trackable, :validatable


	def self.search(query)
		if query != nil
			name = User.where("UPPER(name) LIKE UPPER(?) OR "+\
				"UPPER(email) LIKE UPPER(?) OR phone LIKE ?", 
				"%#{query}%", "%#{query}%", "%#{query}%")
			return name
		end
		return []
	end

	def friends
		friends = []
		pairs = Friend.where("a_id = ? OR b_id = ?", self.id, self.id)
		pairs.each do |p|
			if self.id == p.a_id
				f = User.find_by_id(p.b_id)
				if f != nil
					friends.push(f)
				end
			else
				f = User.find_by_id(p.a_id)
				if f != nil
					friends.push(f)
				end
			end
		end
		return friends
	end


end
