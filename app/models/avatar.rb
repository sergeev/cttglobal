class Avatar < ApplicationRecord::Base
belongs_to :user
mount_uploader :body, AvatarUploader

validates :body, file_size: { less_than: 2.megabytes },
                 file_content_type: { allow: ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'] }
end
