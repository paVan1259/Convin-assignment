# Daily Expenses Sharing Application
## Description
The Daily Expenses Sharing Application allows users to manage expenses, split costs among friends, and generate downloadable balance sheets. It provides a user-friendly backend for managing user details and expenses with different splitting methods.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- User management with registration and login capabilities.
- Add and manage expenses.
- Split expenses using three methods: equal, exact amounts, and percentages.
- Download balance sheets with individual and overall expense summaries.

## Technologies Used
- **Node.js**: Backend runtime environment
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: ODM for MongoDB
- **dotenv**: Environment variable management
- **body-parser**: Middleware to parse incoming request bodies
- **cors**: Middleware to enable CORS
- **bcryptjs**: Password hashing
- **jsonwebtoken**: For user authentication
- 
## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Set up MongoDB and configure the connection in `server.js`.
4. Run `npm start` to start the server.

## API Endpoints

### User Endpoints
- POST `/api/users/create`: Create a new user.
- GET `/api/users/:id`: Retrieve user details.

### Expense Endpoints
- POST `/api/expenses/add`: Add a new expense.
- GET `/api/expenses/user/:userId`: Retrieve user expenses.
- GET `/api/expenses/overall`: Retrieve all expenses.
- GET `/api/expenses/download/balance-sheet`: Download balance sheet (CSV).
