
# 🔐 MERN Authentication System

This is my **first full-stack MERN project**, where I implemented a **basic but working authentication system**.  
The goal of this project was to understand **how authentication works in real-world web applications**.

This project focuses mainly on **login, signup, protected routes, and logout flow**.

---

## 🚀 Features

- User Signup
- User Login
- Password hashing for security
- JWT-based authentication
- Protected routes (cannot access pages without login)
- Secure logout functionality
- Post-login protected information page

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- React Router DOM

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Authentication**
- JSON Web Token (JWT)

---

## 🔐 Authentication Flow (Simple)

1. User registers or logs in
2. Backend generates a JWT token
3. Token is stored in browser localStorage
4. Protected routes check for token
5. If token exists → access allowed  
6. If token is missing → redirected to login
7. Logout removes token and blocks access again

---

## 📂 Project Structure

```

mern-auth-project/
├── backend/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── pages/
│   ├── components/
│   └── App.jsx
├── README.md
└── .gitignore

```

---

## 🎯 Purpose of This Project

- Learn MERN stack basics
- Understand authentication and authorization
- Practice JWT and protected routes
- Build confidence in full-stack development

This project is **intentionally kept simple** and will be improved step by step.

---

## 🔮 Future Improvements (Planned)

- Better UI design
- Role-based authentication (Admin/User)
- Password reset feature
- Email verification
- Improved validation & error handling

---

## 👤 Author

**Aniket Zade**  
Computer Engineering Student  
Beginner Full-Stack Developer

---

## 📌 Note

This is an **initial version** of the project created for learning and practice purposes.  
More features and improvements will be added in future updates.

