class CharactersSerializer
	def initialize(character_object)
		@character = character_object
	end

	def to_serialized_json
		@character.to_json(
		# add json filters here
		include: {
			name:,
			responses: {
				only: [:response, :question_id]
			},
			except: [:updated_at, :created_at]
		}
		)
	end
	
end