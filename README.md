# User Form Application

This project is a user form application that allows users to fill out a form, generates a unique identifier for each user, and dynamically creates separate containers displaying their information. The application is built using React for the frontend and Node.js for the backend, with Docker support for containerization.

## Project Structure

```
user-form-app
├── backend
│   ├── src
│   │   ├── app.js                # Entry point for the backend application
│   │   ├── routes
│   │   │   └── userRoutes.js     # Defines routes for user-related operations
│   │   └── controllers
│   │       └── userController.js  # Handles user data and validation
│   ├── package.json               # Backend dependencies and scripts
│   └── Dockerfile                 # Dockerfile for backend
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Form.js           # Form component for user input
│   │   │   ├── UserContainer.js   # Displays submitted user information
│   │   │   └── Validation.js      # Validation logic for user input
│   │   ├── App.js                 # Main application component
│   │   └── index.js               # Entry point for the frontend application
│   ├── public
│   │   └── index.html             # Main HTML file for the frontend
│   ├── package.json               # Frontend dependencies and scripts
│   └── Dockerfile                 # Dockerfile for frontend
├── docker-compose.yml              # Defines services for frontend and backend
└── README.md                      # Project documentation
```

## Features

- User-friendly form with validation for:
  - Full Name
  - Email Address
  - Age
  - Gender
  - Address
- Unique ID generation for each user upon form submission.
- Dynamic creation of containers to display user information.
- Responsive design for mobile compatibility.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd user-form-app
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

4. To run the application using Docker, ensure Docker is installed and running, then execute:
   ```
   docker-compose up
   ```

5. Access the application in your web browser at `http://localhost:3000`.

## Usage

- Fill out the form with the required information.
- Submit the form to generate a unique identifier and display the user information in a separate container.
- Ensure all fields are validated before submission to maintain data integrity.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.#   D o c k e r L o g i n  
 