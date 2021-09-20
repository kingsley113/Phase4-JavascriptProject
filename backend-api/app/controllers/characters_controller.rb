class CharactersController < ApplicationController

	def index
		# code for return list of all characters
		characters = Character.all
		render json: characters
		# add filters to this one to just show character name - break off to service class?
	end
	
	def create 
		# add code to create new character instance from name
		character = Character.new
		character.name = params[:name]
		character.save
	end

	def show
		# add code to show a character and thier responses
		character = Character.find(params[:id])
		render json: characters
		# break this off into service class
	end

end
