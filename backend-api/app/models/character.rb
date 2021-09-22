class Character < ApplicationRecord
	has_many :responses
	has_many :questions, through: :responses

	validates :name, presence: true

	def assignTraits
		self.responses.each_with_index do |response, i|
			phrase = response.question["phrase#{response.response}"]
			self["trait#{i + 1}"] = phrase
		end
		self.save
	end
end
