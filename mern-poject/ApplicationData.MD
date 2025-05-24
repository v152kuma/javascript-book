# Application Data

## SPA Routes

### Public Routes
- `/`: Home page displaying a list of users.
- `/:uid/places`: Displays a list of places for the selected user.

### Authentication Routes
- `/authenticate`: Signup and login forms (accessible only to unauthenticated users).

### Protected Routes
- `/places/new`: Form to create a new place (accessible only to authenticated users).
- `/places/:pid`: Form to update an existing place (accessible only to authenticated users).
