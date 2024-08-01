# User Management API

Welcome to the User Management API! This API allows you to manage users with functionalities such as registration, login, password changes, and account deletion.

## 🌟 Features

- **User Registration**: Register new users with a name, email, and password.
- **User Login**: Authenticate users with their email and password.
- **Password Change**: Update the password for authenticated users.
- **User Deletion**: Remove user accounts.

## 🚀 Getting Started

Follow the steps below to get started with this API:

### Prerequisites

- Node.js
- npm (or yarn)
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vytuuu/user-management-api.git
   cd user-management-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```env
   ATLAS_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ALLOWED_URLS=[""]
   PORT=3333
   ```

4. Build the application:

   ```bash
   npm run build
   ```

5. Start the server:

   ```bash
   npm run dev
   ```

6. Access the API documentation:
   Open your browser and navigate to [http://localhost:3333/api-docs](http://localhost:3333/api-docs) to view the Swagger documentation.

## 📚 API Documentation

The API documentation is available on Swagger. You can find detailed information about each endpoint, including request and response formats.

## 🤝 Contributing

Feedback, suggestions, and questions are welcome. Feel free to reach out to me on Discord!

## 📧 Contact

For questions, suggestions, or feedback, please contact:

- Name: Vitor Ferreira
- Discord: vytu
