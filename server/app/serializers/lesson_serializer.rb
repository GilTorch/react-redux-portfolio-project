class LessonSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
  has_many :user_lessons 
  has_many :users, through: :user_lessons 
end
