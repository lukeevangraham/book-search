# Book Search App

## Overview
Deployed at: https://lgraham-book-search.herokuapp.com/

There are so many books out there.  How do you keep track of what you want to read?  In this activity, I created a new React-based Google Books Search app to help organize a reading list. This app utilizes React components, helper/util functions, and React's lifecycle methods to query and display books based on user searches. I also used Node, Express and MongoDB so that users can save books to review or purchase later.

![Home](./readmeImages/home.png?raw=true "Home")


## Using the app

This application required at minimum 2 pages, check out the following mockup images for each page:

![Search results](./readmeImages/search.png?raw=true "Search results")

Search - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

![Saved page](./readmeImages/saved.png?raw=true "Saved Page")

Saved - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.
