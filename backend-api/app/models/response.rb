class Response < ApplicationRecord
	belongs_to :character
	belongs_to :question

	validates :character_id, :question_id, :response, presence: true
end
