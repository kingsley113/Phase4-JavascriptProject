class CharactersController < ApplicationController

	def index
		characters = Character.all
		render json: CharactersSerializer.new(characters).to_serialized_json
	end
	
	def create 
		character = Character.new(character_params)
		if character.save
			render json: character
		else
			render json: character.errors, status: :unprocessable_entity 
		end
	end

	def show
		character = Character.find(params[:id])
		character.assignTraits
		render json: CharactersSerializer.new(character).to_serialized_json
	end

	private

	def character_params 
		params.require(:character).permit(:name)
	end

end
