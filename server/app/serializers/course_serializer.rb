class CourseSerializer < ActiveModel::Serializer
    attributes :id, :title, :description, :created_at, :updated_at
    belongs_to :track
    has_many   :chapters 
    has_many   :lessons
    has_many   :user_courses 
    has_many   :users, through: :user_courses 
end
  