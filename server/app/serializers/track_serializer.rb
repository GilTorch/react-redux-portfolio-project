class TrackSerializer < ActiveModel::Serializer
    attributes :id, :title, :description, :created_at, :updated_at
    has_many   :courses
    has_many   :chapters 
    has_many   :lessons
    has_many   :user_tracks 
    has_many   :users, through: :user_tracks 
end
  