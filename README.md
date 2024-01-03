 **# Employee Management Application**

**## Overview**

This application provides a user-friendly interface to manage employee data, leveraging a robust Spring Boot backend and a responsive React frontend. It supports the following essential CRUD (Create, Read, Update, Delete) operations on the Employees table:

- **Create:** Add new employees to the database.
- **Read:** Retrieve employee details for viewing and searching.
- **Update:** Modify existing employee information.
- **Delete:** Remove employees from the database.

**## Technology Stack**

- **Backend:**
    - Spring Boot (Java framework for building web applications)
    - Spring Data JPA (for data access and persistence)
    - MySQL Database
- **Frontend:**
    - React JS (JavaScript library for building user interfaces)
    - Axios (for making HTTP requests to the backend API)

**## Getting Started**

1. **Prerequisites:**
    - Java JDK 21 or higher
    - Node.js and npm (or yarn)
    - Maven or Gradle (for building the Spring Boot project)

2. **Clone the repository:**
    ```bash
    git clone https://github.com/marcosnasp/react-spring-boot-tutorial.git
    ```

3. **Build the backend:**
    ```bash
    cd ems-back/
    mvn clean install
    ```

4. **Start the backend server:**
    ```bash
    mvn spring-boot:run
    ```

5. **Install frontend dependencies:**
    ```bash
    cd ../ems-frontend
    npm install
    ```

6. **Run the frontend development server:**
    ```bash
    npm start
    ```

7. **Access the application:**
    Open http://localhost:3000 (or the specified port) in your browser.

**## Additional Information**

- **API Documentation:** [link to API documentation if available]
- **Deployment:** [Instructions for deployment to a production environment]
- **Contributing:** [Guidelines for contributing to the project]

**## License**

This project is licensed under the MIT License. See the `LICENSE` file for details.
