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
		friends = Friend.where("a_id = ? OR b_id = ?", self.id, self.id)
		return friends
	end


end
