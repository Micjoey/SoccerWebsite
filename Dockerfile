# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install any dependencies
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Build the application if necessary (uncomment if you have a build script)
# RUN npm run build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "run", "start-backend"]
