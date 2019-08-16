class Chapter < ApplicationRecord
    validates  :title,presence: true,uniqueness: true 
    validates  :track_id, presence: true
    validates  :course_id, presence: true 
    belongs_to :track
    belongs_to :course 
    has_many   :lessons
    has_many   :user_chapters 
    has_many   :users, through: :user_chapters
end
