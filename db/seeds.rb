# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
puts "Running Seed..."

Item.destroy_all

Item.create([
  {
    title: "Don't grow up",
    image_url: "http://farm8.staticflickr.com/7270/7128418333_2547935635_o.jpg",
    comment: "Growing old is mandatory, growing up is optional."
  },
  {
    title: "Don't worry",
    image_url: "http://upload.wikimedia.org/wikipedia/commons/8/8a/Bobby_McFerrin.jpg",
    comment: "In every life we have some trouble, But when you worry you make it double, Don't Worry, Be Happy..."
  },
  {
    title: "Don't be a dick",
    image_url: "http://farm8.staticflickr.com/7082/7169884786_8b0849de9e_b.jpg",
    comment: "Seriously, don't. Whatever your doing just think about it first. If theres a chance your being a dick then stop right away."
  }
])

puts "Put down that cocktail, I'm done!"
