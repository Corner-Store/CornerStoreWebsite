# Corner Store

## About Us 

CornerStore seeks to connect consumers through a network of Black Owned small businesses and vendors by creating an interactive website with specialized filters that allow for equitable results and the ability to see business information such as location, history, etc. Our solution would also allow for in-depth reviews.

Our goal is better to understand how we can best improve the user experience of finding Black-Owned Businesses in their area, that both fulfills them being socially conscious and supportive of a cause while having access to quality products and services.

## Past Sprints
<br/> https://docs.google.com/document/d/1JtmBw63qlJ00GQZ1diCL6cJwsponV_IuG9opmMc0dDk/edit?usp=sharing 

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

The forecast for our fourth sprint is to complete 2 user stories with the two including developing the back to front end and to incorporate a search bar for business names. Since, we had to make up for the previous week in setting up our server to backend, and due to the fact Sophie had previously created a search engine, we decided that by combining our work for the db, server, search, and adding in the front end categories work would put us on a good place for the following week with filtering which would require a more mob programming approach. We also decided to have this much for this sprint, with any outstanding work being easilly transferred over to the following sprint. 

## Daily Scrums

### Daily Scrum #1

**During this scrum (Wednesday @ 2 (Proof in Mob Programming image)), we had to make up for the db as it wasn't on the server, so our increments was mostly server-based (impediment), however Sophie was able to show the search bar (completed) and was working to habing it return the businesses with links from the backend. Joanna supplied the icons for the categories, and Junia showed the Google Maps api. Amelia continued to showcase how to use Postgres, and Abdul continued on the backend. For the future Sophie will in the next 24 hours seek to figure out the search function to implement it to recongize upper and lowercase as the same, Abdul will work to complete task, Amelia will recieve icons form Joanna and Junia will finish up with figuring out DB and how to import from sheets. To remove impediments we will work together for rest of Wednesday to all be on the same page about db and backend. **

## Mob Programming/ Test-Driven Development
- Mob Programming: http://cs-people.bu.edu/jjanvier/Jira/2021-03-06.png 
- Test driven: http://cs-people.bu.edu/jjanvier/Jira/2021-03-08%20(4).png 

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


<br/>**Activities for Upcoming Week**

- Backlog (Ordered based on the user flow of consumers when navigating the app based on the feedback of interviews and validation)
  -  Filtering search results
    - As a consumer, my immediate goal is to find BoBs and Vendors specifically as it pertains to the type of business I want a category of industry, thus I want to first see the main search and an ability to search them by category on the main page followed by an ability to hone down my search based on particular type so that I can see an organized directory of businesses and I don’t have to go through the entire list to find the desired business.
  -Junia to complete services list
  -Abdul to pull backend to search bar
  -Sophie to calibrate search bar to find links
  -Amelia to commplete categories landing page
  -Joanna to supply landing page graphics to be added to site
  -*In addition we will be finishing up any outstanding tasks from the previous sprint to be completed by our Wednesday meeting

<br/>**Impediments:**

- Not yet having completed db to server done, and search bar with server info so far

# Sprint Review
- Our produce is a working product, as it includes a working search bar with 35 businesses on the server side. Two stakeholders were present in the design  review (Team Lead (Junia) Developer (Abdul)).
 - http://cs-people.bu.edu/jjanvier/Jira/2021-03-21%20(7).png
 - https://github.com/Corner-Store/cornerstore/tree/main  
 - http://cs-people.bu.edu/jjanvier/Jira/CornerStore%20So%20Far.png 
 - http://cs-people.bu.edu/jjanvier/Jira/2021-03-22%20(2).png 
 
# Sprint Retrospective
- Completing tasks and working on them daily
- Arriving to meeting with task questions
- More mob programming

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

