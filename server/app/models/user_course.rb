class UserCourse < ApplicationRecord
    validates  :user_id,presence: true 
    validates  :lesson_id,presence: true 
    belongs_to :user 
    belongs_to :course
end
