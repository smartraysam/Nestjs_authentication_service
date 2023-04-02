# Use the official Node.js 16 image as the base image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY tsconfig*.json .
COPY package*.json .
COPY yarn.lock .

# Install the app's dependencies
RUN yarn install

# Copy the rest of the app's source code to the container
COPY . .

# Build the Nest.js app
RUN yarn build

EXPOSE 3001

# Set the command to start the app
CMD ["yarn", "start:dev"]
