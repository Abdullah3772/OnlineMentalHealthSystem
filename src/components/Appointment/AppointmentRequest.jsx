import { motion } from "framer-motion";
import {
  containerStyle,
  formContainerStyle,
  headingStyle,
  inputStyle,
  textareaStyle,
  buttonStyle,
  formGroupStyle,
} from "../../styles/shared";

export default function AppointmentRequest() {
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
        <h2 style={headingStyle}>Appointment Request</h2>

        <div style={formGroupStyle}>
          <input placeholder="Your Name" type="text" style={inputStyle} required />
          <input placeholder="Phone Number" type="tel" style={inputStyle} required />
          <input placeholder="Email Address" type="email" style={inputStyle} required />
          <input placeholder="Select Date" type="date" style={inputStyle} required />
          <input placeholder="Select Time" type="time" style={inputStyle} required />
          <textarea
            placeholder="Describe your illness / issue"
            rows="4"
            style={textareaStyle}
            required
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={buttonStyle}
          >
            Submit Request
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
