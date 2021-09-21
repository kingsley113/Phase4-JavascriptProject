class CharactersController < ApplicationController

	def index
		characters = Character.all
		render json: CharactersSerializer.new(characters).to_serialized_json
		# render json: characters
	end
	
	def create 
		character = Character.new(character_params)
		# character.name = params[:name]
		if character.save
			render json: character, status: :created
		else
			render json: character.errors, status: :unprocessable_entity 
		end
	end

	def show
		character = Character.find(params[:id])
		render json: CharactersSerializer.new(character).to_serialized_json
	end

	private

	def character_params 
		params.require(:book).permit(:name)
	end

end
