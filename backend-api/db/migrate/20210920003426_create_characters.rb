class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
			t.string :trait1
			t.string :trait2
			t.string :trait3
			t.string :trait4
			t.string :trait5
			t.string :trait6

      t.timestamps
    end
  end
end
