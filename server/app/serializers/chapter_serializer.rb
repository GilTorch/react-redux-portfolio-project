class ChapterSerializer < ActiveModel::Serializer
    attributes :id, :title, :created_at, :updated_at
    belongs_to :track 
    belongs_to :course
    has_many   :lessons
    has_many   :user_chapters
    has_many   :users, through: :user_chapters 
end
  