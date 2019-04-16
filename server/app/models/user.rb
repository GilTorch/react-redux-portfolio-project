class User < ApplicationRecord
    has_secure_password
    
    validates :email,presence: true, uniqueness: true 
    validates :username,presence: true, uniqueness: true 
    validates :password,length:{ minimum: 8}, confirmation: { case_sensitive: true} 

    has_many :user_lessons 
    has_many :lessons, through: :user_lessons 
end
