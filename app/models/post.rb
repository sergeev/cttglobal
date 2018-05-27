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

    def self.pluck_fields
      ["posts.id", "posts.title", "posts.content", "users.id", "users.created_at", "users.name",
       "users.rating", "users.posts_count", "users.avatar_url", "topics.id", "topics.title"]
    end

    def self.look_for query
      return self if query.blank? or query.length < 3
      search_ids = self.search_for_ids(query, {per_page: 1000000, order: 'created_at DESC'})
      self.where(id: search_ids)
    end

  private
    def set_last_post
      last_post = self.as_json(include: [:topic, :user])
      topic.update(last_post: last_post)
      theme.update(last_post: last_post)
    end
end
