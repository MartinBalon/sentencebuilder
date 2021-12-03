# Sentence Builder App

Sentence Builder is an app that allows you to create simple sentences by answering 4 questions. These questions are 'who', 'what' 'where', and 'when'. If these 4 inputs are valid strings and length of these strings doesn't exceed certain amount of characters then user can either save this sentence or discard it.

This application is made out of two main parts.

In the first part of the application a user can see all the saved sentences. Clicking on the detail icon will show a user the whole sentence plus date and time when this sentence was created. Each of these sentences has also a delete button which will delete particular sentence. Simple pagination limits number of sentence per page and a user can navigate between pages.

In the second part of the application a user can create a sentence. There are 4 pages where user can type in either 'who', 'what', 'where', and 'when'. Simple validation will indicate any errors during filling these text inputs. To assist a user with creating a sentence there is also a sentence overview where current sentence is being displayed. This indicates if any of the 4 words above are missing. The bottom bar also indicates success or error while filling in the text inputs and it also serves as navigation in between these 4 pages. This mean that user can navigate either by using arrows - which navigate to either previous or next page - or by using the bottom bar for quicker navigation. If no input is being registered both 'delete' and 'save' buttons are disabled. If there is any input at all the delete button is active and can be used to delete current sentence so user can start over. The save button becomes active ones a user has filled in all 4 fields correctly. After saving the sentence success or error message is displayed. If saving the sentence was successful user is being automatically redirected to first page - 'who' page.

## Technology used to build this app:

React (create react app), Redux, Redux Toolkit, Styled Components, and Typescript.

## You can view the app on heroku:

[link to the app](http://sbuilder96.herokuapp.com/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
