# Dockerfile for ChatService

# Use a base image with Node.js
FROM node:21-bookworm-slim

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

ENV CLASSROOM_SERVICE_PORT=4001
ENV CLASSROOM_SERVICE_MONGO_URL=mongodb://classroomservice_mongodb:27017/classroom_service
ENV ORIGIN='["http://localhost:3000/","*"]'

# Expose the port
EXPOSE 4001

# Command to run the application
CMD ["node", "server.js"]
