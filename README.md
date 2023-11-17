
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is a web application for managing and displaying information about a Sunday adult soccer team. The application provides details about the team, upcoming games, and contact information.

## Project Setup

Before running any of the available scripts, ensure you have installed all the necessary dependencies:

```
npm install
```

This will install all the required packages and dependencies needed to run the project.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Suggested Development Order

To efficiently set up the frontend for your Sunday adult soccer team website, consider following these steps in the following order:

1. **Home Page**
   - [ ] Create the Home Page component.
   - [ ] Add a welcome message, team name, logo, and a brief introduction.
   - [ ] Implement links or buttons to other sections of the website.

2. **Game Schedule Page**
   - [ ] Develop the Game Schedule Page component.
   - [ ] Display a list of upcoming games with details (date, time, opponent, location).
   - [ ] Implement filtering and searching for specific games.
   - [ ] Add the ability to click on a game to view more details.

3. **Player Availability Page**
   - [ ] Create the Player Availability Page component.
   - [ ] Show a list of games and allow players to mark their availability.
   - [ ] Include a submit button to save availability choices.
   - [ ] Provide feedback to confirm that choices are recorded.

4. **Admin Panel (Captain/Administrator)**
   - [ ] Develop a separate Admin Panel section.
   - [ ] Implement user authentication to restrict access.
   - [ ] Include features for managing player rosters, game schedules, reminders, and admin tasks.

5. **Player Profile Page**
   - [ ] Create individual player profiles.
   - [ ] Allow team members to add/update personal information, contact details, and preferred positions.
   - [ ] Enable players to view and edit their profiles.

6. **Additional Features Pages (Optional)**
   - [ ] Depending on priorities, consider adding pages for game results, player statistics, discussion forum, news updates, and a mobile app download page.

7. **404 Error Page**
   - [ ] Include a custom 404 error page to handle invalid URLs or broken links.