class UsersController < ApplicationController

	def home
		@user = current_user
	end

	def search
		query = params[:q].to_s

		users = User.search(query)
		render :json => users.to_json		
	end

	def friends
		x = current_user.friends

		render :json => x.to_json
	end

end
