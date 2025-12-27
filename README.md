# Full Stack Website with Spring Boot and PostgreSQL

A complete full-stack web application built with Spring Boot backend and PostgreSQL database.

## Features

- User Management System (CRUD operations)
- RESTful API endpoints
- Web interface with Thymeleaf templates
- PostgreSQL database integration
- Form validation
- Responsive Bootstrap UI

## Prerequisites

- Java 17 or higher
- Maven 3.6+
- PostgreSQL 12+

## Database Setup

1. Install PostgreSQL and create a database:
```sql
CREATE DATABASE fullstack_db;
```

2. Update database credentials in `backend/src/main/resources/application.properties`:
```properties
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## Running the Application

1. Navigate to the backend directory:
```bash
cd backend
```

2. Run the application:
```bash
mvn spring-boot:run
```

3. Access the application:
- Web Interface: http://localhost:8080
- API Endpoints: http://localhost:8080/api/users

## API Endpoints

- `GET /api/users` - Get all users
- `GET /api/users/{id}` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

## Web Interface

- `/` - Home page with users list
- `/users/new` - Add new user form
- `/users/edit/{id}` - Edit user form

## Project Structure

```
backend/
├── src/main/java/com/fullstack/
│   ├── FullstackWebsiteApplication.java
│   ├── controller/
│   │   ├── UserApiController.java
│   │   └── UserWebController.java
│   ├── entity/
│   │   └── User.java
│   ├── repository/
│   │   └── UserRepository.java
│   └── service/
│       └── UserService.java
├── src/main/resources/
│   ├── templates/
│   │   ├── index.html
│   │   └── user-form.html
│   ├── static/
│   │   └── style.css
│   └── application.properties
└── pom.xml
```

## Technologies Used

- Spring Boot 3.2.0
- Spring Data JPA
- Spring Web
- Thymeleaf
- PostgreSQL
- Bootstrap 5
- Maven