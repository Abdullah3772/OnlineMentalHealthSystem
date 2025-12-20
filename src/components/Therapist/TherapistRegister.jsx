import { motion } from "framer-motion";
import {
  containerStyle,
  formContainerStyle,
  headingStyle,
  inputStyle,
  textareaStyle,
  buttonStyle,
  formGroupStyle,
  labelStyle,
  flexRowStyle,
} from "../../styles/shared";

export default function TherapistRegister() {
  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        style={formContainerStyle}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 style={headingStyle}>Therapist Registration</h2>

        <div style={formGroupStyle}>
          <input type="text" placeholder="Full Name" style={inputStyle} required />
          <input type="email" placeholder="Email Address" style={inputStyle} required />
          <input type="password" placeholder="Password" style={inputStyle} required />
          <input type="password" placeholder="Confirm Password" style={inputStyle} required />
          <input type="tel" placeholder="Phone Number" style={inputStyle} required />
          <input type="number" placeholder="Years of Experience" style={inputStyle} min="0" required />

          <div>
            <label style={labelStyle}>Upload Credentials (PDF/Image)</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              style={{ ...inputStyle, padding: "10px" }}
            />
          </div>

          <div>
            <label style={labelStyle}>Available Time</label>
            <div style={flexRowStyle}>
              <input type="time" style={{ ...inputStyle, flex: 1 }} required />
              <span style={{ fontWeight: "600", color: "#000" }}>to</span>
              <input type="time" style={{ ...inputStyle, flex: 1 }} required />
            </div>
          </div>

          <textarea placeholder="Short Bio / About You" rows="4" style={textareaStyle} required></textarea>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={buttonStyle}
          >
            Register as Therapist
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
