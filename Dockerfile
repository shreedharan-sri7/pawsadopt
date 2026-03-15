FROM eclipse-temurin:17-jdk
WORKDIR /app

COPY backend /app/backend
WORKDIR /app/backend

RUN ./mvnw clean package -DskipTests

CMD ["java","-jar","target/*.jar"]
