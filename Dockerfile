FROM maven:3.9-eclipse-temurin-17

# Install Node.js
RUN apt-get update && apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

WORKDIR /app

# Copy and build frontend
COPY frontend /app/frontend
WORKDIR /app/frontend
RUN npm install && npm run build

# Copy frontend build to backend static resources
RUN mkdir -p /app/backend/src/main/resources/static
RUN cp -r build/* /app/backend/src/main/resources/static/

# Copy backend and build
COPY backend /app/backend
WORKDIR /app/backend
RUN mvn clean package -DskipTests

# Expose port
EXPOSE 8080

# Run the application
CMD ["java","-jar","target/pawsadopt-1.0.0.jar"]