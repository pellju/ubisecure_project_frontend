# Front-end for my Ubisecure job-interview-project (show the real-time location of trains)

This application is the front-end for my job-interview-project (showing real-time location of trains sent to backend), written using React.
The communication between frontend and backend is done by using websocket, so these have to be run on the same instance.

The frontend is handling usermanagement (registration and loggining in) and showing the userdata and train info (in a table and on a map provided by OpenStreetMap).
React-leaflet is used for handling the map.
Seeing the user data and train information requires that the user has logged in.

By default, the frontend runs on port `3000`.

There are two warnings at the moment, one of which is related to un-used value (`src/components/TrainsOnMap.js, setCenter`) and the other one is about `assigining object to a variable before exporting as module default` (`src/services/userservice.js`).

## Installation and usage

0.) Install nodejs and clone the project

1.) Go to the root directory of the project and install the requirements using `npm install`

2.) The project can run by running `npm start`

3.) The frontend is available at `http://localhost:3000`! (Remember to start the backend as well)


## Testing 
There is a simple test regarding to showing that correct userdata is shown after login. This can be run with `npm test`.
However, most of the testing is done as end-to-end testing using Cypress.
To run Cypress, the frontend and the backend have to be running!

The cypress-client itself can be run at the root directory of this folder, running `npm run cypress:open` and the choosing *train-app-spec.js*.
