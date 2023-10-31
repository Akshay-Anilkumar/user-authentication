# User Authentication and Book Management 
User Authentication and Book Management is a Node.js application that provides user registration and authentication functionalities, allowing both administrators and customers to use the system. Administrators can manage books (CRUD operations), while customers can only view and search books.

## Features  
* User registration and login.
* Password reset functionality via email.
* User roles: Admin and Customer.
* Admins can perform CRUD operations on books.
* Customers can view and search books.

## Prerequisites
Before you begin, ensure you have met the following requirements:

* Node.js and npm installed.
* MongoDB set up and running.
* Necessary dependencies installed (see the Dependencies section in package.json).

## Instructions to Set Up and Run Locally

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Akshay-Anilkumar/user-authentication.git

2. Install the required dependencies:

   npm install
   
3. Set up a MongoDB database (either locally or using a cloud solution) and update the MongoDB URI in the code with your database connection.
   
4. Start the application:

   npm run dev

5. The API will be accessible at http://localhost:3000 by default.

## Project Structure
The project structure is organized as follows:

* src/ contains the main application code, including controllers, models, routes, and middleware.
* app.js is the main entry point for the application.
* package.json lists project dependencies and scripts.

## Usage
The application provides RESTful APIs for user registration, login, password reset, and book management. You can use tools like Postman to test the APIs.

## API Routes
1. /user/register: User registration.
2. /user/login: User login.
3. /user/reset-password: Request a password reset.
4. /book/create: Create a book.
5. /book/list: List all books.
6. /book/search: Search all books.
7. /book/edit/:bookId: Edit a book.
8. /book/delete/:bookId: Delete a books.
