@echo off
REM PawsAdopt Full Stack Startup Script for Windows

echo 🐾 Starting PawsAdopt Full Stack Application
echo ============================================

REM Check if backend directory exists
if not exist "backend" (
    echo ❌ Backend directory not found!
    pause
    exit /b 1
)

REM Check if frontend directory exists
if not exist "frontend" (
    echo ❌ Frontend directory not found!
    pause
    exit /b 1
)

REM Start Backend
echo.
echo 🔧 Building and starting Backend (Spring Boot)...
cd backend
call mvn clean install -q
start cmd /k "mvn spring-boot:run"
echo ✅ Backend started (new terminal window)

REM Wait for backend to initialize
echo ⏳ Waiting for backend to initialize...
timeout /t 5 /nobreak

REM Start Frontend
echo.
echo ⚛️  Installing and starting Frontend (React)...
cd ..\frontend

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installing npm dependencies...
    call npm install -q
)

start cmd /k "npm start"
echo ✅ Frontend started (new terminal window)

echo.
echo ============================================
echo 🎉 PawsAdopt is now running!
echo.
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:8080
echo H2 Console: http://localhost:8080/h2-console
echo.
echo Close any terminal window to stop that service
echo ============================================
