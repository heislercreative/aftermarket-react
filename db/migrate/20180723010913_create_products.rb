class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :img_full
      t.string :img_thumbnail
      t.text :description
      t.integer :price
      t.boolean :free_shipping
      t.boolean :returns

      t.timestamps
    end
  end
end
