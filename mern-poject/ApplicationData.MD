# Application Data

## User(s)
- **Name**: The full name of the user.
- **E-Mail**: The email address of the user.
- **Password**: The password for the user's account.
- **Image**: A profile image for the user.

## Place(s)
- **Title**: The title or name of the place.
- **Description**: A detailed description of the place.
- **Address**: The physical address of the place.
- **Location**: The geographical coordinates (Latitude + Longitude) of the place.
- **Image**: An image representing the place.

## Relationships
- One user can create multiple places.
- One place belongs to exactly one user.

## API Endpoints
### User Endpoints
- **GET** `/api/users/`: Retrieve a list of all users.
- **POST** `/api/users/signup`: Create a new user and log them in.
- **POST** `/api/users/login`: Log a user in.

### Place Endpoints
- **GET** `/api/places/user/:uid`: Retrieve a list of all places for a given user ID (`uid`).
- **GET** `/api/places/:pid`: Get a specific place by place ID (`pid`).
- **POST** `/api/places/`: Create a new place.
- **PATCH** `/api/places/:pid`: Update a place by ID (`pid`).
- **DELETE** `/api/places/:pid`: Delete a place by ID (`pid`).

## SPA Routes

### User Routes
- `/`: List of all users (always reachable).
- `/:uid/places`: List of places for a selected user (always reachable).
- `/authenticate`: Signup and login forms (only for unauthenticated users).

### Place Routes
- `/places/new`: Form to create a new place (only for authenticated users).
- `/places/:pid`: Form to update an existing place (only for authenticated users).
- `/places/:pid/details`: View details of a specific place (always reachable).
- `/places/search`: Search for places by title or location (always reachable).
- `/places/map`: View all places on a map (always reachable).