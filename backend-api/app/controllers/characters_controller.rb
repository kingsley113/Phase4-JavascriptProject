class CharactersController < ApplicationController

	def index
		characters = Character.all
		render json: CharactersSerializer.new(characters).to_serialized_json
		# render json: characters
	end
	
	def create 
		character = Character.new
		character.name = params[:name]
		character.save
		redirect_to character 
		# fix this part TODO:
	end

	def show
		character = Character.find(params[:id])
		render json: CharactersSerializer.new(character).to_serialized_json
	end

end
