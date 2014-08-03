class UsersController < ApplicationController

	def home
		@friends = current_user.friends
		
		@users = []
		all_users = User.where("id != ?", current_user.id)
		all_users.each do |u|
			if !@friends.include?u
				@users.push(u)
			end
		end

		@requestors = current_user.requests
	end

	def search
		query = params[:q].to_s

		users = User.search(query)
		render :json => users.to_json		
	end

	def invite
		@friends = current_user.friends
	end

	def matched
		@matches = Sentence.find_matches(current_user.id)
	end

	def friends
		x = current_user.friends

		render :json => x.to_json
	end

end
