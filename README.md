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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
