class CharactersController < ApplicationController

	def index
		characters = Character.all
		render json: CharacterSerializer.new(characters).to_serialized_json
	end
	
	def create 
		character = Character.new
		character.name = params[:name]
		character.save
	end

	def show
		character = Character.find(params[:id])
		render json: CharacterSerializer.new(character).to_serialized_json
	end

end
