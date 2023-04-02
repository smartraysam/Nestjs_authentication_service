# Auth service
Backend   NestJs running on port 3001
DB: Postgres


Alway run `yarn install` if you make git pull
## Backend
### Running the backend
The backend require postgresDB, Redis and RabbitMQ setup on your local machine

`cd backend` from the root directory
Run `yarn install` to install all dependency
Run `yarn start:dev` to run the application in developer mode


# Run Application in Docker evnironment
## Docker Setup

Run `docker compose up --build` for the root directory to start development environment
This will start all neccessary service to run the application including the frontend and backend

Run `docker compose down` stop all services
