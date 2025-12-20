import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import
 {
  containerStyle,
  formContainerStyle,
  headingStyle,
  inputStyle,
  buttonStyle,
  formGroupStyle,
  infoBoxStyle,
} from "../../styles/shared";

export default function TherapistLogin({ onLogin }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const DUMMY_USER = {
    username: "therapist@example.com",
    password: "123456",
  };

  const handleLogin = () => {
    if (
      form.username === DUMMY_USER.username &&
      form.password === DUMMY_USER.password
    ) {
      if (onLogin) onLogin();
      navigate("/therapist/dashboard");
    } else {
      alert("Incorrect Username or Password!");
    }
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        style={formContainerStyle}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={headingStyle}>Therapist Login</h2>

        <div style={{ ...infoBoxStyle, marginBottom: "20px" }}>
          <div><b>Username:</b> therapist@example.com</div>
          <div><b>Password:</b> 123456</div>
        </div>

        <div style={formGroupStyle}>
          <input
            type="text"
            placeholder="Username"
            style={inputStyle}
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
              alignItems: "center",
            }}
          >
            <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", fontWeight: "500", color: "#000" }}>
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
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={buttonStyle}
            onClick={handleLogin}
          >
            Login
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
