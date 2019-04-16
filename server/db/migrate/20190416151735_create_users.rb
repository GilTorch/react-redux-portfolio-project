class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :profile_url
      t.boolean :admin, :default => false
      t.string :password_digest

      t.timestamps
    end
  end
end
