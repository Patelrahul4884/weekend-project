# Dockerfile for UserService

# Use a base image with Node.js
FROM node:21-bookworm-slim

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Expose the port
EXPOSE 7001

# Command to run the application
CMD ["node", "server.js"]
