class Lesson < ApplicationRecord
    validates  :title,presence: true,length:{ minimum: 10},uniqueness: true
    validates  :content,presence: true,length:{ minimum: 100}
    validates  :track_id,presence: true 
    validates  :course_id,presence: true 
    validates  :chapter_id,presence: true
    belongs_to :track
    belongs_to :course 
    belongs_to :chapter
    has_many   :user_lessons 
    has_many   :users, through: :user_lessons 
end
