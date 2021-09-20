class ResponsesController < ApplicationController

	# def index
	# 	# add code to send back list of responses for user
	# end

	def create
		# Add code to create response and assign to user, saving question number 
		response = Response.new
		response.character_id = params[:character_id]
		response.question_id = params[:question_id]
		response.response = params[:response]
		response.save
	end
end
