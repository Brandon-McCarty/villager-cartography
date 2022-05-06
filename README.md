# PROJECT NAME

Villager Cartography

## Description

_Duration: 2 Week Sprint_

Minecraft is a game about exploration and creative building. The game is similar to a video game version of Lego, the game is about having fun and playing at your own pace. The game uses a coordinate system for exploring and noting locations of interest and has no limit to how far a player is able to explore.

While playing the game Minecraft, there is no easy way to store the coordinates and information of locations and interesting sites you stumble across. This application is meant to help organize and keep any of that information in one central location. This application allows the user to create their own world or join another user's world. A user can join a world by obtaining the join code from the creating user, which is randomly generated upon world creation. Within any of their worlds, the user can add, update, or delete locations of interest discovered while playing the game. Users are able to name a location, store the coordinates, mark as explored, and add any addtional comments.

Deployed Application: [Villager Cartography](https://warm-temple-51016.herokuapp.com/#/login)

### Screenshots


### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [React.js](https://reactjs.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Express.js](https://expressjs.com/)
- [React-Redux](https://redux.js.org/)
- [Material UI](https://v4.mui.com/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Redux-Saga](https://redux-saga.js.org/)
- [Chance.js](https://chancejs.com/)
- [Passport](https://www.passportjs.org/)
- [Sweet Alerts 2](https://sweetalert2.github.io/)

## Installation

1. Create a database named `villager_cartography',
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an `npm install`
4. Run `postgres -D /usr/local/var/postgres for Intel, M1 is postgres -D /opt/homebrew/var/postgres` in your terminal
to start the database
5. Run `npm run server` in your terminal to start the server.
6. Run `npm run client` in your terminal to open the client.


## Usage

If you do not have an account, you must first create an account via the registration form. Once an account is created, or if already created, login using the existing credentials. 

Upon loggin in, the user is brought to their worlds page. On this page, the user can see their existing Minecraft worlds. If the user does not have a world or wishes to add another world, they can hit the '+' icon in the top right to access the form to create a new world. In this form, the user can enter the name of a new world or join an existing world which has already been created. Joining a world is done by entering the join code given for the world. The join code can be obtained by hitting the information icon on the left side of the card with the world name and sharing the given code with whoever you wish to give access. The last feature of the worlds page is the delete button. Hitting this button has two outcomes, the first is if you are the original creator of the selected world to delete, you have the option to permanently delete the world and its contents from the database entirely. The user is able to see which worlds they have created via their profile page. The second potential delete outcome is to remove the world from your list of worlds. This allows a user to rejoin a world if they are not the original creator of the world. Clicking on the world's name will bring the user to the next section of the application, the locations.

The locations page shows all of the locations associated with the selected world. The visible information includes the name, the coordinates, and whether or not the location has been explored. Similar to the world page, the user can hit the '+' icon in the top to open the form to add a new location. The messages icon in the top left allows all users of the world to communicate via a message board. This message board opens a display and input to view and read messages left by other players. Clicking on a location will bring the user to the details page for the location.

In the details page, we see all of the previously noted information for this location with the addition of a comments section. This view will allow the user to view any additional comments entered while creating the location. This view also gives the user an option to delete the chosen location, or edit the location. Editing the location will bring the user to a form similar to the one used to create the location. Here they are able to update and change any desired aspects of the location and submit those updates. 

Using all of these features allows a simple and easy-to-unserstand application to organize and store minecraft data. Enjoy and happy crafting!


## Built With

node.js
express.js
axios.js
react.js
material ui v4
postgreSQL
react-redux.js
redux-saga
Passport.js
chance.js
sweet alerts 2



## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [brandon.m.mccarty12@gmail.com](www.google.com)

