# Dockerfile for RolesService

# Use a base image with Node.js
FROM node:21-bookworm-slim

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

ENV ROLES_SERVICE_PORT=5001
ENV ROLES_SERVICE_MONGO_URL=mongodb://rolesservice_mongodb:27017/roles_service
ENV ORIGIN='["http://localhost:3000/","*"]'

# Expose the port
EXPOSE 5001

# Command to run the application
CMD ["node", "server.js"]
