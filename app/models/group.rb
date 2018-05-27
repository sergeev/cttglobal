class Group < ApplicationRecord::Base
  has_many :news, ->{order(:id)}, dependent: :destroy
  has_many :news, through: :themes, dependent: :destroy
  has_many :posts, through: :topics, dependent: :destroy

  def self.pluck_fields
    ["groups.id", "groups.title", "themes.id", "themes.title",
    "themes.posts_count", "themes.topics_count", "themes.last_post"]
  end
end
