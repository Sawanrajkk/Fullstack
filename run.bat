@echo off
echo Starting Full Stack Website...
echo.
echo Make sure PostgreSQL is running and database 'fullstack_db' exists
echo.
cd backend
mvn spring-boot:run
pause