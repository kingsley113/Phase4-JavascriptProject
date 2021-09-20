class Question < ApplicationRecord
	has_many :responses
	has_many :characters, through: :responses
end
