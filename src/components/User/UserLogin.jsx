// User Login Component – HICT/2022/39
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  containerStyle,
  formContainerStyle,
  headingStyle,
  inputStyle,
  buttonStyle,
  formGroupStyle,
  infoBoxStyle,
  errorStyle,
}  from "../../styles/shared";

export default function UserLogin({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy validation
    if (email === "user@example.com" && password === "123456") {
      onLogin(); // App.jsx lo login state update
      navigate("/user/dashboard"); // Dashboard ku redirect
    } else {
      setError("Invalid email or password!");
    }
  };

  // **New: Register button click handler**
  const handleRegisterClick = () => {
    // Navigate to registration page with a query param to auto-open form
    navigate("/user/register?autoOpen=true");
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Dummy credentials info box */}
      <div
        style={{
          position: "absolute",
          top: "100px",
          ...infoBoxStyle,
        }}
      >
        <p>Demo Email: <b>user@example.com</b></p>
        <p>Demo Password: <b>123456</b></p>
      </div>

      <motion.div
        style={formContainerStyle}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 style={headingStyle}>User Login</h2>

        <form
          onSubmit={handleSubmit}
          style={formGroupStyle}
        >
          <input
            type="email"
            placeholder="Email Address"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <div style={errorStyle}>{error}</div>}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "#000",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              <input type="checkbox" style={{ cursor: "pointer" }} />
              Remember Me
            </label>

            <a
              href="#"
              style={{
                color: "#000",
                fontWeight: "600",
                textDecoration: "none",
                transition: "opacity 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.opacity = "0.6")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            >
              Forgot Password?
            </a>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={buttonStyle}
          >
            Login
          </motion.button>
        </form>

        {/* Register Section */}
        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <p style={{ color: "#000", fontSize: "14px", fontWeight: "500" }}>
            Don't have an account?{" "}
            <motion.span
              style={{ color: "#00eaff", cursor: "pointer", fontWeight: "700" }}
              onClick={handleRegisterClick}
              whileHover={{ scale: 1.05 }}
            >
              Register Here
            </motion.span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
