# Beauty Store API
This is a server-side code for my portfolio project: full-stack e-commerce application (PERN).

The link to the API: https://beauty-ecommerce-api.herokuapp.com/

## Stack
The back-end of the application is build with Node framework **Express.js** and **PostgreSQL** database management system.

## Functionality

- any user can GET the list of products or a single product from the database
- authenticated users can interact with their cart, proceed to the checkout, place an order and view their order history as well as updated their user information.
- only authorized users can perform POST, PUT and DELETE requests on Products route and GET on Users route. 

## Features

1. User authentication is built with JWT that is stored in a cookie ('jsonwebtoken' npm package https://www.npmjs.com/package/jsonwebtoken). 
2. Most of the routes check user authentication and authorization.
3. Users' passwords are hashed and salted with bcryptjs npm package (https://www.npmjs.com/package/bcryptjs).
4. Connection to database built with node-postgres client (https://www.npmjs.com/package/pg).

### Future developments of the project

-add authentication with Google/Facebook/Twitter   
-connect to a payment system   
-connect backend with front-end   
