# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# db:reset to reset the id numbers
# yr, month, date


User.destroy_all
Event.destroy_all
Category.destroy_all
Bookmark.destroy_all
Ticket.destroy_all



Category.create({title: 'Select a category'})
Category.create({title: 'Music'})
Category.create({title: 'Food & Drinks'})
Category.create({title: 'Classes'})
Category.create({title: 'Arts'})
Category.create({title: 'Parties'})
Category.create({title: 'Sport & Wellness'})
Category.create({title: 'Networking'})





# Category.create({title: 'Select a category'})
# Category.create({title: 'Auto, Boat & Air'})
# Category.create({title: 'Business'})
# Category.create({title: 'Charity Causes'})
# Category.create({title: 'Community & Culture'})
# Category.create({title: 'Family & Education'})
# Category.create({title: 'Fashion & Beauty'})
# Category.create({title: 'Film, Media & Entertainment'})
# Category.create({title: 'Food & Drink'})
# Category.create({title: 'Government & Politics'})
# Category.create({title: 'Health & Wellness'})
# Category.create({title: 'Hobbies & Special Interest'})
# Category.create({title: 'Home & Lifestyle'})
# Category.create({title: 'Music'})
# Category.create({title: 'Other'})
# Category.create({title: 'Performing & Visual Arts'})
# Category.create({title: 'Religion & Spirituality'})
# Category.create({title: 'School Activities'})
# Category.create({title: 'Science & Technology'})
# Category.create({title: 'Seasonal & Holiday'})
# Category.create({title: 'Sport & Fitness'})

admin = User.create({email:"admin", first_name: "Russell", last_name: "Disney", password: "abc123"})
demo_user = User.create({email:"User@Demo.com", first_name: "Russell", last_name: "Disney", password: "password"})

# Event.create({
#   title: 'Blockchain and Cryptocurrency in Real Estate',
#   body: 'We are pleased to announce that Natalia Karayaneva, founder and CEO of Propy and a frequent speaker at major tech events such as TechCrunch and Consensus will share her experience and view on how blockchain can elevate the global real estate industry.

# WE WILL ANSWER ALL OF THE QUESTIONS BELOW, AND MORE!

# What are Blockchains and Cryptocurrencies?
# More importantly - how will they help you SELL?

# Why should every real estate agent care about these technologies?
# In what use cases within real estate are these technologies outshining the traditional ones?

# Why is Asia a vital market when looking towards the future?
# How can you tame that juggernaut (hint: it involves cryptocurrencies)?

# What do you need to know about taxes and fees with regards to cryptocurrencies?

# Speakers:
# Natalia Karayaneva - CEO, Propy

# Alex Voloshyn - CTO, Propy

# Kate Fomina - VP

# Stu Bronstein - our in house lawyer

# Refreshments and snacks are provided!',
#   date: Date.new(2018, 11, 6),
#   time_start: "5:00 PM",
#   time_end: "8:00 PM",
#   address: "555 Mission St",
#   city: "San Francisco",
#   state: "CA",
#   host_id: 1,
#   category_id: "5",
#   total_tickets: 500,
#   img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F45189173%2F250588563459%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C800%2C400&s=26199b7c7e95896e0b604ccc7c3721f6",
#   price: 0

# })


# Event.create({
#   title: "DocuSign Momentum Hackathon 2018",
#   body: "Do you have what it takes to code groundbreaking eSignature implementations with the leading eSignature brand, DocuSign?

# Do you like creating with peers, learning from experts and winning prizes?

# Do you like amazing food, and snacking?

# Then we have the event for you!

# At the 2018 DocuSign Momentum Hackathon in San Francisco, developers will be creating groundbreaking eSignature implementations and competing for a number of prizes, including $10,000+ in cash. This event is sponsored by Salesforce and Google Cloud.

# We'll have mentors onsite from DocuSign, Salesforce and Google Cloud to help with your projects!

# WHAT: 2018 Momentum Hackathon

# WHERE: Galvanize, San Francisco

# WHEN: The Momentum Hackathon is split into two separate days! (No overnight hacking at venue)

# 9AM - 11PM June 9th

# 9 AM - 4 PM June 10th

# HOW: Ready to start hacking?? REGISTER Here!",
#   date: Date.new(2018, 6, 30),
#   address: "44 Tehama Street",
#   city: "San Francisco",
#   state: "CA",
#   host_id: 1,
#   category_id: "1",
#   total_tickets: 256,
#   img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F44460600%2F252434965428%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C690%2C345&s=535b5433b749f9d854681ab19a6229dd",
#   price: 0,
#   time_start: "9:00 AM",
#   time_end: "4:00 PM"

# })

# Event.create({
#   title: 'Speed Networking with Recruiters: Network your way into a Job @Google, SF',
#   body: 'Inorder to attend this event you need to purchase tickets before entering the Google campus at 345 Spear Street. There will be no ticket sales at the venue.
#   Are you looking for a job or looking to transition into a new career?

#   Would you like to get tips and advice to help you land your dream job?

#   Join us for our Speed Networking/Mentoring event where you will get face time and job search advice from recruiters, hiring managers and career counselors.

#   The evening will start with lightning talks by each recruiter followed by the speed networking.

#   Jobseekers will then meet recruiters, hiring managers and career counselors in a group mentoring format, asking questions and advice about your job search and making valuable connections. The groups will switch every 10 minutes.

#   This event is open to women and men of all professional backgrounds.



#   RECRUITERS

#   Ellen Heirbaut, Lead Technical Recruiter at Yelp

#   Olivia Bair, Director of Global HR at Instapage

#   Amanda Crosby-Rickman, Technical Recruiting Consultant at Envoy, Inc

#   Gianni Longmire, Sr. Technical Recruiter at Turo

#   Mariana Bernasconi, Recruiting Manager Technology at Robert Half Technology



#   Rest of RECRUITERS TBA



#   AGENDA

#   6:00-6:30pm - Registration and Networking

#   6:30-7:00pm - Introductions and Presentations

#   7:00-8:30pm - Speed Networking with Recruiters

#   8:30-9:00pm- Networking Contd.



#   Thank you to our venue Sponsors

#   Google Launchpad




#   JOIN OUR COMMUNITY

#   Get updates about our events, community and more by joining The Expat Woman FB page, and signing up for our newsletter.

#   For job announcements and career tips or to post jobs or share your LinkedIn profile, join our Careers and JobSearch FB page.

#   To connect with other expat women, join The Expat Woman Club FB group.

#   If you are interested in participating as a panelist, speaker or mentor at our events, please apply here.



#   PARTNER WITH US

#   If you would like to host or sponsor an event, promote your brand, product or service online or at an event, or recruit from our network of talented and diverse professionals, e-mail us at info@theexpatwoman.com.



#   TERMS OF PARTICIPATION AGREEMENT

#   You agree that you are responsible for any accidents or damages that you cause. You also agree to not hold The Expat Woman, or any of the event supporters liable for any loss, damage, injury, or any other unforeseeable incident.

#   You agree The Expat Woman, is not responsible for circumstances that may necessitate for substitutions or cancellations of speakers.

#   By Participating in the event, you grant The Expat Woman permission to capture photo/video of the event.

#   By registering for this event, you also consent to receive email communication from The Expat Woman and its programs about events and updates that may interest you.

#   Tickets for this event are non-refundable. If you are unable to attend, you have the option of giving it to a friend or team member to attend in your place.',
#   date: Date.new(2018, 6, 21),
#   address: "345 Spear Street",
#   city: "San Francisco",
#   state: "CA",
#   host_id: 1,
#   category_id: 2,
#   total_tickets: 3,
#   img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F44241255%2F9608873553%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C708%2C354&s=b380bc279e020b856235910e8ca0f22e",
#   price: 15,
#   time_start: "6:00 PM",
#   time_end: "9:00 PM"

# })




Event.create({
  title: "Meet workers that work too much",
  body: "As the title says. Are you a worker that works too much? We're the same way. Let's all meet up and destress. Many times you will find great tips to get through the week!",
  date: Date.new(2018, 7, 4),
  address: "7389 Workers Lane",
  city: "San Francisco",
  state: "CA",
  host_id: 1,
  category_id: 8,
  total_tickets: 50,
  img_url: "https://c1.staticflickr.com/2/1738/27934962597_0ba26b0e57_b.jpg",
  price: 0,
  time_start: "1:00 PM",
  time_end: "9:00 PM"

})


Event.create({
  title: "Entrepreneurs That Read",
  body: "Are you an entrepreneur? Do you read? Come and meet like minded people. We can discuss anythng you want, but I am sure we'll end up talking about starting something new",
  date: Date.new(2018, 8, 20),
  address: "347 Startup Way",
  city: "San Jose",
  state: "CA",
  host_id: 1,
  category_id: 8,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1757/28930404688_054aa848c6_c.jpg",
  price: 50,
  time_start: "6:00 AM",
  time_end: "9:00 AM"

})



Event.create({
  title: "Great People Around A Camp Fire",
  body: "We're great people. If you're a great person then please join us around this great campfire. Smore equipment will be provided",
  date: Date.new(2018, 8, 10),
  address: "Grand Canyon National Park",
  city: "Shabooya",
  state: "AZ",
  host_id: 1,
  category_id: 8,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1731/27934962277_b10fc66679_c.jpg",
  price: 2,
  time_start: "8:00 PM",
  time_end: "10:00 PM"

})



Event.create({
  title: "Socialize Under The Night Sky",
  body: "It's summer time! Let's enjoy this nice weather while meeting great people. Drinks and snacks will be provided",
  date: Date.new(2018, 6, 30),
  address: "Point Lobos Avenue, Great Highway",
  city: "San Francisco",
  state: "CA",
  host_id: 1,
  category_id: 8,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1742/42086557404_b14908997e_c.jpg",
  price: 5,
  time_start: "8:45 PM",
  time_end: "10: 00 PM"

})



Event.create({
  title: "Doggy Destress!",
  body: "Stressing out? Come play with our many puppies. They are all very friendly and would love to help you destress!",
  date: Date.new(2018, 6, 30),
  address: "Central Park",
  city: "Santa Clara",
  state: "CA",
  host_id: 1,
  category_id: 7,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1748/28930404468_b4736e9248_c.jpg",
  price: 0,
  time_start: "3:30 PM",
  time_end: "5:30 PM"

})




Event.create({
  title: "Inner Peace",
  body: "Are you frantic and always stressing? Learn to find your inner piece and escape away from the madness. Come and we will teach you.",
  date: Date.new(2018, 9, 7),
  address: "Peace Lake",
  city: "Inner Peace",
  state: "CA",
  host_id: 1,
  category_id: 7,
  total_tickets: 200,
  img_url: "https://c1.staticflickr.com/2/1729/42086556434_34b474da3a_c.jpg",
  price: 0,
  time_start: "12:00 AM",
  time_end: "11:59 PM"

})



Event.create({
  title: "Check Your Health Before You Wreck Yourself!",
  body: "Come in for a free health check up. Provided by the best health professionals in the world. If you need major health services, please refer to the hospital or we can also refer you.",
  date: Date.new(2018, 10, 12),
  address: "1349 Main St.",
  city: "Sunnyvale",
  state: "CA",
  host_id: 1,
  category_id: 7,
  total_tickets: 200,
  img_url: "https://c1.staticflickr.com/2/1760/28930404028_95c5eeccce_b.jpg",
  price: 0,
  time_start: "9:00 AM",
  time_end: "6:00 PM"

})
Event.create({
  title: "Annual City Wide Run",
  body: "It's that time of the year!!! The Annual City Wide Marathon has arrived! Are you marathon ready? If not, it is time to start now! There will be a half or full marathon option for registration. Fastest runner will receive a mystery surprise supplied by our city's greatest company.",
  date: Date.new(2018, 11, 24),
  address: "City Hall",
  city: "San Francisco",
  state: "CA",
  host_id: 1,
  category_id: 7,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1756/28930403918_0543ed66a1_c.jpg",
  price: 300,
  time_start: "6:00 AM",
  time_end: "9:00 AM"

})
Event.create({
  title: "Muay Thai Convention",
  body: "The greatest muay thai fighters have come straight from Thailand to display muay thai. This convention will explain the sport and true meaning of muay thai in Thailand. There will be many freebies and gear to purchase. Come and don't miss this event!",
  date: Date.new(2018, 6, 30),
  address: "Santa Clara Convention Center",
  city: "San Jose",
  state: "CA ",
  host_id: 1,
  category_id: 7,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1740/27934960567_44527f2bc2_c.jpg",
  price: 55,
  time_start: "10:00 AM",
  time_end: "2:00 PM"

})
Event.create({
  title: "Christmas Party",
  body: "It'sssssssss time to PARTY! Christmas morning theme and wear your favorite comfortable Christmas clothes! Food and drinks provided!",
  date: Date.new(2018, 12, 23),
  address: "TBA",
  city: "Cupertino",
  state: "CA",
  host_id: 1,
  category_id: 6,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/1/880/42086555364_2b83038c85_c.jpg",
  price: 60,
  time_start: "8:30 PM",
  time_end: "11:30 PM"

})
Event.create({
  title: "Disco Party",
  body: "You heard it. It's time to get down and get groovy like the 1970s.",
  date: Date.new(2018, 6, 30),
  address: "Huge Warehouse",
  city: "Los Angeles",
  state: "CA",
  host_id: 1,
  category_id: 6,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1753/28930403658_10f86555c3_b.jpg",
  price: 34,
  time_start: "7:00 PM",
  time_end: "11:00 PM"

})
Event.create({
  title: "New Year's After Party",
  body: "Let's start off the year right. GO BIG OR GO BIGGER HERE! Champagne will be provided!",
  date: Date.new(2018, 12, 31),
  address: "Great Lounge",
  city: "San Francisco",
  state: "CA",
  host_id: 1,
  category_id: 6,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1735/27934960317_f3d65ac041_b.jpg",
  price: 150,
  time_start: "12:30 AM",
  time_end: "4:30 AM"

})
Event.create({
  title: "Art Of Breakdance",
  body: "You've always seen in the streets. How did it get started? Why do people do it? We will explain and teach the underground culture of breakdancing.",
  date: Date.new(2018, 6, 30),
  address: "Community Center",
  city: "Palo Alto",
  state: "CA",
  host_id: 1,
  category_id: 5,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1750/28930403158_5a183579fb_c.jpg",
  price: 0,
  time_start: "5:30 PM",
  time_end: "9:30 PM"

})





Event.create({
  title: "Art Sale",
  body: "All of these arts have been made by Artrulo Leegit. All of the art is on sale with prices varying from $5 to $1000. Feel free to come and just take a look. No pressure in buying!",
  date: Date.new(2019, 2, 25),
  address: "Art Gallery",
  city: "Santa Clara",
  state: "CA",
  host_id: 1,
  category_id: 5,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1721/42086555164_2f31b2787c_c.jpg",
  price: 0,
  time_start: "3:00 PM",
  time_end: "7:00 PM"

})
Event.create({
  title: "The Art Of Looking at Art",
  body: "Ever wondered how some pieces of art look like a dot, but people will pay loads of money? We will teach you what you're actually missing. Come and use these techniques to appreciate beautiful arts. You can also use these techniques to find hidden gems at thrift stores!",
  date: Date.new(2019, 3, 20),
  address: "SOMA Art Gallery",
  city: "San Francisco",
  state: "CA",
  host_id: 1,
  category_id: 5,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1727/42086554484_f3775a37bc_b.jpg",
  price: 30,
  time_start: "2:30 PM",
  time_end: "4:00 PM"

})

Event.create({
  title: "Natural Photography Class",
  body: "Do you love nature? Do you love how that particular view looked at the time? Want to make sure you capture the moment exactly as you see it? We will teach you exactly like that",
  date: Date.new(2018, 6, 30),
  address: "Natural Bridges State Park",
  city: "Santa Cruz",
  state: "CA",
  host_id: 1,
  category_id: 4,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1721/42086554024_c925234d8d_c.jpg",
  price: 50,
  time_start: "3:30 PM",
  time_end: "5:30 PM"
})
Event.create({
  title: "Kids Learn To Be Artists",
  body: "Is your child passionate about drawing or coloring? We will teach them the basics and advanced techniques to improve their current skills. We are friendly, courteous and patient.",
  date: Date.new(2018, 6, 30),
  address: "YAC Community Center",
  city: "Santa Clara",
  state: "CA",
  host_id: 1,
  category_id: 4,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1757/27934959207_d79217b816_c.jpg",
  price: 2,
  time_start: "1:30 PM",
  time_end: "4:30 PM"
})
Event.create({
  title: "Cooking Right At Camping",
  body: "Most of the time I tell people I've had my best food when camping. They call me crazy, but I think it's because they don't know how to use their surroundings. I will teach you how to teach cook like a pro while you're camping.",
  date: Date.new(2018, 6, 30),
  address: "Henry Coe Park",
  city: "Morgan Hill",
  state: "CA",
  host_id: 1,
  category_id: 4,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1755/28930402228_ab830844c5_c.jpg",
  price: 35,
  time_start: "4:30 PM",
  time_end: "8:30 PM"
})
Event.create({
  title: "Artisan Drinks",
  body: "Where the greatest bartender makes you the fanciest of drinks. Drinks you have never tried. You will be mind blown at the creations of these drinks",
  date: Date.new(2018, 6, 30),
  address: "2730 Manhattan",
  city: "New York",
  state: "New York",
  host_id: 1,
  category_id: 3,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1745/28930401828_d84927bda9.jpg",
  price: 56,
  time_start: "9:30 PM",
  time_end: "11:30 PM"
})
Event.create({
  title: "Tasty Water",
  body: "Are you tired of just regular water? Come try our customized fruity waters that will blow your mind. Even if you love regular water, see what you can do with it!",
  date: Date.new(2018, 6, 30),
  address: "Japan Town",
  city: "San Jose",
  state: "CA",
  host_id: 1,
  category_id: 3,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/1/900/27934958017_2b9e30b8dc_c.jpg",
  price: 3,
  time_start: "8:30 AM",
  time_end: "4:30 PM"
})
Event.create({
  title: "Potstickers and Dim Sum More!",
  body: "Are you a fan of potstickers, dumplings, and dim sum? This is the event for you. Chefs flown from Asia just to put on this event. You will learn the techniques and the culture behind these various foods.",
  date: Date.new(2018, 6, 30),
  address: "Santa Clara Fairgrounds",
  city: "Santa Clara",
  state: "CA",
  host_id: 1,
  category_id: 3,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1726/41903545355_d108edf845_c.jpg",
  price: 45,
  time_start: "10:30 AM",
  time_end: "5:30 PM"
})
Event.create({
  title: "Record Timing for Music!",
  body: "Come to Tony's Records. There is a huge sale and we have a few surprise celebrities coming. We have all the records. If we don't then we will find it for you!",
  date: Date.new(2018, 6, 30),
  address: "483 Franklin St.",
  city: "Oakland",
  state: "CA",
  host_id: 1,
  category_id: 2,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/1/879/28930399298_f7149277ca_c.jpg",
  price: 0,
  time_start: "8:00 AM",
  time_end: "9:00 PM"
})
Event.create({
  title: "Joey Feelsgood Live Piano Concert",
  body: "Joey Feelsgood is finally coming to the San Francisco Bay Area! Here him on his piano live at the best venue ever for acoustics! 1014 Folsom",
  date: Date.new(2018, 6, 30),
  address: "1014 Folsom Ave",
  city: "San Francisco",
  state: "CA",
  host_id: 1,
  category_id: 2,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1744/41903543125_66881e5899_c.jpg",
  price: 47,
  time_start: "9:30 PM",
  time_end: "11:30 PM"
})
Event.create({
  title: "Famous Local DJs Concert",
  body: "San Francisco Bay Area's native DJs are playing at this event! They all have been through auditions and we made sure to only provide the best. Plus, there are a few big names that you probably didn't know were natives. Do not miss out!!",
  date: Date.new(2018, 6, 30),
  address: "Jill Graham",
  city: "San Francisco",
  state: "CA",
  host_id: 1,
  category_id: 2,
  total_tickets: 256,
  img_url: "https://c1.staticflickr.com/2/1735/28930398308_02de3aba25_c.jpg",
  price: 62,
  time_start: "6:30 PM",
  time_end: "11:30 PM"
})


# Event.create({
#   title: "",
#   body: "",
#   date: Date.new(2018, 6, 30),
#   address: "",
#   city: "",
#   state: "",
#   host_id: 1,
#   category_id: 5,
#   total_tickets: 256,
#   img_url: "",
#   price: 0,
#   time_start: "",
#   time_end: ""
# })
# })
# Event.create({
#   title: "",
#   body: "",
#   date: Date.new(2018, 6, 30),
#   address: "",
#   city: "",
#   state: "",
#   host_id: 1,
#   category_id: 5,
#   total_tickets: 256,
#   img_url: "https://c1.staticflickr.com/2/1750/28930403158_5a183579fb_c.jpg",
#   price: 0,
#   time_start: "",
#   time_end: ""

# })
# Event.create({
#   title: "",
#   body: "",
#   date: Date.new(2018, 6, 30),
#   address: "",
#   city: "",
#   state: "",
#   host_id: 1,
#   category_id: 5,
#   total_tickets: 256,
#   img_url: "https://c1.staticflickr.com/2/1750/28930403158_5a183579fb_c.jpg",
#   price: 0,
#   time_start: "",
#   time_end: ""

# })
# Event.create({
#   title: "",
#   body: "",
#   date: Date.new(2018, 6, 30),
#   address: "",
#   city: "",
#   state: "",
#   host_id: 1,
#   category_id: 5,
#   total_tickets: 256,
#   img_url: "https://c1.staticflickr.com/2/1750/28930403158_5a183579fb_c.jpg",
#   price: 0,
#   time_start: "",
#   time_end: ""

# })
# Event.create({
#   title: "",
#   body: "",
#   date: Date.new(2018, 6, 30),
#   address: "",
#   city: "",
#   state: "",
#   host_id: 1,
#   category_id: 5,
#   total_tickets: 256,
#   img_url: "https://c1.staticflickr.com/2/1750/28930403158_5a183579fb_c.jpg",
#   price: 0,
#   time_start: "",
#   time_end: ""

# })
# Event.create({
#   title: "",
#   body: "",
#   date: Date.new(2018, 6, 30),
#   address: "",
#   city: "",
#   state: "",
#   host_id: 1,
#   category_id: 5,
#   total_tickets: 256,
#   img_url: "https://c1.staticflickr.com/2/1750/28930403158_5a183579fb_c.jpg",
#   price: 0,
#   time_start: "",
#   time_end: ""

# })


# $.ajax({
#   method: 'PATCH',
#   url: '/api/events/',
#   data: {event: {id: 9, title: "chillerester", body: "even more chill", date: "2018-11-06",
#   address: "345 Spear Street",
#   city: "San Francisco",
#   state: "CA",
#   host_id: 4,
#   category_id: 5,
#   total_tickets: 3,
#   img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F44241255%2F9608873553%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C708%2C354&s=b380bc279e020b856235910e8ca0f22e",
#   price: 15,
#   time_start: "6:00 PM",
#   time_end: "9:00 PM"} }
# })

# $.ajax({
#   method: 'DELETE',
#   url: '/api/events/5'
# })
