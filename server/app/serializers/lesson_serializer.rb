class LessonSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
  belongs_to :track
  belongs_to :course 
  belongs_to :chapter
  has_many :user_lessons 
  has_many :users, through: :user_lessons 
end
