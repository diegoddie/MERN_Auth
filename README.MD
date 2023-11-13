# Welcome to the Ultimate MERN Auth APP!
This is a full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack. It provides authentication features, allowing users to sign up, log in, and log out, with access to protected routes exclusively for authenticated users.
This will be my Authentication Template Structure for my future projects!

I used so many technlogies I've never used before, such as Redux Toolkit, JWT, Cookies..

I've deployed the project at https://mern-auth-q1qf.onrender.com/

## Overview
*Front-End*

The front-end of the application is developed using React, a popular JavaScript library for building user interfaces. React Router is employed for client-side routing, enabling seamless navigation within the application.

*Back-End*
Node.js and Express form the back-end, with MongoDB serving as the database for user information and authentication data. Cookies are used for efficient and secure session management.

*Authentication*
Authentication is implemented through JSON Web Tokens (JWT), providing secure authorization for protected routes. User authentication state is managed and persisted using Redux.

## Getting Started
Follow these steps to set up and run the project locally:

1. Clone the repo
2. Install Dependencies
3. Configure Environment Variables:
    - Create an .env file at the root of the project. Add the following variables:
        MONGO_URI=<your_mongo_database_uri>
        JWT_SECRET=<your_jwt_secret>
    - Create an .env file inside the client folder. Add the following variable:
        VITE_FIREBASE_API_KEY=<your_firebase_key>
4. Run the application. 