# EventsNow

## What is it?
EventsNow is a full stack web application inspired by Eventbrite.com.
This application will allow users to create events with a ticketing system. The following technologies were used to create this application: Ruby on Rails, PostgreSQL, Redux, and React.

https://eventsnow.herokuapp.com/#/

## Back-end
The back-end of this application was created with Ruby on Rails and PostgreSQL.
AJAX requests are used to send data from the back-end to the front-end and permit only provided methods.

Ruby on rails allows an implementation that will prevent Cross-Site-Request-Forgery (CSRF) attack. In addition, an another security layer using BCrypt was added for the user's accounts. The database never stores a user's raw password. The passwords are highly encrypted through hashing and salting. Even I cannot decrypt what your raw password is.

## Front-end
EventsNow front-end is written with the latest technology of React, Redux and Javascript. With the use of these technologies, it allows a smooth, lag-free functionality. The reason being is that it can fetch data in the backend while the user is using the website and will load without refreshing the page. In relation, React allows the page to only load/render what is necessary to reload on the page. This greatly reduces performance times and does not stop the user's interaction.


## Categories
One of my features that I admire is my category/tags function. It is incorporated through the home page, event showing as a interactive link that will show all events relating to that category.

React-Modal


Talk about implementing
Add rich text editor
Google map API
Search Bar
Ticketing Tiers

Input changing code
React-modal
