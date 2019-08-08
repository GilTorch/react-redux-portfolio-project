class CourseSerializer < ActiveModel::Serializer
    attributes :id, :title, :description
    has_many :chapters 
    has_many :lessons
    has_many :user_courses 
    has_many :users, through: :user_courses 
end
  