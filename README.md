# EventsNow

## What is it?
EventsNow is a full stack web application inspired by Eventbrite.com.
This application will allow users to create events with a ticketing system. The following technologies were used to create this application: `Ruby on Rails`, `PostgreSQL`, `Redux`, `JQuery`, `Javascript` and `React`.

https://eventsnow.herokuapp.com/#/


![Home page view ](https://github.com/Nenry/EventsNow/blob/master/Wireframes/images/eventsnow_homepage.png?raw=true)

## Back-end
The back-end of this application was created with Ruby on Rails, Jbuilder, and PostgreSQL.
AJAX requests are used to send data from the back-end to the front-end and permit only provided methods.

Ruby on rails allows an implementation that will prevent Cross-Site-Request-Forgery (CSRF) attack. In addition, an another security layer using `BCrypt` was added for the user's accounts. The database never stores a user's raw password. The passwords are highly encrypted through hashing and salting. Even I cannot decrypt what your raw password is.

## Front-end
EventsNow front-end is written with the latest technology of `React`, `Redux` and `Javascript`. With the use of these technologies, it allows a smooth, lag-free functionality. The reason being is that it can fetch data in the backend while the user is using the website and will load without refreshing the page. In relation, `React` allows the page to only load/render what is necessary to reload on the page. This greatly reduces performance times and does not stop the user's interaction.


## Categories
One of my features that I admire is my category/tags function. It is incorporated through the home page, event showing as a interactive link that will show all events relating to that category. The biggest obstacle was to make it dynamic in various places and reveal the associating events with that location. The biggest obstacle was plan how to get the correlations between bookmarks and the events. I had to reconfigure my back-end, which consisted of the database tables and id number associations. After that, it was possible to pull all the data and show the events that correlated to each category. Also, I am very proud of my `CSS` skills on displaying the categories.

![Categories](https://github.com/Nenry/EventsNow/blob/master/Wireframes/images/eventsnow_categories.png?raw=true)




## Bookmarking
One of my other features that I admire is my Bookmarking feature. It was difficult to get the all the associations to work since it was very user specific to their own bookmark of the event. The biggest obstacle to to make a dynamic button of it being `unbookmarked` or ready to be bookmarked. I resolved this by fetching the current user's bookmarks and identifying if the current event I.D was included on that `bookmark`. Simple yet difficult approach. A code snippet below to render the changing `bookmark` button.


```javascript
<div className='show-bar'>
               {this.props.session.id === this.props.event.host_id ? <Link to={`/events/${this.props.event.id}/edit`} className="show-bar-button">Edit</Link> : <div></div>}
               {this.props.session.id === this.props.event.host_id ? <button onClick={(e) => this.handleDelete(e)} className="show-bar-button">Delete</button> : <div></div>}

               {this.bookmarked() ?

                 <button onClick={() => this.props.deleteBookmark(this.bookmarked())} className="show-bar-button">Unbookmark</button>
                 :
                 <button onClick={() => this.handleBookmark()} className="show-bar-button">Bookmark</button>
               }
             </div>
```

# Future implementations
### Google maps integration
A current feature on Eventbrite is that you are able to search for events by locations. This is very convenient and feature I will implement next.

### Search bar
Upon utilizing the Google maps, the search bar should be able search for locations and keywords. A very must to have a better user experience.

### Ticketing analytics
Another feature to be added is more ticketing analysis for the event creators. This will bring more hosts to continue to use the site and see which events were a big hit.
