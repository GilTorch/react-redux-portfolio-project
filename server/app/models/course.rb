class Course < ApplicationRecord
    belongs_to :track
    has_many   :chapters
    has_many   :lessons
    has_many   :user_courses 
    has_many   :users, through: :user_courses
end
