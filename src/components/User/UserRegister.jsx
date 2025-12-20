import { motion } from "framer-motion";
import {
  containerStyle,
  formContainerStyle,
  headingStyle,
  inputStyle,
  textareaStyle,
  buttonStyle,
  selectStyle,
  formGroupStyle,
} 
from "../../styles/shared";

export default function UserRegister() {
  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={formContainerStyle}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 style={headingStyle}>User Registration</h2>

        <div style={formGroupStyle}>
          <input type="text" placeholder="Full Name" style={inputStyle} required />
          <input type="email" placeholder="Email Address" style={inputStyle} required />
          <input type="password" placeholder="Password" style={inputStyle} required />
          <input type="password" placeholder="Confirm Password" style={inputStyle} required />
          <input type="tel" placeholder="Phone Number" style={inputStyle} required />
          <input type="date" placeholder="Date of Birth" style={inputStyle} required />

          <select style={selectStyle} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <textarea
            placeholder="Address"
            rows="3"
            style={textareaStyle}
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={buttonStyle}
          >
            Register
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
