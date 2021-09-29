class ResponseSerializer
	def initialize(response_object)
		@response = response_object
	end

	def to_serialized_json
		options = {
			include: {
				character: {
					except: [:created_at, :updated_at]}
			},
			except: [:updated_at, :created_at]
		}
		@response.to_json(options)
	end
end