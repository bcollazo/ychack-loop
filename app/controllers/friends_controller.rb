class FriendsController < ApplicationController

	def send_request
		requestee_id = params[:requestee_id]

		x = FriendRequest.find_by_requestor_id_and_requestee_id(current_user.id, requestee_id)
		if x == nil
			x = FriendRequest.create(:requestor_id => current_user.id,
				:requestee_id => requestee_id)
			render :json => x.to_json
		else
			render :nothing => true
		end
	end

	def accept
		requestee_id = params[:requestee_id]

		x = FriendRequest.find_by_requestor_id_and_requestee_id(current_user.id, requestee_id)
		if x != nil
			x.delete
			x = Friend.create(:a_id => current_user.id, :b_id => requestee_id)
			render :json => x.to_json
		end
	end


end
