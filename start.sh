#!/bin/bash
# PawsAdopt Full Stack Startup Script

echo "🐾 Starting PawsAdopt Full Stack Application"
echo "============================================"

# Check if backend directory exists
if [ ! -d "backend" ]; then
    echo "❌ Backend directory not found!"
    exit 1
fi

# Check if frontend directory exists
if [ ! -d "frontend" ]; then
    echo "❌ Frontend directory not found!"
    exit 1
fi

# Start Backend
echo ""
echo "🔧 Building and starting Backend (Spring Boot)..."
cd backend
mvn clean install > /dev/null 2>&1
mvn spring-boot:run &
BACKEND_PID=$!
echo "✅ Backend started with PID: $BACKEND_PID"

# Wait for backend to start
echo "⏳ Waiting for backend to initialize..."
sleep 5

# Start Frontend
echo ""
echo "⚛️  Installing and starting Frontend (React)..."
cd ../frontend

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing npm dependencies..."
    npm install > /dev/null 2>&1
fi

npm start &
FRONTEND_PID=$!
echo "✅ Frontend started with PID: $FRONTEND_PID"

echo ""
echo "============================================"
echo "🎉 PawsAdopt is now running!"
echo ""
echo "Frontend: http://localhost:3000"
echo "Backend:  http://localhost:8080"
echo "H2 Console: http://localhost:8080/h2-console"
echo ""
echo "Press Ctrl+C to stop all services"
echo "============================================"

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
