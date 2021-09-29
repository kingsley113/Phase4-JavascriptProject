class ResponsesController < ApplicationController

	def create
		# Add code to create response and assign to user, saving question number 
		response = Response.new(response_params)

		response.character["trait#{response.question_id}"] = response.question["phrase#{response.response}"]
		
		if response.save
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
