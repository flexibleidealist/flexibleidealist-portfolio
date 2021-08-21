class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.string :repo_url
      t.string :deployed_url
      t.string :image_url

      t.timestamps
    end
  end
end
