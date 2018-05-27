class Post < ApplicationRecord::Base
  belongs_to :news, :counter_cache => true
  belongs_to :theme, :counter_cache => true
  belongs_to :user, :counter_cache => true

  validates :content, presence: true, length: { in: 2..300 }

  after_create :set_last_post

  private
    def set_last_post
      last_post = self.as_json(include: [:news, :user])
      topic.update(last_post: last_post)
      theme.update(last_post: last_post)
    end
end
