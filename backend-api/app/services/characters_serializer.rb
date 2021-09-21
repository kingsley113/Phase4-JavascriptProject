class CharactersSerializer
	def initialize(character_object)
		@character = character_object
	end

	def to_serialized_json
		options = {
			include: {
				responses: {:only => [:response, :question_id]},
			},
			except: [:updated_at, :created_at]
		}
	@character.to_json(options)
	end
end