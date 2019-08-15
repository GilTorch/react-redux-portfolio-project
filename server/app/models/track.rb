class Track < ApplicationRecord
    has_many  :courses 
    has_many  :chapters
    has_many  :lessons
    has_many  :user_tracks 
    has_many  :users, through: :user_tracks
    validates :title,presence: true,uniqueness: true
    validates :track_id,presence:true
    validates :description,presence: true
end
