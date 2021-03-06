# Corner Store

## About Us 

CornerStore seeks to connect consumers through a network of Black Owned small businesses and vendors by creating an interactive website with specialized filters that allow for equitable results and the ability to see business information such as location, history, etc. Our solution would also allow for in-depth reviews.

Our goal is better to understand how we can best improve the user experience of finding Black-Owned Businesses in their area, that both fulfills them being socially conscious and supportive of a cause while having access to quality products and services.

## Meet the Team  

Junia Janvier: Team Lead
<br/> Joanna Jung: UI/UX Designer
<br/> Sophie Fang: Technical Member
<br/> Ha (Amelia) Nguyen: Technical Member
<br/> Abdul Ka: Technical Member

## How to Run Application

Backend: cd api; venv/bin/flask run --no-debugger
Frontend: yarn start


## Jira Backlog

### Ordering of Backlog

- We are ordering the backlog based on what information we have and which are accomplishable without the assistance of another component to test the functionality (ie. having the database set up before developing a filter).
  <br/>https://buspark.atlassian.net/jira/software/projects/CP/boards/16

## Sprint Planning

The forecast for our first sprint is to complete 1 user story with the first including plotting the intitial businesses and vendors. Due to the search and filtering to be closely tied, we decided to hold off on this to ensure that we can focus on developing our database as a team collective in the following sprint.

## Daily Scrums

### Daily Scrum #1

**During this scrum, we worked on developing our backlog, solution validations, and github/readme. We didn't come across many impediments, just that we decided to focus our work on a more succint task of listing businesses, rather than including the backend database as well. Thus, we tasked our developers with the work of listing our first 25 businesses, with Abdul starting to look into the databases and how to link to flask. **

- Backlog
  - There is a list of 25 businesses
    - As a consumer, my immediate goal is to find BoBs and Vendors, thus I want to first see the main page with 25 amount of businesses listed on the main page so that I can see an organized directory of businesses and I don’t have to go through multiple websites.

  - There is a list of 25 businesses part 2
    - As a consumer, my immediate goal is to find BoBs and Vendors, thus I want to first see the main page with 25 amount of businesses listed on the main page so that I can see an organized directory of businesses and I don’t have to go through multiple websites. However, this will be implemented on the server end.

  - These businesses can be searched by business name
    - As a consumer, my immediate goal is to find BoBs and Vendors, thus I want to first see the main page with a search bar to find my desired business by their name so that I can begin to sort through the businesses on the site.

  - These businesses are organized by category and can be searched by business name
    - As a consumer, my immediate goal is to find BoBs and Vendors specifically as it pertains to the type of business I want category of industry, thus I want to first see the main page with 25 amount of businesses sorted by the specific industry and an ability to search them by category on the main page so that I can see an organized directory of businesses and I don’t have to go through the entire list to find the desired business.

  - Include services in at least 25 businesses
    - As a consumer, my immediate goal is to find BoBs and Vendors specifically as it pertains to the type of business I want category of industry, thus I want to first see the main page with 50 amount of businesses sorted by the specific industry and an ability to search them by category on the main page so that I can see an organized directory of businesses and I don’t have to go through the entire list to find the desired business.

  - Filtering search results
    - As a consumer, my immediate goal is to find BoBs and Vendors specifically as it pertains to the type of business I want a category of industry, thus I want to first see the main search and an ability to search them by category on the main page followed by an ability to hone down my search based on particular type so that I can see an organized directory of businesses and I don’t have to go through the entire list to find the desired business.

  - Include a map of businesses that have a location
    - As a consumer, my goal is to also find out how to get to my chosen business thus I want to add a map with locations so that I can see a plotted map of businesses and I don’t have to go through the entire list to see how far they are and their location.

  -Can search for directions to business (i.e. similar to Google with transit options)
    - s a consumer, my immediate goal is to find BoBs and Vendors specifically as it pertains to the location of the business, thus I want to further this goal by implementing directions so that I can navigate my way to a selected BoBs and if this business has no address their general area of service.

    - Can filter results by location
    - As a consumer, my immediate goal is to find BoBs and Vendors specifically as it pertains to the type of business I want a category of industry, thus I want to first see the main search and an ability to search them by category on the main page followed by an ability to hone down my search based on particular type so that I can see an organized directory of businesses and I don’t have to go through the entire list to find the desired business.

    - Selecting a business profile page for more info
    - As a consumer, I’d like to find business information at once, after making my selection in the search engine, thus I wanted to create profile pages so that businesses have their own space for their insights, history, contact, and inventory, and so I don’t have to see the minuscule info on the search page. 

  - On the profile page, add all relevant information
    - As a consumer, I’d like to find business information at once, after making my selection in the search engine, thus I wanted to create profile pages so that businesses have their own space for their insights, history, contact, and inventory, and so I don’t have to see the minuscule info on the search page.

  - Can see and add reviews for businesses
    - As a consumer, I’d like to find business information at once, after making my selection in the search engine, thus I wanted to add reviews and the ability to add them so that I can access my decision to purchase. 

- Solution Validation
  - Interviews (All Team Members - Junia, Joanna, Sophie, Amelia and Abdul)
      - Interviews COMPLETE with each member completing 2-3 interviews (Junia, Abdul, Joanna, Sophie, Amelia)
  - Website for validation exercise (Joanna)
- Github/Readme
  - Setting up Github/Readme (Sophie)
- UXD Snapshots
  - Working on next snapshot after Lo-Fi Wireframes (Joanna)

<br/>**Activities for Upcoming Week**

- Backlog (Ordered based on the user flow of consumers when navigating the app based on the feedback of interviews and validation)
  - Going into web app and seeing display of Black Owned Businesses and vendors (general info)
  - Seeing main page organized by categories with search engine (i.e. the UXD design)
    -Abudl to add 13 businesses to server along with Sophie
- Solution Validation
  - Finishing up interviews (Joanna and Amelia)
  - Hypothesis List (Junia)
  - Putting final touches on the mock website (Joanna & Sophie)
- UXD Snapshots
  - Finish up snapshot - adjustments based on interview suggestions (Joanna)
- Spotlight
  - Team to finish slides for week and present 

<br/>**Impediments:**

- Tech Stack: Still in discussion, will be following up with mentors

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
