class Theme < ApplicationRecord::Base
  has_many :news, dependent: :destroy
  has_many :posts, dependent: :destroy
  belongs_to :group

  def self.pluck_fields
    [:id, :title]
  end
end
