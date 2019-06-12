# Event Planner: A Single-Page Application Project by Sasha Bausheva (Front-end Client)
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
- De-bug, refactor, and add styling to the client

## Wireframes and Entity Relationship Diagrams
Initial wireframes (a little too ambitious for the timeframe I was working with)
[Wireframes and Entity Relationship Diagrams](https://github.com/sashabausheva/event-planner-full-stack-client/public/images/wireframes)

## Unsolved Problems / Future Development Plans
While I have added another resource to my API (Locations) and connected it to my initial table (Events) via the one-to-many relationship (an event belongs to one location; one location has many events), I am yet to render this connection on the front end. I would like to allow users to select a location from the list of available locations in the databaseI would like to add another resource to my API. This resource would be Lists, in which the user would be able to organize their tasks into specific lists.
I would like to add a feature where the user can mark tasks as complete. This would take the tasks off of the visible listing of open tasks, but would store them elsewhere, in case the user would like to access them in the future.

, and My Process / Problem Solving Strategy
