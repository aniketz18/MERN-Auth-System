import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // check data before sending
    console.log(formData);
    const finalData = JSON.stringify(formData);

    try {
      // backend ko data bhejna
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: finalData,
      });

      const data = await res.json();
      console.log(data);
      if (!data.success) {
        toast.error("Invalid email or password");
        return;
      }
      localStorage.setItem("token", data.token);
      toast.success("Login successful");
      navigate("/profile");
    } catch (error) {
      toast.error("Server error. Please try again.");
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} action="">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            onChange={handleChange}
          />
        </div>
        <button>Login</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
