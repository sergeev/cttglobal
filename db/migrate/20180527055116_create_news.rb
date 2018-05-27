class CreateNews < ActiveRecord::Migration[5.1]
  # rake db:migrate RAILS_ENV=development
  # комбинации на управление миграцией
  # rake db:create
  # rake db:migrate
  # удаление старой таблицы и добавление новой
  # rake db:migrate:redo VERSION=20180527055116
  def change
    create_table :news do |t|
      t.string :title
      t.text   :content

      t.integer :user_id
      t.index   :user_id

      t.integer :news_id
      t.index   :news_id

      t.integer :content_id
      t.index   :content_id

      t.boolean :delta, default: true

      t.timestamps
    end
  end
end
