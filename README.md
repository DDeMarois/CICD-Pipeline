# CI/CD Pipeline

As applications scale and evolve, ensuring that quality checks are met before merging into important branches becomes a priority for software engineers. Continuous Integration (CI) and Continuous Deployment (CD) are industry-standard practices that help achieve consistency, maintain code quality, and automate the deployment process. 
This repository integrates CI/CD practices to facilitate seamless and automated workflows for testing, validation, and deployment of your codebase.

## Overview

The Tech Quiz Application is a fully functional quiz app built using the MERN stack (MongoDB, Express.js, React, and Node.js). This code was implimented by using Continuous Integration (CI) and Continuos Deployment (CD) to ensure consistency, quality, and deployment of latest code once all checks have been met and merged to main. It allows users to answer 10 random tech-related questions and view their final scores. This project includes testing enhancements with Cypress, ensuring the app's reliability through component and end-to-end testing.

---

## Features

- Interactive Quiz:
   - Take a 10-question tech quiz.
   - View the final score upon quiz completion.

- Tech Stack:
   - Frontend: React.js
   - Backend: Node.js with Express.js
   - Database: MongoDB

- Testing:
   - Cypress for component testing.
   - Cypress for end-to-end testing.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DDeMarois/Tech-Quiz-Test-Suite.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGODB_URI='mongodb://127.0.0.1:27017/techquiz'
     ```

4. Build server:
   ```bash
   npm run build
   ```
   
5. Seed server:
   ```bash
   npm run seed
   ```

6. Start the server and client:
   ```bash
   npm run start:dev
   ```
   
---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Credits

- Drew DeMarois
- GitHub: DDeMarois
