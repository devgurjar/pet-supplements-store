# Pet Supplements Store

A full-stack e-commerce application for pet supplements built with React, Node.js, Express, and MongoDB. Currently using mock authentication for development.

## Features

- 🔐 User Authentication (JWT with mock service)
- 🛒 Shopping Cart with Local Storage
- 🏪 Product Catalog
- 👤 User Profiles
- 💳 Protected Routes
- 📱 Responsive Design
- 🎨 Material-UI Components

## Tech Stack

### Frontend
- React.js 18
- Material-UI v5
- React Router v6
- Axios
- Context API for state management
  - AuthContext for authentication
  - CartContext for shopping cart

### Authentication Implementation
Currently using a mock authentication service (`auth.service.js`) that:
- Simulates API delays
- Stores tokens in localStorage
- Handles user registration and login
- Manages protected routes
- Includes token verification

## Project Structure 

pet-supplements-store/
├── frontend/
│ ├── public/
│ │ └── assets/
│ │ └── images/
│ └── src/
│ ├── components/
│ │ ├── Auth/
│ │ │ ├── Login.js
│ │ │ ├── Register.js
│ │ │ └── ProtectedRoute.js
│ │ ├── Account/
│ │ │ └── Account.js
│ │ ├── Cart/
│ │ │ └── Cart.js
│ │ ├── Header/
│ │ │ └── Header.js
│ │ ├── Logo/
│ │ │ └── Logo.js
│ │ └── ProductCard/
│ │ └── ProductCard.js
│ ├── context/
│ │ ├── AuthContext.js
│ │ └── CartContext.js
│ ├── services/
│ │ ├── api.js
│ │ └── auth.service.js
│ ├── pages/
│ │ ├── Home.js
│ │ └── Products.js
│ └── App.js
└── backend/
├── config/
│ └── db.js
├── controllers/
│ └── auth.controller.js
├── middleware/
│ └── auth.middleware.js
├── models/
│ └── user.model.js
├── routes/
│ └── auth.routes.js
├── .env
└── server.js

git clone https://github.com/devgurjar/pet-supplements-store.git
cd pet-supplements-store
Dependencies
bash
cd backend
npm install
Dependencies
bash
cd frontend
npm install
:
env
PORT=3001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
:
env
FAST_REFRESH=false
REACT_APP_API_URL=http://localhost:3001/api
Server
bash
cd backend
npm run dev
Server
bash
cd frontend
npm start
Credentials
Email: test@example.com
Password: password123
documentation
This README now reflects:
Your actual project structure
Correct installation paths
Environment variables from your project
GitHub repository details
Detailed setup instructions
Let me know if you'd like to add or modify any sections!
can you update readme file?

Here's the updated README with more specific details about the authentication implementation:
Structure
pet-supplements-store/
├── src/
│ ├── components/
│ │ ├── Auth/
│ │ │ ├── Login.js # Login form with JWT
│ │ │ ├── Register.js # Registration form
│ │ │ └── ProtectedRoute.js # Route protection wrapper
│ │ └── Header/
│ │ └── Header.js # Navigation with auth state
│ ├── context/
│ │ └── AuthContext.js # Authentication state management
│ ├── services/
│ │ ├── api.js # Axios instance with interceptors
│ │ └── auth.service.js # Mock authentication service
│ └── App.js # Main app with protected routes



## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
bash
git clone https://github.com/devgurjar/pet-supplements-store.git
cd pet-supplements-store

2. Install dependencies

bash
npm install


3. Configure Environment Variables
Create a `.env.development` file:



The application will be available at http://localhost:3000

## Authentication Features

### Mock Authentication Service
- JWT token generation and storage
- User registration and login
- Token verification
- Protected route handling

### Test Credentials
Email: test@example.com
Password: password123


### Protected Routes
- `/account` - User profile
- `/cart` - Shopping cart

### Authentication Flow
1. User logs in/registers
2. JWT token is stored in localStorage
3. Protected routes check authentication state
4. Automatic token verification on app load
5. Automatic logout on token expiration

## API Integration

Currently using a mock API service that:
- Simulates API delays
- Handles token management
- Includes request/response interceptors
- Ready for real API integration

To switch to a real API:
1. Update `REACT_APP_API_URL` in `.env.development`
2. Remove mock implementations in `auth.service.js`
3. Update API endpoints in `api.js`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License

## Acknowledgments
- Material-UI for the component library
- React community for excellent documentation
## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License

## Acknowledgments
- Material-UI for the component library
- React community for excellent documentation


