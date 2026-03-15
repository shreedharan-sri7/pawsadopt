# Backend Setup & Build Guide

## Prerequisites
- Java 17 or higher
- Maven 3.8.1 or higher

## Build & Run

### Build the Project
```bash
cd backend
mvn clean install
```

### Run the Application
```bash
mvn spring-boot:run
```

The application will start on `http://localhost:8080`

## Project Structure

```
src/
├── main/
│   ├── java/com/pawsadopt/
│   │   ├── controller/      # REST Controllers
│   │   ├── service/         # Business logic
│   │   ├── model/           # Entity models
│   │   ├── repository/      # Data access
│   │   ├── config/          # Configuration
│   │   ├── DataInitializer.java
│   │   └── PawsAdoptApplication.java
│   └── resources/
│       └── application.properties
└── pom.xml
```

## API Endpoints

### Pets
- `GET /api/pets` - All pets
- `GET /api/pets/available` - Available pets
- `GET /api/pets/{id}` - Pet by ID
- `GET /api/pets/type/{type}` - Pets by type
- `POST /api/pets` - Create pet
- `PUT /api/pets/{id}` - Update pet
- `DELETE /api/pets/{id}` - Delete pet

### Users
- `POST /api/users/register` - Register
- `POST /api/users/login` - Login
- `GET /api/users/{id}` - User by ID
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

### Adoptions
- `POST /api/adoptions` - Create adoption request
- `GET /api/adoptions/{id}` - Adoption details
- `GET /api/adoptions/user/{userId}` - User adoptions
- `GET /api/adoptions/status/pending` - Pending adoptions
- `PUT /api/adoptions/{id}/approve` - Approve
- `PUT /api/adoptions/{id}/reject` - Reject
- `DELETE /api/adoptions/{id}` - Delete

### Feedback
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback` - All feedback
- `GET /api/feedback/approved` - Approved feedback
- `GET /api/feedback/{id}` - Feedback by ID
- `PUT /api/feedback/{id}/approve` - Approve feedback
- `DELETE /api/feedback/{id}` - Delete

## Database

Uses H2 in-memory database:
- Auto-creates schema on startup
- Pre-populated with 8 sample pets
- Console: `http://localhost:8080/h2-console`

### H2 Console Credentials
- JDBC URL: `jdbc:h2:mem:testdb`
- User Name: `sa`
- Password: (leave blank)

## CORS Configuration

Configured to allow requests from:
- `http://localhost:3000`
- `http://127.0.0.1:3000`

## Dependencies

- Spring Boot Web Starter
- Spring Data JPA
- H2 Database
- Lombok
- Spring Validation

## Maven Commands

```bash
# Clean build
mvn clean package

# Run tests
mvn test

# Check dependencies
mvn dependency:tree

# View project info
mvn project-info-reports:project-summary
```

## Troubleshooting

### Port 8080 already in use
```bash
# Change port in application.properties
server.port=8081
```

### Database connection error
The H2 database is in-memory, ensure the application has started properly.

### CORS errors
Check that the frontend is running on `http://localhost:3000`

## Docker (Optional)

To containerize the backend:

```bash
# Build Docker image
docker build -t pawsadopt-backend .

# Run container
docker run -p 8080:8080 pawsadopt-backend
```

## Production Build

```bash
# Package for production
mvn clean package

# Run JAR file
java -jar target/pawsadopt-1.0.0.jar
```

## Hot Reload

Spring Boot DevTools are included for automatic reload during development:
```bash
mvn spring-boot:run
```

Changes to source files will automatically reload the application.

## Logging

Configured in `application.properties`:
- Root level: INFO
- Application level: DEBUG

Change with:
```properties
logging.level.root=DEBUG
logging.level.com.pawsadopt=TRACE
```

---

For more information, see the main README.md
