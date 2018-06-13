# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# db:reset to reset the id numbers 
# yr, month, date
Event.destroy_all
User.destroy_all
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
  category: "Other",
  total_tickets: 500,
  img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F45189173%2F250588563459%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C800%2C400&s=26199b7c7e95896e0b604ccc7c3721f6",
  price: 0

})


Event.create({
  title: "DocuSign Momentum Hackathon 2018",
  body: "Do you have what it takes to code groundbreaking eSignature implementations with the leading eSignature brand, DocuSign?

Do you like creating with peers, learning from experts and winning prizes?

Do you like amazing food, and snacking?

Then we have the event for you!

At the 2018 DocuSign Momentum Hackathon in San Francisco, developers will be creating groundbreaking eSignature implementations and competing for a number of prizes, including $10,000+ in cash. This event is sponsored by Salesforce and Google Cloud.

We'll have mentors onsite from DocuSign, Salesforce and Google Cloud to help with your projects!

WHAT: 2018 Momentum Hackathon

WHERE: Galvanize, San Francisco

WHEN: The Momentum Hackathon is split into two separate days! (No overnight hacking at venue)

9AM - 11PM June 9th

9 AM - 4 PM June 10th

HOW: Ready to start hacking?? REGISTER Here!",
  date: Date.new(2018, 6, 9),
  address: "44 Tehama Street",
  city: "San Francisco",
  state: "CA",
  host_id: 1,
  category: "Other",
  total_tickets: 256,
  img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F44460600%2F252434965428%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C690%2C345&s=535b5433b749f9d854681ab19a6229dd",
  price: 0,
  time_start: "9:00 AM",
  time_end: "4:00 PM"

})

Event.create({
  title: 'Speed Networking with Recruiters: Network your way into a Job @Google, SF',
  body: 'Inorder to attend this event you need to purchase tickets before entering the Google campus at 345 Spear Street. There will be no ticket sales at the venue.
  Are you looking for a job or looking to transition into a new career?

  Would you like to get tips and advice to help you land your dream job?

  Join us for our Speed Networking/Mentoring event where you will get face time and job search advice from recruiters, hiring managers and career counselors.

  The evening will start with lightning talks by each recruiter followed by the speed networking.

  Jobseekers will then meet recruiters, hiring managers and career counselors in a group mentoring format, asking questions and advice about your job search and making valuable connections. The groups will switch every 10 minutes.

  This event is open to women and men of all professional backgrounds.



  RECRUITERS

  Ellen Heirbaut, Lead Technical Recruiter at Yelp

  Olivia Bair, Director of Global HR at Instapage

  Amanda Crosby-Rickman, Technical Recruiting Consultant at Envoy, Inc

  Gianni Longmire, Sr. Technical Recruiter at Turo

  Mariana Bernasconi, Recruiting Manager Technology at Robert Half Technology



  Rest of RECRUITERS TBA



  AGENDA

  6:00-6:30pm - Registration and Networking

  6:30-7:00pm - Introductions and Presentations

  7:00-8:30pm - Speed Networking with Recruiters

  8:30-9:00pm- Networking Contd.



  Thank you to our venue Sponsors

  Google Launchpad




  JOIN OUR COMMUNITY

  Get updates about our events, community and more by joining The Expat Woman FB page, and signing up for our newsletter.

  For job announcements and career tips or to post jobs or share your LinkedIn profile, join our Careers and JobSearch FB page.

  To connect with other expat women, join The Expat Woman Club FB group.

  If you are interested in participating as a panelist, speaker or mentor at our events, please apply here.



  PARTNER WITH US

  If you would like to host or sponsor an event, promote your brand, product or service online or at an event, or recruit from our network of talented and diverse professionals, e-mail us at info@theexpatwoman.com.



  TERMS OF PARTICIPATION AGREEMENT

  You agree that you are responsible for any accidents or damages that you cause. You also agree to not hold The Expat Woman, or any of the event supporters liable for any loss, damage, injury, or any other unforeseeable incident.

  You agree The Expat Woman, is not responsible for circumstances that may necessitate for substitutions or cancellations of speakers.

  By Participating in the event, you grant The Expat Woman permission to capture photo/video of the event.

  By registering for this event, you also consent to receive email communication from The Expat Woman and its programs about events and updates that may interest you.

  Tickets for this event are non-refundable. If you are unable to attend, you have the option of giving it to a friend or team member to attend in your place.',
  date: Date.new(2018, 6, 21),
  address: "345 Spear Street",
  city: "San Francisco",
  state: "CA",
  host_id: 1,
  category: "Other",
  total_tickets: 3,
  img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F44241255%2F9608873553%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C0%2C708%2C354&s=b380bc279e020b856235910e8ca0f22e",
  price: 15,
  time_start: "6:00 PM",
  time_end: "9:00 PM"

})

# $.ajax({
#   method: 'PATCH',
#   url: '/api/events/',
#   data: {event: {id: 9, title: "chillerester", body: "even more chill", date: "2018-11-06",
#   address: "345 Spear Street",
#   city: "San Francisco",
#   state: "CA",
#   host_id: 4,
#   category: "Other",
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