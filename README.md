# 202210_S2_E2

# Wheels

# 🚗 Wheels - Carpooling Web App (Full Stack)

**Wheels** is a full-stack carpooling web app developed as a graduation project at Universidad de los Andes.  
It allows users within the university to **offer** or **join** shared rides securely, promoting community-driven mobility.

The platform is inspired by services like Uber or Didi, but adapted for internal use. The project includes both **frontend and backend**, fully developed by one person using scalable and modern technologies.

🏆 **Awarded Best Innovative Project** at Universidad de los Andes.

---

## 🌐 Live Demo

🔗 [https://app-wheels-uniandes.herokuapp.com](https://app-wheels-uniandes.herokuapp.com)

🎥 [Functionality Video](https://youtu.be/37pe-a_cOmc)  
🎥 [Demo Walkthrough](https://youtu.be/GFCHY5FEaYo)

---

## 🧠 Tech Stack

### 🔹 Frontend
- React.js (Vite)
- Tailwind CSS
- React Router
- React Hook Form + Zod

### 🔹 Backend
- NestJS (Node.js)
- PostgreSQL + Prisma ORM
- JWT Authentication
- RESTful API

---

## ✨ Functionality Overview

👤 **User Roles**
- **Passenger:** Can register, login, view available rides, reserve and cancel seats.
- **Driver:** Inherits all passenger features + can create, update, and delete ride offers. Must register vehicle info.

🔒 **Authentication**
- Users must register and log in to use the app.
- Sessions managed with JWT and protected endpoints.

---

## 📋 Usage Instructions

1. Register with your info (email, username, password, address, and role).  
   If driver, also input vehicle details.

2. Login using your credentials.

3. Navigate the app based on your role:  
   - **Passengers** can browse and book available rides.  
   - **Drivers** can create, edit, or cancel ride offers.

4. The backend exposes a full REST API (see [Wiki/API Docs](#) for endpoints).

---

👨‍💻 About Me
Manuel Ricardo Sosa Montañez
Full Stack Developer | Node.js, NestJS, React, GraphQL, PostgreSQL

I'm passionate about building real solutions with clean architecture and a strong focus on usability and performance.
This project represents my ability to build a complete, scalable, production-ready platform end-to-end.

💼 LinkedIn
📧 mr.sosa@uniandes.edu.co

---

## 🛠 Deployment

To run locally:

```bash
# Install frontend & backend dependencies
cd frontend && npm install
cd ../backend && npm install

# Build frontend
cd ../frontend && npm run build

# Run backend server (serves frontend too)
cd ../backend && npm run start



