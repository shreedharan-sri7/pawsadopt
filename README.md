# PawsAdopt - Pet Adoption Platform

A full-stack pet adoption application built with React, Tailwind CSS on the frontend and Java Spring Boot on the backend.

## 📋 Project Overview

PawsAdopt is a comprehensive pet adoption platform featuring:

- **Dynamic Pet Listings**: Browse dogs, cats, exotic animals with detailed information
- **Animal-Themed UI**: Colorful, engaging design with animal emojis and gradients
- **Secure Authentication**: Login and registration system
- **Pet Details**: Comprehensive information about each pet
- **Adoption System**: Apply for pet adoption with detailed forms
- **Customer Testimonials**: View and leave feedback from happy adoptions
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS

## 🏗️ Project Structure

```
PawsAdopt-FullStack/
├── frontend/                    # React + Tailwind CSS
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   └── PetCard.js
│   │   ├── pages/
│   │   │   ├── LoginPage.js
│   │   │   ├── HomePage.js
│   │   │   ├── PetDetailsPage.js
│   │   │   └── FeedbackPage.js
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── backend/                     # Java Spring Boot
    ├── src/main/java/com/pawsadopt/
    │   ├── controller/
    │   │   ├── PetController.java
    │   │   ├── UserController.java
    │   │   ├── AdoptionController.java
    │   │   └── FeedbackController.java
    │   ├── service/
    │   │   ├── PetService.java
    │   │   ├── UserService.java
    │   │   ├── AdoptionService.java
    │   │   └── FeedbackService.java
    │   ├── model/
    │   │   ├── Pet.java
    │   │   ├── User.java
    │   │   ├── Adoption.java
    │   │   └── Feedback.java
    │   ├── repository/
    │   │   ├── PetRepository.java
    │   │   ├── UserRepository.java
    │   │   ├── AdoptionRepository.java
    │   │   └── FeedbackRepository.java
    │   ├── config/
    │   │   └── CorsConfig.java
    │   ├── DataInitializer.java
    │   └── PawsAdoptApplication.java
    ├── src/main/resources/
    │   └── application.properties
    └── pom.xml
```

## 🚀 Features

### Frontend Features
- ✅ Responsive React UI
- ✅ Tailwind CSS for styling
- ✅ Animal-themed login page
- ✅ Pet browsing with filters
- ✅ Pet details and adoption forms
- ✅ Customer testimonials
- ✅ Navigation and routing

### Backend Features
- ✅ RESTful API endpoints
- ✅ CORS configuration
- ✅ H2 in-memory database
- ✅ Pet management
- ✅ User authentication
- ✅ Adoption request handling
- ✅ Feedback management
- ✅ Data initialization with sample pets

### Pet Categories
- 🐕 Dogs
- 🐱 Cats
- 🦜 Parrots
- 🐰 Rabbits
- 🦎 Lizards
- 🐢 Turtles
- And more exotic animals!

## 🛠️ Tech Stack

### Frontend
- React 18
- Tailwind CSS
- React Router DOM
- Axios (for API calls)

### Backend
- Java 17
- Spring Boot 3.0.6
- Spring Data JPA
- H2 Database
- Maven

## 📦 Installation & Setup

### Prerequisites
- Node.js & npm (for frontend)
- Java 17+ (for backend)
- Maven (for backend)

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will run on `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Build the project:
```bash
mvn clean install
```

3. Run the Spring Boot application:
```bash
mvn spring-boot:run
```

The API will run on `http://localhost:8080`

## 🔌 API Endpoints

### Pets
- `GET /api/pets` - Get all pets
- `GET /api/pets/available` - Get available pets
- `GET /api/pets/{id}` - Get pet by ID
- `GET /api/pets/type/{type}` - Get pets by type
- `POST /api/pets` - Create new pet
- `PUT /api/pets/{id}` - Update pet
- `DELETE /api/pets/{id}` - Delete pet

### Users
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/users/{id}` - Get user by ID
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

### Adoptions
- `POST /api/adoptions` - Submit adoption request
- `GET /api/adoptions/{id}` - Get adoption details
- `GET /api/adoptions/user/{userId}` - Get user adoptions
- `GET /api/adoptions/status/pending` - Get pending adoptions
- `PUT /api/adoptions/{id}/approve` - Approve adoption
- `PUT /api/adoptions/{id}/reject` - Reject adoption

### Feedback
- `POST /api/feedback` - Submit feedback
- `GET /api/feedback` - Get all feedback
- `GET /api/feedback/approved` - Get approved feedback
- `GET /api/feedback/{id}` - Get feedback by ID

## 👥 Sample Login Credentials

For demo purposes, you can use any email to login:
- Email: `user@example.com`
- Password: `password123` (or any password)

The app auto-approves logins for demo purposes.

## 🎨 Design Theme

The application features:
- **Color Scheme**: Orange, Pink, Purple gradients
- **Emojis**: Extensive use of animal emojis (🐾, 🐕, 🐱, 🦜, etc.)
- **Animations**: Subtle fade-in, slide-in, and bounce animations
- **Responsive**: Works on mobile, tablet, and desktop

## 🗂️ Database

The backend uses H2 in-memory database which:
- Auto-creates tables on startup
- Populates with 8 sample pets
- Resets on application restart
- Can access H2 console at `http://localhost:8080/h2-console`

## 🔄 How to Use

1. **Start Backend**:
   ```bash
   cd backend
   mvn spring-boot:run
   ```

2. **Start Frontend** (in new terminal):
   ```bash
   cd frontend
   npm start
   ```

3. **Login** to the application with any email

4. **Browse Pets** and filter by category

5. **View Pet Details** and submit adoption requests

6. **Leave Feedback** after adoption

## 🌟 Features to Explore

- Filter pets by type (Dogs, Cats, Exotic)
- Search for pets by name
- View detailed pet information
- Submit adoption applications
- Add customer testimonials
- Responsive mobile design

## 📝 Future Enhancements

- User authentication with JWT
- Payment integration
- Email notifications
- Admin dashboard
- Real database (PostgreSQL/MySQL)
- Image upload functionality
- Advanced search filters
- User reviews and ratings

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

## 📞 Contact

For questions or support, please reach out to info@pawsadopt.com

---

**Happy Pet Adopting! 🐾💕**
