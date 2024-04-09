# Social Network API

## Overview
This API provides endpoints for managing users, thoughts, reactions, and friend connections in a social network platform.

## API Routes
- **Users**
  - GET `/api/users`: Get all users
  - POST `/api/users`: Create a new user
  - PUT `/api/users/:userId`: Update a user
  - DELETE `/api/users/:userId`: Delete a user

- **Thoughts**
  - GET `/api/thoughts`: Get all thoughts
  - POST `/api/thoughts`: Create a new thought
  - PUT `/api/thoughts/:thoughtId`: Update a thought
  - DELETE `/api/thoughts/:thoughtId`: Delete a thought

- **Reactions**
  - POST `/api/thoughts/:thoughtId/reactions`: Add a reaction to a thought
  - DELETE `/api/thoughts/:thoughtId/reactions/:reactionId`: Delete a reaction from a thought

- **Friendship**
  - POST `/api/users/:userId/friends/:friendId`: Add a friend
  - DELETE `/api/users/:userId/friends/:friendId`: Remove a friend

## Testing with Insomnia
1. Open Insomnia and import the provided workspace file.
2. Use the API routes mentioned above to test CRUD operations.

## Technologies Used
- Express.js
- Mongoose
- MongoDB

## Contributing
Matheus Almeida

## License
MIT License
