class ResponsesController < ApplicationController

	# def index
	# 	# add code to send back list of responses for user
	# end

	def create
		# Add code to create response and assign to user, saving question number 
		# byebug
		response = Response.new(response_params)

		# phrase = "phrase#{response.response}"
		response.character["trait#{response.question_id}"] = response.question["phrase#{response.response}"]
		
		if response.save
			# render json: response
			render json: ResponseSerializer.new(response).to_serialized_json
		else
			render json: response.errors, status: :unprocessable_entity
		end
	end

	private

	def response_params 
		params.require(:response).permit(:character_id, :question_id, :response)
	end
	

end
