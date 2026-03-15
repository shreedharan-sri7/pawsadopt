# 🐾 PawsAdopt Architecture Overview

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        INTERNET / USERS                          │
└────────────────────────┬──────────────────────────────────────┘
                         │
        ┌────────────────┴────────────────┐
        │                                 │
    ┌───▼────────────────────────────┐   │
    │  FRONTEND (React + Tailwind)   │   │
    │  Port: 3000                    │   │
    ├────────────────────────────────┤   │
    │ Pages:                         │   │
    │  ├─ LoginPage                  │   │
    │  ├─ HomePage                   │   │
    │  ├─ PetDetailsPage             │   │
    │  └─ FeedbackPage               │   │
    │                                │   │
    │ Components:                    │   │
    │  ├─ Navbar                     │   │
    │  ├─ Footer                     │   │
    │  └─ PetCard                    │   │
    │                                │   │
    │ Styling:                       │   │
    │  └─ Tailwind CSS + Animations  │   │
    └───┬────────────────────────────┘   │
        │                                │
        │ REST API Calls                 │
        │ (JSON over HTTP)               │
        │                                │
    ┌───▼────────────────────────────┐   │
    │  BACKEND (Spring Boot)         │   │
    │  Port: 8080                    │   │
    ├────────────────────────────────┤   │
    │ Controllers:                   │   │
    │  ├─ PetController              │   │
    │  ├─ UserController             │   │
    │  ├─ AdoptionController         │   │
    │  └─ FeedbackController         │   │
    │                                │   │
    │ Services:                      │   │
    │  ├─ PetService                 │   │
    │  ├─ UserService                │   │
    │  ├─ AdoptionService            │   │
    │  └─ FeedbackService            │   │
    │                                │   │
    │ Repositories:                  │   │
    │  ├─ PetRepository              │   │
    │  ├─ UserRepository             │   │
    │  ├─ AdoptionRepository         │   │
    │  └─ FeedbackRepository         │   │
    │                                │   │
    │ Config:                        │   │
    │  └─ CorsConfig                 │   │
    └───┬────────────────────────────┘   │
        │                                │
        │ JPA/SQL Queries                │
        │                                │
    ┌───▼────────────────────────────┐   │
    │  DATABASE (H2 In-Memory)       │   │
    ├────────────────────────────────┤   │
    │ Tables:                        │   │
    │  ├─ pets (8 pre-loaded)        │   │
    │  ├─ users                      │   │
    │  ├─ adoptions                  │   │
    │  └─ feedback                   │   │
    └────────────────────────────────┘   │
                                         │
    (Optional) H2 Console ─────────────┘
    URL: http://localhost:8080/h2-console
```

---

## Data Flow Diagram

### User Authentication Flow
```
User Types Credentials
        │
        ▼
┌─────────────────────────┐
│   LoginPage Component   │
│ (React Frontend)        │
└────────┬────────────────┘
         │
         │ POST /api/users/login
         │
         ▼
┌─────────────────────────────────┐
│   UserController (Backend)      │
│ - Validates credentials         │
│ - Calls UserService             │
└────────┬────────────────────────┘
         │
         ▼
┌─────────────────────────────────┐
│   UserService                   │
│ - Business logic                │
│ - Calls UserRepository          │
└────────┬────────────────────────┘
         │
         ▼
┌─────────────────────────────────┐
│   UserRepository                │
│ - Queries H2 Database           │
│ - Returns User object           │
└────────┬────────────────────────┘
         │
         │ User object (JSON)
         ▼
┌─────────────────────────────────┐
│   Frontend Stores User           │
│ - Updates App State             │
│ - Redirects to HomePage         │
└─────────────────────────────────┘
```

### Pet Browsing Flow
```
User Visits HomePage
        │
        ▼
┌──────────────────────────┐
│  HomePage Component      │
│  - Fetches pets          │
│  - Displays pet list     │
└────┬─────────────────────┘
     │
     │ GET /api/pets/available
     │
     ▼
┌──────────────────────────┐
│  PetController           │
│  - Receives request      │
│  - Calls PetService      │
└────┬─────────────────────┘
     │
     ▼
┌──────────────────────────┐
│  PetService              │
│  - Business logic        │
│  - Calls PetRepository   │
└────┬─────────────────────┘
     │
     ▼
┌──────────────────────────┐
│  PetRepository           │
│  - Queries H2 Database   │
│  - Returns Pet list      │
└────┬─────────────────────┘
     │
     │ pets[] (JSON)
     ▼
┌──────────────────────────┐
│  HomePage displays in    │
│  PetCard components      │
│  with filter & search    │
└──────────────────────────┘
```

### Adoption Request Flow
```
User Submits Form
        │
        ▼
┌──────────────────────────┐
│  PetDetailsPage          │
│  - Collects form data    │
│  - Validates input       │
└────┬─────────────────────┘
     │
     │ POST /api/adoptions
     │ (adoption object)
     │
     ▼
┌──────────────────────────┐
│  AdoptionController      │
│  - Receives request      │
│  - Calls AdoptionService │
└────┬─────────────────────┘
     │
     ▼
┌──────────────────────────┐
│  AdoptionService         │
│  - Sets status: PENDING  │
│  - Calls Repository      │
└────┬─────────────────────┘
     │
     ▼
┌──────────────────────────┐
│  AdoptionRepository      │
│  - Saves to H2 Database  │
│  - Returns adoption obj  │
└────┬─────────────────────┘
     │
     │ adoption (JSON)
     ▼
┌──────────────────────────┐
│  Frontend shows success  │
│  message to user         │
└──────────────────────────┘
```

---

## Component Hierarchy

```
App (Main Component)
├── LoginPage (if not logged in)
│   └── LoginForm
│       ├── EmailInput
│       ├── PasswordInput
│       └── SubmitButton
│
├── Navbar (if logged in)
│   ├── Logo
│   ├── NavLinks
│   ├── UserProfile
│   ├── LogoutButton
│   └── MobileMenu
│
├── HomePage
│   ├── SearchBar
│   ├── CategoryFilters
│   ├── PetGrid
│   │   └── PetCard (x8+)
│   │       ├── PetImage
│   │       ├── PetInfo
│   │       ├── Rating
│   │       ├── Price
│   │       └── ViewButton
│   └── WhyChooseUs
│       └── FeatureCard (x3)
│
├── PetDetailsPage
│   ├── PetImage
│   ├── PetInfo
│   │   ├── BasicInfo
│   │   ├── Personality
│   │   └── HealthInfo
│   ├── AdoptionButton
│   └── AdoptionForm (if clicked)
│       ├── NameInput
│       ├── EmailInput
│       ├── PhoneInput
│       ├── AddressInput
│       ├── ReasonTextarea
│       ├── CheckboxAgreement
│       └── SubmitButton
│
├── FeedbackPage
│   ├── FeedbackForm
│   │   ├── NameInput
│   │   ├── PetNameInput
│   │   ├── RatingSelector
│   │   ├── FeedbackTextarea
│   │   └── SubmitButton
│   ├── Statistics
│   │   ├── TotalReviews
│   │   ├── AverageRating
│   │   └── HappyFamilies
│   └── ReviewList
│       └── ReviewCard (x4+)
│
└── Footer
    ├── AboutSection
    ├── QuickLinks
    ├── ContactInfo
    └── Copyright
```

---

## API Endpoint Diagram

```
                    Backend Server
                   (localhost:8080)
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
    ┌────────────┐   ┌─────────────┐   ┌────────────┐
    │ /api/pets  │   │ /api/users  │   │ /api/      │
    │            │   │             │   │ adoptions  │
    ├────────────┤   ├─────────────┤   ├────────────┤
    │ GET        │   │ POST login  │   │ POST       │
    │ GET/:id    │   │ POST reg    │   │ GET/:id    │
    │ GET/type   │   │ GET/:id     │   │ GET/user   │
    │ POST       │   │ PUT/:id     │   │ PUT approve│
    │ PUT/:id    │   │ DELETE/:id  │   │ DELETE/:id │
    │ DELETE/:id │   │             │   │            │
    └────────────┘   └─────────────┘   └────────────┘
                            │
                            │
                     ┌──────▼───────┐
                     │ /api/feedback│
                     ├───────────────┤
                     │ POST          │
                     │ GET           │
                     │ GET/approved  │
                     │ DELETE/:id    │
                     └────────────────┘
```

---

## Technology Stack Diagram

```
┌──────────────────────────────────────────────────────────┐
│                    FRONTEND LAYER                        │
│  ┌────────────────────────────────────────────────────┐  │
│  │ React 18 + React Router                            │  │
│  │ - Component-based UI                               │  │
│  │ - Client-side routing                              │  │
│  │ - State management (useState, useEffect)           │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Tailwind CSS 3                                      │  │
│  │ - Utility-first CSS                                │  │
│  │ - Responsive design                                │  │
│  │ - Custom animations                                │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Axios                                               │  │
│  │ - Promise-based HTTP client                        │  │
│  │ - API communication                                │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
                          ⬆⬇
                    REST API (JSON)
                          ⬇⬆
┌──────────────────────────────────────────────────────────┐
│                    BACKEND LAYER                         │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Spring Boot 3.0.6                                  │  │
│  │ - REST API framework                               │  │
│  │ - Dependency injection                             │  │
│  │ - Auto-configuration                               │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Spring Data JPA                                    │  │
│  │ - ORM framework                                    │  │
│  │ - Database abstraction                             │  │
│  │ - Query methods                                    │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Hibernate                                           │  │
│  │ - JPA implementation                               │  │
│  │ - Entity mapping                                   │  │
│  └────────────────────────────────────────────────────┘  │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Lombok                                              │  │
│  │ - Java annotation processor                        │  │
│  │ - Code generation (getters, setters)               │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
                          ⬇⬆
                   SQL Queries
                          ⬇⬆
┌──────────────────────────────────────────────────────────┐
│                   DATABASE LAYER                         │
│  ┌────────────────────────────────────────────────────┐  │
│  │ H2 Database (In-Memory)                            │  │
│  │ ┌──────────────────────────────────────────────┐   │  │
│  │ │ Tables:                                       │   │  │
│  │ │  - pets (8 records)                           │   │  │
│  │ │  - users (0+ records)                         │   │  │
│  │ │  - adoptions (0+ records)                     │   │  │
│  │ │  - feedback (0+ records)                      │   │  │
│  │ └──────────────────────────────────────────────┘   │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

---

## Deployment Architecture

```
Development Environment
    ├── Frontend: localhost:3000
    ├── Backend: localhost:8080
    └── Database: H2 In-Memory
            │
            │ npm run build
            │ mvn package
            │
Production Environment
    ├── Frontend (Vercel/Netlify)
    │   └── CDN: Static files
    │
    ├── Backend (Heroku/AWS/Azure)
    │   └── API: REST endpoints
    │
    └── Database (PostgreSQL/MySQL)
        └── Persistent storage
```

---

## Request/Response Cycle

```
Frontend                          Backend
  │                                 │
  ├─ User Action                    │
  │  (click, form submit)           │
  │                                 │
  ├─ Prepare Request                │
  │  (data, headers)                │
  │                                 │
  ├─ axios/fetch                    │
  │  └──────────────────────────────►│
  │                                 │ Route to Controller
  │                                 │ Validate Input
  │                                 │ Call Service
  │                                 │ Call Repository
  │                                 │ Query Database
  │                                 │
  │  ◄──────────────────────────────┤
  │       JSON Response             │
  │                                 │
  ├─ Parse JSON                     │
  ├─ Update State                   │
  ├─ Re-render Component            │
  │                                 │
  └─ Display to User                │
```

---

## Key Integrations

```
Frontend
  │
  ├─► React Component
  │   └─► useState/useContext
  │       └─► axios.get/post/put/delete
  │           └─► REST API
  │
  └─► Tailwind CSS
      └─► Custom Animations
          └─► User Experience

Backend
  │
  ├─► HTTP Request
  │   └─► Spring Router
  │       └─► Controller Method
  │           └─► Service Layer
  │               └─► Repository
  │                   └─► JPA
  │                       └─► H2 Database
  │
  └─► Return JSON Response
      └─► Frontend displays data
```

---

*This architecture diagram visualizes the complete flow of the PawsAdopt application.*
