class Group < ApplicationRecord::Base
  has_many :news, ->{order(:id)}, dependent: :destroy
  has_many :news, through: :themes, dependent: :destroy
  has_many :posts, through: :topics, dependent: :destroy
end
