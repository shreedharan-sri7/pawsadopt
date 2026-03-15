# Quick Start Guide 🚀

## 1. Clone or Download the Project

Navigate to the project root directory: `PawsAdopt-FullStack`

## 2. Automatic Startup (Recommended)

### Windows Users
Double-click on `start.bat` file, or open PowerShell/Command Prompt in the project root and run:
```bash
.\start.bat
```

### Mac/Linux Users
Open Terminal in the project root and run:
```bash
bash start.sh
```

This will automatically:
- Build the backend
- Start the backend server (port 8080)
- Install frontend dependencies
- Start the frontend (port 3000)

---

## 3. Manual Startup

### Option A: Start Backend First

1. Open Terminal/Command Prompt
2. Navigate to the backend folder:
   ```bash
   cd backend
   ```

3. Build and run:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

4. You should see: `Started PawsAdoptApplication in X.XXX seconds`

### Option B: Start Frontend

1. Open **new** Terminal/Command Prompt
2. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

3. Install dependencies (first time only):
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Browser will automatically open `http://localhost:3000`

---

## 4. Access the Application

### Frontend
- **URL**: http://localhost:3000
- **Login**: Use any email (demo mode)
- **Password**: Any password (demo mode)

### Backend API
- **URL**: http://localhost:8080/api

### Database Console (Optional)
- **URL**: http://localhost:8080/h2-console
- **JDBC URL**: `jdbc:h2:mem:testdb`
- **Username**: `sa`
- **Password**: (leave blank)

---

## 5. Test the Features

### 1️⃣ Login Page
- Sign up with a new account OR
- Login with any email/password (demo)
- See animal-themed design with emojis

### 2️⃣ Home Page
- Browse all available pets
- Filter by type (Dogs, Cats, Exotic)
- Search for specific pets
- View "Why Choose Us" section

### 3️⃣ View Pet Details
- Click any pet card
- See detailed information
- View personality traits
- Check health status
- Click "Start Adoption Process"

### 4️⃣ Adoption Form
- Fill out the adoption application
- Submit the form
- See confirmation message

### 5️⃣ Customer Feedback
- Click "Testimonials" in navbar
- View existing customer reviews
- Submit your own feedback
- See your review in the list

---

## 6. Available Pets

The system comes with 8 pre-loaded pets:

| 🐾 Pet | Type | Age | Fee |
|--------|------|-----|-----|
| Max | Dog (Golden Retriever) | 2y | $200 |
| Luna | Cat (Persian) | 1y | $150 |
| Buddy | Dog (Labrador) | 3y | $250 |
| Tweety | Parrot (Macaw) | 4y | $300 |
| Fluffy | Rabbit | 1y | $80 |
| Spike | Lizard (Bearded Dragon) | 5y | $180 |
| Shell | Turtle | 3y | $160 |
| Whiskers | Cat (Tabby) | 2y | $120 |

---

## 7. Troubleshooting

### Backend won't start
```bash
# Check if port 8080 is in use
# Change port in backend/src/main/resources/application.properties
server.port=8081
```

### Frontend won't start
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules
npm install
npm start
```

### Port 3000 already in use
```bash
PORT=3001 npm start
```

### CORS errors in browser console
- Ensure backend is running on `http://localhost:8080`
- Check that frontend is running on `http://localhost:3000`

---

## 8. Folder Structure

```
PawsAdopt-FullStack/
├── backend/              # Java Spring Boot API
├── frontend/             # React + Tailwind CSS
├── README.md            # Main documentation
├── QUICK_START.md       # This file
├── INTEGRATION_GUIDE.md  # API & Component docs
├── start.bat            # Windows startup
├── start.sh             # Mac/Linux startup
└── .env.example         # Environment variables
```

---

## 9. Technology Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, Tailwind CSS, React Router |
| Backend | Spring Boot 3, Java 17, Spring Data JPA |
| Database | H2 (In-Memory) |
| Build Tools | npm (Frontend), Maven (Backend) |

---

## 10. Key Features

✅ Animal-themed UI with emojis  
✅ Browse and filter pets  
✅ Detailed pet information  
✅ Adoption application system  
✅ Customer testimonials/feedback  
✅ Responsive mobile design  
✅ Real-time data updates  
✅ User authentication  
✅ RESTful API  
✅ CORS enabled  

---

## 11. Next Steps

1. **Explore the UI**: Browse through all pages and features
2. **Test APIs**: Use backend APIs directly
3. **Customize**: Add more pets, change colors, modify text
4. **Extend**: Add more features like payment, emails, etc.
5. **Deploy**: Push to GitHub and deploy to cloud

---

## 12. Support & Documentation

- **Main README**: See [README.md](README.md)
- **Frontend Setup**: See [frontend/README.md](frontend/README.md)
- **Backend Setup**: See [backend/README.md](backend/README.md)
- **API Guide**: See [INTEGRATION_GUIDE.md](INTEGRATION_GUIDE.md)

---

## 🎉 You're all set!

Start exploring PawsAdopt and help pets find their forever homes! 🐾💕

**Have fun and happy adopting!** 🐕🐱🦜🐰🦎🐢

---

*Last Updated: March 2024*
*Version: 1.0.0*
