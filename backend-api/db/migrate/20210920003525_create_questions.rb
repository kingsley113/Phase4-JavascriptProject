class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.text :question
      t.text :answer1
      t.text :answer2
      t.text :answer3
      t.text :answer4
      t.text :answer5
      t.text :answer6

			t.text :phrase1
			t.text :phrase2
			t.text :phrase3
			t.text :phrase4
			t.text :phrase5
			t.text :phrase6
			
      t.timestamps
    end
  end
end
