<<<<<<< HEAD
# Component & API Integration Guide

## Frontend Components Overview

### Pages

#### LoginPage.js
- Animal-themed login/signup page
- Form validation
- Auto-login for demo
- Animated background with animal emojis

**Features:**
- Toggle between login and signup
- Email and password fields
- Name field for signup
- Animal emoji animations

#### HomePage.js
- Display all available pets
- Filter by category (dogs, cats, exotic)
- Search functionality
- Pet cards with quick info
- "Why Choose Us" section

**Features:**
- Dynamic pet filtering
- Category buttons with emojis
- Search bar
- Responsive grid layout
- Statistics display

#### PetDetailsPage.js
- Detailed pet information
- Pet characteristics display
- Health information
- Adoption application form
- Pet personality traits

**Features:**
- Dynamic pet data loading
- Adoption form with validation
- Key info display
- Personality traits
- Health status

#### FeedbackPage.js
- Customer testimonials
- Feedback submission form
- Rating system (stars)
- Feedback display with pagination
- Happy customers statistics

**Features:**
- Star rating selector
- Feedback form submission
- Review display
- Statistics cards
- CTA section

### Components

#### Navbar.js
- Navigation menu
- User profile display
- Logout functionality
- Mobile responsive menu
- Theme-colored gradient

#### Footer.js
- Footer information
- Quick links
- Contact information
- Copyright notice

#### PetCard.js
- Pet card display
- Pet image/emoji
- Quick info display
- Rating display
- Adoption fee
- Hover animations

## API Integration

### Backend API Base URL
```
http://localhost:8080/api
```

### Pet Endpoints

**Get All Pets**
```javascript
GET /api/pets
Response: Array of Pet objects
```

**Get Available Pets**
```javascript
GET /api/pets/available
Response: Array of available Pet objects
```

**Get Pet by ID**
```javascript
GET /api/pets/{id}
Response: Single Pet object
```

**Get Pets by Type**
```javascript
GET /api/pets/type/{type}
Response: Array of Pet objects by type
```

### User Endpoints

**Register User**
```javascript
POST /api/users/register
Body: { name, email, password, phone, address }
Response: { success, message, user }
```

**Login User**
```javascript
POST /api/users/login
Body: { email, password }
Response: { success, message, user }
```

### Adoption Endpoints

**Create Adoption Request**
```javascript
POST /api/adoptions
Body: { pet_id, user_id, reason, adoption_fee }
Response: Adoption object
```

**Get User Adoptions**
```javascript
GET /api/adoptions/user/{userId}
Response: Array of Adoption objects
```

### Feedback Endpoints

**Submit Feedback**
```javascript
POST /api/feedback
Body: { name, petName, rating, feedbackText }
Response: Feedback object
```

**Get All Feedback**
```javascript
GET /api/feedback
Response: Array of Feedback objects
```

## Integration Example

### Fetching Pets in HomePage.js

```javascript
// In HomePage.js
const [pets, setPets] = useState([]);

useEffect(() => {
  fetch('http://localhost:8080/api/pets/available')
    .then(res => res.json())
    .then(data => setPets(data))
    .catch(err => console.error('Error:', err));
}, []);
```

### Submitting Adoption Request

```javascript
// In PetDetailsPage.js
const handleAdoptSubmit = async (e) => {
  e.preventDefault();
  
  const adoptionData = {
    pet_id: pet.id,
    user_id: userId,
    reason: textareaValue,
    adoption_fee: pet.adoptionFee
  };

  try {
    const response = await fetch('http://localhost:8080/api/adoptions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(adoptionData)
    });
    
    const data = await response.json();
    console.log('Adoption submitted:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## Styling with Tailwind CSS

### Custom Colors (from tailwind.config.js)
- Primary: `#FF6B5B` (Red/Orange)
- Secondary: `#4ECDC4` (Teal)
- Accent: `#FFE66D` (Yellow)
- Dark: `#2C3E50` (Dark Blue)
- Light: `#ECF0F1` (Light Gray)

### Utility Classes Used
- `bg-gradient-to-r` - Horizontal gradients
- `bg-gradient-to-br` - Diagonal gradients
- `rounded-dynamic` - Custom border radius
- `fade-in` - Custom fade animation
- `slide-in` - Custom slide animation
- `bounce-subtle` - Custom bounce animation

## Data Models

### Pet Model
```java
Long id
String name
String type (Dog, Cat, Parrot, Rabbit, Lizard, Turtle)
String breed
Integer age
String color
Double weight
String description
Double adoptionFee
Double rating
String health
Boolean available
String personality
```

### User Model
```java
Long id
String name
String email
String password
String phone
String address
String role
```

### Adoption Model
```java
Long id
Pet pet
User user
String status (PENDING, APPROVED, REJECTED, COMPLETED)
String reason
Double adoptionFee
String adoptionDate
```

### Feedback Model
```java
Long id
String name
String petName
Integer rating
String feedbackText
Boolean approved
```

## Error Handling

### Frontend Error States
- No pets found message
- Loading states
- Form validation errors
- Network error messages

### Backend Error Responses
- 404 Not Found
- 400 Bad Request
- 401 Unauthorized
- 500 Internal Server Error

## CORS Configuration

Configured in `CorsConfig.java`:
```
Allowed Origins: http://localhost:3000, http://127.0.0.1:3000
Allowed Methods: GET, POST, PUT, DELETE, OPTIONS
Allowed Headers: All
Max Age: 3600 seconds
```

---

For more details, refer to the main README.md and component files.
=======
# Component & API Integration Guide

## Frontend Components Overview

### Pages

#### LoginPage.js
- Animal-themed login/signup page
- Form validation
- Auto-login for demo
- Animated background with animal emojis

**Features:**
- Toggle between login and signup
- Email and password fields
- Name field for signup
- Animal emoji animations

#### HomePage.js
- Display all available pets
- Filter by category (dogs, cats, exotic)
- Search functionality
- Pet cards with quick info
- "Why Choose Us" section

**Features:**
- Dynamic pet filtering
- Category buttons with emojis
- Search bar
- Responsive grid layout
- Statistics display

#### PetDetailsPage.js
- Detailed pet information
- Pet characteristics display
- Health information
- Adoption application form
- Pet personality traits

**Features:**
- Dynamic pet data loading
- Adoption form with validation
- Key info display
- Personality traits
- Health status

#### FeedbackPage.js
- Customer testimonials
- Feedback submission form
- Rating system (stars)
- Feedback display with pagination
- Happy customers statistics

**Features:**
- Star rating selector
- Feedback form submission
- Review display
- Statistics cards
- CTA section

### Components

#### Navbar.js
- Navigation menu
- User profile display
- Logout functionality
- Mobile responsive menu
- Theme-colored gradient

#### Footer.js
- Footer information
- Quick links
- Contact information
- Copyright notice

#### PetCard.js
- Pet card display
- Pet image/emoji
- Quick info display
- Rating display
- Adoption fee
- Hover animations

## API Integration

### Backend API Base URL
```
http://localhost:8080/api
```

### Pet Endpoints

**Get All Pets**
```javascript
GET /api/pets
Response: Array of Pet objects
```

**Get Available Pets**
```javascript
GET /api/pets/available
Response: Array of available Pet objects
```

**Get Pet by ID**
```javascript
GET /api/pets/{id}
Response: Single Pet object
```

**Get Pets by Type**
```javascript
GET /api/pets/type/{type}
Response: Array of Pet objects by type
```

### User Endpoints

**Register User**
```javascript
POST /api/users/register
Body: { name, email, password, phone, address }
Response: { success, message, user }
```

**Login User**
```javascript
POST /api/users/login
Body: { email, password }
Response: { success, message, user }
```

### Adoption Endpoints

**Create Adoption Request**
```javascript
POST /api/adoptions
Body: { pet_id, user_id, reason, adoption_fee }
Response: Adoption object
```

**Get User Adoptions**
```javascript
GET /api/adoptions/user/{userId}
Response: Array of Adoption objects
```

### Feedback Endpoints

**Submit Feedback**
```javascript
POST /api/feedback
Body: { name, petName, rating, feedbackText }
Response: Feedback object
```

**Get All Feedback**
```javascript
GET /api/feedback
Response: Array of Feedback objects
```

## Integration Example

### Fetching Pets in HomePage.js

```javascript
// In HomePage.js
const [pets, setPets] = useState([]);

useEffect(() => {
  fetch('http://localhost:8080/api/pets/available')
    .then(res => res.json())
    .then(data => setPets(data))
    .catch(err => console.error('Error:', err));
}, []);
```

### Submitting Adoption Request

```javascript
// In PetDetailsPage.js
const handleAdoptSubmit = async (e) => {
  e.preventDefault();
  
  const adoptionData = {
    pet_id: pet.id,
    user_id: userId,
    reason: textareaValue,
    adoption_fee: pet.adoptionFee
  };

  try {
    const response = await fetch('http://localhost:8080/api/adoptions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(adoptionData)
    });
    
    const data = await response.json();
    console.log('Adoption submitted:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## Styling with Tailwind CSS

### Custom Colors (from tailwind.config.js)
- Primary: `#FF6B5B` (Red/Orange)
- Secondary: `#4ECDC4` (Teal)
- Accent: `#FFE66D` (Yellow)
- Dark: `#2C3E50` (Dark Blue)
- Light: `#ECF0F1` (Light Gray)

### Utility Classes Used
- `bg-gradient-to-r` - Horizontal gradients
- `bg-gradient-to-br` - Diagonal gradients
- `rounded-dynamic` - Custom border radius
- `fade-in` - Custom fade animation
- `slide-in` - Custom slide animation
- `bounce-subtle` - Custom bounce animation

## Data Models

### Pet Model
```java
Long id
String name
String type (Dog, Cat, Parrot, Rabbit, Lizard, Turtle)
String breed
Integer age
String color
Double weight
String description
Double adoptionFee
Double rating
String health
Boolean available
String personality
```

### User Model
```java
Long id
String name
String email
String password
String phone
String address
String role
```

### Adoption Model
```java
Long id
Pet pet
User user
String status (PENDING, APPROVED, REJECTED, COMPLETED)
String reason
Double adoptionFee
String adoptionDate
```

### Feedback Model
```java
Long id
String name
String petName
Integer rating
String feedbackText
Boolean approved
```

## Error Handling

### Frontend Error States
- No pets found message
- Loading states
- Form validation errors
- Network error messages

### Backend Error Responses
- 404 Not Found
- 400 Bad Request
- 401 Unauthorized
- 500 Internal Server Error

## CORS Configuration

Configured in `CorsConfig.java`:
```
Allowed Origins: http://localhost:3000, http://127.0.0.1:3000
Allowed Methods: GET, POST, PUT, DELETE, OPTIONS
Allowed Headers: All
Max Age: 3600 seconds
```

---

For more details, refer to the main README.md and component files.
>>>>>>> 9e40f9cfa26af9eaa3c9845ab5332db7ee577045
