class QuestionsController < ApplicationController

	def show
		# find and return question based on id number provided
		# binding.pry
		question = Question.find(params[:id])
		render json: question
			# add options here to filter out unnessecary attributes
			# remove created and updated times
	end

	# private

	# def question_params
	# 	params.require(:question).permit(:id)
	# end

end
