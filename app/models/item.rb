class Item < ActiveRecord::Base
  attr_accessible :id, :title, :comment, :image_url
end
