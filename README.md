# Boss-Machine
## API project Codecademy

## Project Overview
In this project, you will create an entire API to serve information to a Boss Machine, a unique management application for today’s most accomplished (evil) entrepreneurs. You will create routes to manage your ‘minions’, your brilliant ‘million dollar ideas’, and to handle all the annoying meetings that keep getting added to your busy schedule.

## Tasks
### Server Boilerplate
- Set up body-parsing middleware with the body-parser packagae.
- Set up CORS middleware with the cors package. You can use the default settings.
- Mount the existing apiRouter at /api. This router will serve as the starting point for all your API routes.
- Start the server listening on the provided PORT. Make sure to use the PORT constant and not a hard-coded number, as this is required for tests to run.

### API Routes
Routes Required
- /api/minions
    - GET /api/minions to get an array of all minions.
    - POST /api/minions to create a new minion and save it to the database.
    - GET /api/minions/:minionId to get a single minion by id.
    - PUT /api/minions/:minionId to update a single minion by id.
    - DELETE /api/minions/:minionId to delete a single minion by id.

- /api/ideas
    - GET /api/ideas to get an array of all ideas.
    - POST /api/ideas to create a new idea and save it to the database.
    - GET /api/ideas/:ideaId to get a single idea by id.
    - PUT /api/ideas/:ideaId to update a single idea by id.
    - DELETE /api/ideas/:ideaId to delete a single idea by id.

- /api/meetings
    - GET /api/meetings to get an array of all meetings.
    - POST /api/meetings to create a new meeting and save it to the database.
    - DELETE /api/meetings to delete all meetings from the database.

### Custom Middleware
You will create a custom middleware function checkMillionDollarIdea that will come in handy in some /api/ideas routes. Write this function in the server/checkMillionDollarIdea.js file. This function will make sure that any new or updated ideas are still worth at least one million dollars! The total value of an idea is the product of its numWeeks and weeklyRevenue properties.

### Bonus
As a bonus, you may implement routes to allow bosses to add and remove work from their minions’ backlogs.

- GET /api/minions/:minionId/work to get an array of all work for the specified minon.
- POST /api/minions/:minionId/work to create a new work object and save it to the database.
- PUT /api/minions/:minionId/work/:workId to update a single work by id.
- DELETE /api/minions/:minionId/work/:workId to delete a single work by id.
