class CharactersController < ApplicationController

	def index
		# code for return list of all characters
		characters = Character.all
		render json: CharacterSerializer.new(characters).to_serialized_json
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
		render json: CharacterSerializer.new(character).to_serialized_json
	end

end
