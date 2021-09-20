class CreateRameRounds < ActiveRecord::Migration[6.1]
  def change
    create_table :rame_rounds do |t|
      t.integer :character_id
      t.integer :question1resp
      t.integer :question2resp
      t.integer :question3resp
      t.integer :question4resp
      t.integer :question5resp
      t.integer :question6resp
      t.integer :score

      t.timestamps
    end
  end
end
