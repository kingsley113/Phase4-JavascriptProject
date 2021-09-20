class QuestionsController < ApplicationController

	def show
		# find and return question based on id number provided
		question = Question.find(params[:id])
		render json: question
			# add options here to filter out unnessecary attributes
	end
end
