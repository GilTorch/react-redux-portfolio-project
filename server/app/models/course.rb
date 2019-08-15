class Course < ApplicationRecord
    validates  :title,presence: true,uniqueness: true 
    validates  :description, presence: true 
    validates  :track_id,presence: true
    belongs_to :track
    has_many   :chapters
    has_many   :lessons
    has_many   :user_courses 
    has_many   :users, through: :user_courses
end
