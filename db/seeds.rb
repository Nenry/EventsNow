# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


demo_user = User.create({email:"User@Demo.com", first_name: "Russell", last_name: "Disney", password: "password"})

Event.create({
  title: 'Blockchain and Cryptocurrency in Real Estate',
  body: 'We are pleased to announce that Natalia Karayaneva, founder and CEO of Propy and a frequent speaker at major tech events such as TechCrunch and Consensus will share her experience and view on how blockchain can elevate the global real estate industry.

WE WILL ANSWER ALL OF THE QUESTIONS BELOW, AND MORE!

What are Blockchains and Cryptocurrencies?
More importantly - how will they help you SELL?

Why should every real estate agent care about these technologies?
In what use cases within real estate are these technologies outshining the traditional ones?

Why is Asia a vital market when looking towards the future?
How can you tame that juggernaut (hint: it involves cryptocurrencies)?

What do you need to know about taxes and fees with regards to cryptocurrencies?

Speakers: 
Natalia Karayaneva - CEO, Propy

Alex Voloshyn - CTO, Propy

Kate Fomina - VP

Stu Bronstein - our in house lawyer

Refreshments and snacks are provided!',
  date: Date.new(2018, 11, 6),
  time_start: "5:00 PM",
  time_end: "8:00 PM",
  address: "555 Mission St",
  city: "San Francisco",
  state: "CA",
  host_id: 1,
  category_id: 2,
  tickets_left: 500,
  img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F45189173%2F250588563459%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C800%2C400&s=26199b7c7e95896e0b604ccc7c3721f6",
  price: 0

})