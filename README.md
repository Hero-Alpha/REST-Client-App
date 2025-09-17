# REST Client App

A modern **REST client** built with **React** (frontend) and **Node.js + Express + MikroORM** (backend).  
Send HTTP requests, view JSON responses, and manage request history efficiently with **pagination**.

---

## Features

- Send **GET, POST, PUT, DELETE** HTTP requests
- View **formatted JSON responses** instantly
- Maintain **request history** in MongoDB
- **New requests appear instantly** at the top
- **Pagination** for large datasets
- Clean and minimal **UI design**
- Built with **React, Axios, Node.js, Express, MikroORM**

---

## Tech Stack

| Frontend          | Backend                 | Database      | ORM      |
|-------------------|-------------------------|---------------|----------| 
| React, Axios, CSS | Node.js, Express, Axios | MongoDB Atlas | MikroORM |

---

## Project Structure

root/
├─ backend/
│  ├─ server.js
│  ├─ mikro-orm.config.js
│  ├─ routes/
│  ├─ entities/
│  └─ package.json
├─ frontend/
│  ├─ src/
│  ├─ public/
│  └─ package.json
└─ README.md


---

## Getting Started

### Backend

Navigate to the backend folder:

```bash
cd backend
npm install
Create a .env file:

env
Copy code
MONGO_URL=your_mongodb_connection_string
Run backend in development:

bash
Copy code
npm run dev
Run backend in production:

bash
Copy code
npm start
The backend runs on: http://localhost:5000

Frontend
Navigate to the frontend folder:

bash
Copy code
cd frontend
npm install
Run frontend in development:

bash
Copy code
npm start
The frontend runs on: http://localhost:3000

---
