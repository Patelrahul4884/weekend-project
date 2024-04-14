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

# ENV CHAT_SERVICE_PORT=3001
# ENV CHAT_SERVICE_MONGO_URL=mongodb://chatservice_mongodb:27017/chat_service
# ENV ORIGIN='["http://localhost:3000/","*"]'

# Expose the port
EXPOSE 3001

# Command to run the application
CMD ["node", "server.js"]
