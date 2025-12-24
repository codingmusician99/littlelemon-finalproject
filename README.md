# Little Lemon Restaurant - Reserve a Table 

This project is a React-based web application which enables users to book a table at the (fictional) Little Lemon Restaurant. This is built as part of the Meta Front-End Developer certificate coursework. It allows users to reserce a table by selecting a date, time, number of guests, and occassion with validation, confirmation routing and unit tests included. 

## Features

* Table reservation form with controlled components
* Dynamic available times based on selected date
* Client-side and HTML5 form validation
* Booking confirmation page
* Accessible semantic HTML and ARIA support 
* Unit tests for reducers, API functions and form validation

## Technologies Used

* React
* React Router DOM
* JavaScript (ES6+)
* HTML5 & CSS
* Jest & React Testing Library 

## Project Setup

### Prerequisites
Make sure you have the following installed: 

* Node.js (version 16 or later recommended)
* npm (comes with Node.js)

### Installation
1. Clone the repository:

`git clone https://github.com/codingmusician99/littlelemon-finalproject.git`

2. Navigate into the project directory:

`cd littlelemon-finalproject`

3. Install dependencies:

`npm install`

## Running the Application

To start the development server:

`npm start`

The app will run locally at:

`http://localhost:3000`

## Running Tests

This project includes unit tests for:

* Booking page reducer logic
* API utility functions
* Form validation (HTML5 and JavaScript)

To run all tests:

`npm test`

To run all tests once without watch mode:

`npm test -- --watchAll=false`

## Accessibility

The application follows accessibility best practices:

* Semantic HTML elements (`header`,`main`,`section`,`form`)
* Proper label-to-input associations using `htmlFor`
* Disabled submission button for invalid form submission
* ARIA attributes applied when required

## Project Structure (Key Files)

```
src/
├── App.js
├── App.css
├── Header.js
├── Footer.js
├── Nav.js
├── BookingPage.js
├── BookingForm.js
├── ConfirmedBooking.js
├── api.js
├── BookingForm.test.js
├── BookingPage.test.js
└── api.test.js
```

### Notes

* The API used in this project is a mock API provided for coursework purposes.
* All required features and tests have been implemented according to the assignment instructions.

## Author 

Built by Shradha Ganesh as part of the Meta Front-End Developer Professional Certificate






