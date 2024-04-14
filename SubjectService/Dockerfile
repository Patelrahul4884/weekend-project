# Dockerfile for SubjectService

# Use a base image with Node.js
FROM node:21-bookworm-slim

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# ENV SUBJECT_SERVICE_PORT=6001
# ENV SUBJECT_SERVICE_MONGO_URL=mongodb://subjectservice_mongodb:27017/subject_service
# ENV ORIGIN='["http://localhost:3000/","*"]'

# Expose the port
EXPOSE 6001

# Command to run the application
CMD ["node", "server.js"]
