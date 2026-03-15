# Deployment Guide

## 🌐 Production Deployment Options

### Option 1: Deploy to Cloud (Recommended)

#### Frontend Deployment

**Vercel** (Recommended for React)
```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to frontend
cd frontend

# Deploy
vercel
```

**Netlify**
```bash
# Build the project
npm run build

# Deploy the 'build' folder to Netlify
netlify deploy --prod
```

**GitHub Pages**
```bash
# Update package.json
"homepage": "https://yourusername.github.io/pawsadopt"

# Build
npm run build

# Deploy
npm run deploy
```

#### Backend Deployment

**Heroku**
```bash
# Login to Heroku
heroku login

# Create app
heroku create pawsadopt-backend

# Add PostgreSQL add-on
heroku addons:create heroku-postgresql:hobby-dev

# Deploy
git push heroku main
```

**AWS Elastic Beanstalk**
```bash
# Install EB CLI
pip install awsebcli

# Initialize
eb init -p java-17-corretto

# Create environment
eb create

# Deploy
eb deploy
```

---

### Option 2: Docker Containerization

#### Frontend Docker

Create `frontend/Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t pawsadopt-frontend .
docker run -p 3000:80 pawsadopt-frontend
```

#### Backend Docker

Create `backend/Dockerfile`:
```dockerfile
FROM maven:3.8.1-openjdk-17 AS build

WORKDIR /app

COPY . .

RUN mvn clean package -DskipTests

FROM openjdk:17-slim

WORKDIR /app

COPY --from=build /app/target/pawsadopt-*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
```

Build and run:
```bash
docker build -t pawsadopt-backend .
docker run -p 8080:8080 pawsadopt-backend
```

---

### Option 3: Docker Compose (Full Stack)

Create `docker-compose.yml`:
```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "8080:8080"
    environment:
      SPRING_DATASOURCE_URL: jdbc:h2:mem:testdb
    restart: unless-stopped

  frontend:
    build: ./frontend
    ports:
      - "3000:80"
    depends_on:
      - backend
    restart: unless-stopped
```

Run:
```bash
docker-compose up
```

---

### Option 4: Traditional Server Deployment

#### Linux Server (Ubuntu/Debian)

**Backend:**
```bash
# SSH into server
ssh user@your-server.com

# Install Java
sudo apt-get install openjdk-17-jdk

# Upload JAR file
scp backend/target/pawsadopt-*.jar user@your-server.com:~/

# Run
java -jar pawsadopt-*.jar
```

**Frontend:**
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install nodejs

# Build
npm run build

# Install Nginx
sudo apt-get install nginx

# Copy build to Nginx
sudo cp -r build/* /var/www/html/

# Start Nginx
sudo systemctl start nginx
```

---

## 🔌 Environment Configuration for Production

### Frontend `.env.production`
```
REACT_APP_API_URL=https://api.yourdomain.com
REACT_APP_APP_NAME=PawsAdopt
NODE_ENV=production
```

### Backend `application-prod.properties`
```properties
# Server
server.port=8080
server.servlet.context-path=/

# Database (Replace with real database)
spring.datasource.url=jdbc:postgresql://db-host:5432/pawsadopt
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQL10Dialect

# CORS
cors.allowed-origins=https://yourdomain.com,https://www.yourdomain.com

# Logging
logging.level.root=WARN
logging.level.com.pawsadopt=INFO
```

---

## 📋 Pre-Deployment Checklist

### Frontend
- [ ] Run `npm run build` successfully
- [ ] Test production build locally
- [ ] Update API URL in `.env.production`
- [ ] Run security audit: `npm audit`
- [ ] Optimize images
- [ ] Update meta tags in `public/index.html`
- [ ] Remove console.log statements
- [ ] Test responsiveness
- [ ] Test on multiple browsers

### Backend
- [ ] Switch to PostgreSQL/MySQL for production
- [ ] Update CORS allowed origins
- [ ] Set up environment variables
- [ ] Run security checks
- [ ] Enable HTTPS
- [ ] Configure database backup
- [ ] Set up logging
- [ ] Test all API endpoints
- [ ] Load testing

---

## 🛡️ Security Best Practices

### Frontend Security
- Use HTTPS only
- Set secure headers
- Implement CSP (Content Security Policy)
- Regular dependency updates
- Remove sensitive data from code

### Backend Security
- Use environment variables for secrets
- Enable HTTPS/TLS
- Implement authentication (JWT)
- SQLi prevention (use parameterized queries)
- CORS whitelist only trusted domains
- Regular dependency updates
- Implement rate limiting
- Add request validation

---

## 📈 Performance Optimization

### Frontend
```bash
# Code splitting
npm install @loadable/component

# Image optimization
npm install next-image

# Bundle analysis
npm install webpack-bundle-analyzer
```

### Backend
- Enable caching headers
- Use CDN for static files
- Implement pagination
- Add indexes to database
- Use connection pooling
- Enable compression
- Monitor performance

---

## 📊 Monitoring & Maintenance

### Frontend Monitoring
- Sentry for error tracking
- Google Analytics
- Core Web Vitals monitoring
- User behavior analytics

### Backend Monitoring
- ELK Stack for logging
- Prometheus for metrics
- Health check endpoints
- Database monitoring
- API performance tracking

---

## 🚀 Continuous Integration/Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    
    - name: Build Frontend
      working-directory: ./frontend
      run: |
        npm install
        npm run build
    
    - name: Build Backend
      working-directory: ./backend
      run: |
        mvn clean package
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        working-directory: ./frontend

    - name: Deploy to Heroku
      run: |
        git push https://heroku:${{ secrets.HEROKU_API_KEY }}@git.heroku.com/pawsadopt-backend.git main
```

---

## 🔄 Database Migration to PostgreSQL

1. **Install PostgreSQL driver**:
   ```xml
   <dependency>
       <groupId>org.postgresql</groupId>
       <artifactId>postgresql</artifactId>
       <version>42.5.0</version>
   </dependency>
   ```

2. **Update `application.properties`**:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/pawsadopt
   spring.datasource.username=postgres
   spring.datasource.password=your-password
   spring.jpa.database-platform=org.hibernate.dialect.PostgreSQL10Dialect
   ```

3. **Backup data and migrate**:
   ```bash
   pg_dump old_database > backup.sql
   psql new_database < backup.sql
   ```

---

## 📱 Mobile App Release

### iOS (React Native)
```bash
npm install -g @react-native-community/cli
react-native init PawsAdoptMobile
# Build for iOS
react-native run-ios
```

### Android (React Native)
```bash
react-native run-android
```

---

## 🎯 Post-Deployment

- Monitor error rates
- Track user engagement
- Optimize based on metrics
- Regular security audits
- Keep dependencies updated
- Backup data regularly
- Plan for scaling
- Gather user feedback

---

## 📞 Support

For deployment issues:
1. Check logs
2. Verify environment variables
3. Test database connection
4. Check CORS settings
5. Verify SSL certificates
6. Contact hosting support

---

*Happy Deploying! 🚀*
