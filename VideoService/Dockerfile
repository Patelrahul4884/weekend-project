# Dockerfile for VideoService

# Use a base image with Node.js
FROM node:21-bookworm-slim

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

ENV VIDEO_SERVICE_PORT=8001
ENV VIDEO_SERVICE_MONGO_URL=mongodb://videoservice_mongodb:27017/video_service
ENV ORIGIN='["http://localhost:3000/","*"]'

# Expose the port
EXPOSE 8001

# Command to run the application
CMD ["node", "server.js"]
