class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :comment, :image_url
end
