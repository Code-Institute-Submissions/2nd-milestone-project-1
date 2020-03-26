# Holiday Homes United – a ‘start-up’ travel portal

###### Code Institute / Interactive Front-End Development

This repository is my 2nd milestone project of Code Institute’s software engineering program.

## Project purpose: presentation of interactive data

The project purpose (definition of Code Institute) is to build an interactive front-end site. The site should respond to the users' actions, allowing users to actively engage with data, alter the way the site displays the information to achieve their preferred goals.

## Project should provide following value:

- Users are able to interact with the site in their particular way, to achieve their personal goals and derive answers to their specific questions.
- The site owner advances their own goals by providing this functionality, potentially by being a regular user themselves.

## My project

My project represents a ‘start-up’ travel website/portal. The primary focus of this website is to let (potential) customer search their favorite holiday home. The meaning of search is meant in the widest sense of the word: searching by query, searching by map or just scrolling through the homes published. The seconday target group is home owners who might advertise their home online.

# Demo

A live demo can be found [here](https://gitnorthway.github.io/2nd-milestone-project/ "Demo website 2nd milestone project").

# UX

For an optimal user experience I created the following user storties:

- As a (potential) customer I want to query for specific holiday homes
- As a (potential) customer I want to search on map for holiday homes
- As a (potential) customer I want to get inspired by seeing homes attractively presented
- As a home owner I want to know what advertising possibilities I have

## Framework

I've choosen to work with Bootstrap because it a widely used framework for developing mobile first applications. It's helping in development by its great grid system and list of components ready to use.

I made use of the [Simplex theme](https://bootswatch.com/simplex/ "Simplex theme") of Bootswatch. The reason for this is that I wanted to have a simple and ‘clean’ design. The second reason is that I wanted to make use of green and orange as the main colors, which are represented in this theme.

## Colors

Orange: this color stands for encouragement. The combination of yellow and red ensures warmth, enthusiasm and excitement.

Green: this color stands for growth and health. It is seen as a refreshing and peaceful color.

The combination of these color is great because the green color eliminates the negative connotation of orange: insincerity.

The full range of colors of this theme is:

- ![# #D9230F](https://placehold.it/15/D9230F/D9230F) `#D9230F` Primary
- ![# #FFF](https://placehold.it/15/fff/fff) `#FFF` Secondary
- ![# #029ACF](https://placehold.it/15/029ACF/029ACF) `#029ACF` Info
- ![# #9B479F](https://placehold.it/15/9B479F/9B479F) `#9B479F` Warning
- ![# #D9831F](https://placehold.it/15/D9831F/D9831F) `#D9230F` Danger

## Wireframe

I've used [MockFlow](https://www.mockflow.com/ "MockFlow") to make my wireframe. You can download it here.

In comparison with the wireframe I made two different choices:

- I didn't make use of the GDPR checkbox due to good practise examples of Code Institute and Booking.com where consent is given in later phase.
- Regarding the advertising packages I made another choise in responsiveness. 3 packages in a row from large screens and up, instead of starting at medium size devices.

# Features

I Integrated the following features to meet the user stories:

- Search by query
- Search by map
- Image carousel
- Newsletter
- Contact form

As a side project I made a [REST API](https://github.com/GitNorthWay/nodejs-rest-api "NodeJS Rest API") with NodeJS to make it possible to registrate the subscriber on the newsletter. When an emailadddress is submitted to MongoDB which registrates the subsciber as inactive.

## Features to be implemented

- Signing up for advertisement membership
- Advanced search for holiday homes
- Database for storing houses
- Fully working newsletter functionality which sends an activation email to the subscriber

# Technologies used

- HTML5 for structuring the website
- CSS for styling
- Bootstrap (4.4.1) framwework for styling and navigation
- JavaScript for behaviour
- jQuery for behaviour and as a dependency for Bootstrap
- Popper.js as a dependency for Bootstrap
- Owl Carousel 2 for an image carousel
- Animate.css as a dependency for wow.js
- wow.js for animations
- Font Awesome for icons
- JSON as data interchange format
- Git and Github for version control

## Tools

- [CSS matic box shadow tool](https://www.cssmatic.com/ "CSS matic box shadow tool")
- [MockFlow](https://www.mockflow.com/ "MockFlow") to make a wireframe
- Visual Studio Code

# Testing

# Credits

## Media

### Header image

- Image: https://pixabay.com/nl/photos/huis-stenen-huis-villa-architectuur-1017478/
- User: https://pixabay.com/nl/users/kallipygos-658558/

### Email sign up

- Image: https://pixabay.com/nl/illustrations/email-reclame-online-marketing-2362038/
- User: https://pixabay.com/nl/users/tumisu-148124/

## Colors

- Bootswatch: [Simplex theme](https://bootswatch.com/simplex/ "Simplex theme")

## Data

- Data is coming from @Leisure Vacation Rentals

## Code

- Bootstrap navigation bar (Bootstrap's documentation)
- Traversy Media: [Autocomplete App With JS & JSON](https://youtu.be/1iysNUrI3lw "Autocomplete App With JS & JSON")
- Abraham Garcia Tutorial: [How to Add Dynamic Slides to OWL Carousel via Ajax](https://thecodebeast.com/post/how-to-add-dynamic-slides-to-owl-carousel-via-ajax/52 "How to Add Dynamic Slides to OWL Carousel via Ajax")
- CSS-TRICKS: [Transparent Background Images](https://css-tricks.com/snippets/css/transparent-background-images/ "Transparent Background Images")

# Acknowledgements

- Bootstrap documentation
- EmailJS documentation
- Font Awesome documentation
- Google Maps documentation
- Owl Carousel 2 documentation
- wow.js and Animate.css Github documentation

**This repo is for educational purposes only.**
