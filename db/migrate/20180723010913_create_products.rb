class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :img_full
      t.string :img_thumbnail
      t.text :description
      t.integer :price
      t.boolean :free_shipping
      t.boolean :sold_out

      t.timestamps
    end
  end
end
