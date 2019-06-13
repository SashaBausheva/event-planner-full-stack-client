# Event Planner
## A Single-Page Application Project by Sasha Bausheva (Front-end Client)
Is your company looking for a convenient way to schedule their events? This simple Event Planner allows users, when signed up and signed in with their credentials, to create, update, and delete events in the database. The in-built authentication system allows users (as well as non-signed in individuals) to view all events while only being allowed to change their own events (created by them). You also only can create new events when you are signed in. This functionality is perfect for creating and maintaining a dynamic database of events available to everyone to view but only accessible to edit to authenticated and authorized users.

## Visit the site
Check out the Event Planner here: https://sashabausheva.github.io/event-planner-full-stack-client.

## Other Links:
- Back-end Repository: https://github.com/sashabausheva/event-planner-full-stack-api
- Deployed API: https://secure-earth-84078.herokuapp.com

## Technologies Used:
- JavaScript & jQuery
- Ruby on Rails
- PostgresSQL
- Handlebars
- CSS/SASS
- Bootstrap
- HTML
- AJAX
- GitHub
- Git

## User Stories
As a user, I want to be able to sign up.
As a user, I want to be able to sign in with my credentials.
As a user, I want to be able to change my password.
As a user, I want to be able to sign out.
As a user, I want to access all events regardless of whether I am signed in.
As a user, I want to be able to create new events when signed in.
As a user, I want to be able to edit/update my events when signed in.
As a user, I want to be able to delete my events when signed in.
As a user, I want to receive appropriate feedback after each action's success or failure.

## Planning & Development
While creating and developing my application, I focused on following the steps below:

- Set up the initial (Events) table via Ruby on Rails
- Deploy server application on Heroku
- Set up the initial API requests for events (GET, POST, PATCH, DELETE) and test their functionality
- Begin the initial front-end design and functionality skeleton
- Implement handlebars for displaying data (handlebars template for each event in the table)
- Test functionality of the authentication system and the connection between user authorization and the ability to create, update, and delete events
- Add feedback messages for each action's success and failure
- De-bug and refactor
- Set up another table (Locations) via Ruby on Rails and connect it to Events (one-to-many relationship)
- Set up basic API requests for locations (GET and POST)
- Render the data from the API GET request for locations on the front end
- Connect the API POST request for locations to the front end via forms and handlebars
- De-bug and refactor, and add styling to the client

## Wireframes and Entity Relationship Diagrams
[Initial Wireframes and Entity Relationship Diagrams](https://github.com/SashaBausheva/event-planner-full-stack-api/tree/master/public/images/wireframes)

## Unsolved Problems / Future Development Plans
- I would like to add another resource (Organizer) to the database, create appropriate API requests for it, and render the data from it in the client. The Organizer table should be connected to Events (many-to-many relationship).
- My current code is far from being DRY. I need to refactor it further to avoid occasional bugs and to ensure the client loads smoothly and speedily.
- Variable, class, and ID names are currently unclear. My goal is to rename them accordingly to make the code easier to read, understand, and further work with.
- Additional styling is desirable.
