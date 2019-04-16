class Lesson < ApplicationRecord
    validates :title,presence: true,length:{ minimum: 10}
    validates :content,presence: true,length:{ minimum: 100}
    has_many :user_lessons 
    has_many :users, through: :user_lessons 
end
