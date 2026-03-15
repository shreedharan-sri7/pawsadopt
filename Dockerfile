FROM maven:3.9.9-eclipse-temurin-17

WORKDIR /app
<<<<<<< HEAD
COPY backend /app/backend
=======
COPY . .
>>>>>>> 9e40f9cfa26af9eaa3c9845ab5332db7ee577045

WORKDIR /app/backend
RUN mvn clean package -DskipTests

<<<<<<< HEAD
EXPOSE 8080

CMD ["java","-jar","target/*.jar"]
=======
CMD ["java","-jar","target/*.jar"]
>>>>>>> 9e40f9cfa26af9eaa3c9845ab5332db7ee577045
