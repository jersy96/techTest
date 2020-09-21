# Backend

The following commands are required to run the project:

- cd backend
- npm install
- sqlite3 test_tech.db
- sequelize db:migrate
- sequelize db:seed:all
- npm run dev

# Frontend

The following commands are required to run the project:

- cd frontend
- npm install
- yarn start


# Not delivered parts

Due to time reasons I could not finish the backend functionalities. This is how I would have handle each of them:

### Activate the Login/Signup link in the main menu by showing a basic login dialog.

1. Create a component called Login.
2. Render the Login component in the route /Login instead of the simple "Login / Sign Up" text.

### If the user is already logged in, this link should be switched to a logout link.

1. For this I would have use redux to store the current user data on a reducer called authentication.
2. Pass the current user data from the VotingPage component.
3. Condition the text of the "Login / Sign Up" link to show Log out if the current user data is not empty.

### Persist the user data in the server side.

1. Crete a user table with the following fields:
  - id
  - email
  - password (encrypted)
  - name
  - birthdate
  - marriage status
2. Define a sequelize model called user.
3. Enable creation endpoint for users.


### Only logged in users can vote. (maximum 3 votes x box x user), and votes are persisted per user.

1. Disable the onClick event of the Thumbs if there is no current user data on the authentication reducer.
2. Remove the thumbsUp and thumbsDown fields from the person model.
3. Create a votes table with the following fields:
  - id
  - userId
  - personId
  - position (whether is up or down)
4. Create a vote model.
5. Add hasMany and belongs to associations to the models (Votes belongs to user and user has many votes)
6. Enable a create vote endpoint.
7. Only create the vote if the user has less than 3 votes for the corresponding person.

### Create the authentication system and an API with CRUD operations that allows to modify the user information.

1. Use JWT to manage the authentication of the system.
2. Enable endpoints for the user's CRUD operations.

### Create an API endpoint that shows votes x user

1. Add route for the endpoint
2. Get the associated votes of the user with Vote.findAll({ where: { userId: req.params.userId } })
3. Respond the votes.