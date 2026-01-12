import { useNavigate } from "react-router-dom";

function Profile() {
 const Navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("token");
    Navigate('/login')
  };

  return (
    <div
      style={{
        maxWidth: "750px",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "14px",
        background: "linear-gradient(135deg, #f9fafb, #eef2f7)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#111", marginBottom: "10px" }}>
        MERN Authentication System
      </h1>

      <p style={{ color: "#444", lineHeight: "1.6" }}>
        This project demonstrates a complete and secure authentication
        workflow using the MERN stack. The goal of this project is to
        showcase real-world authentication and authorization practices.
      </p>

      <h3>🔧 Tech Stack</h3>
      <ul>
        <li>React.js (Frontend)</li>
        <li>Node.js & Express.js (Backend)</li>
        <li>MongoDB (Database)</li>
        <li>JWT (JSON Web Token)</li>
      </ul>

      <h3>✨ Key Features</h3>
      <ul>
        <li>User Signup & Login</li>
        <li>Hashed Passwords</li>
        <li>JWT-based Authentication</li>
        <li>Protected Routes</li>
        <li>Secure Logout</li>
      </ul>

      <h3>🎯 Purpose</h3>
      <p>
        To understand and implement authentication, authorization,
        middleware usage, and route protection in a full-stack application.
      </p>

      <hr style={{ margin: "25px 0" }} />

      <p><b>Created By:</b> Aniket Zade</p>
      <p>Computer Engineering Student</p>

      <button
        onClick={logout}
        style={{
          marginTop: "25px",
          padding: "12px 28px",
          backgroundColor: "purple",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "15px",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
