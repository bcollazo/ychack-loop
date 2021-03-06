class SentencesController < ApplicationController

	def create
		# TODO: add authorization
		args = parse_args(params)
		if args == nil
			render :json => "Bad Request".to_json
			return
		end

		puts "+===============+"
		puts "start", args[:start]
		puts "end", args[:end]
		puts "location", args[:location]
		puts "categories", args[:categories]
		puts "invitees", args[:invitees]

		# Right now we only support one sentence in flight
		x = Sentence.find_by_user_id(current_user.id)
		if x != nil
			x.delete
		end

		x = Sentence.create(:user_id => current_user.id,
			:start => args[:start],
			:end => args[:end],
			:duration => args[:duration],
			:location => args[:location],
			:categories => args[:categories],
			:invitees => args[:invitees])

		render :json => x.to_json
	end

	@@categories = ["HANG", "CHILL", "GRAB A COFFEE"]

	private
	def parse_args(params)
		puts params
		start = params[:start]
		if start != nil || start != ""
			start = DateTime.parse(start)
		else
			start = DateTime.now
		end

		duration = params[:duration]
		if duration != nil && params[:duration].to_i != 0
			duration = params[:duration].to_i * 3600
		else
			duration = 2.hours
		end
		end_time = (start.to_time + duration).to_datetime

		location = params[:location].to_s || ""

		categories = params[:categories].to_s
		categories.split(",").each do |cat|
			if !@@categories.include?cat
				return nil
			end
		end

		invitees = params[:invitees].to_s || "EVERYONE"

		return {:start => start, :end => end_time, :location => location,
			:categories => categories, :duration => duration, :invitees => invitees}
	end

end
