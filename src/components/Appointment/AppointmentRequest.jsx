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

export default function AppointmentRequest({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(new FormData(e.target)); // pass form data to parent for testing
  };

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      data-testid="appointment-container"
    >
      <motion.div
        style={formContainerStyle}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 style={headingStyle} data-testid="appointment-heading">
          Appointment Request
        </h2>

        <form style={formGroupStyle} onSubmit={handleSubmit} data-testid="appointment-form">
          <input
            placeholder="Your Name"
            type="text"
            style={inputStyle}
            required
            data-testid="input-name"
            name="name"
          />
          <input
            placeholder="Phone Number"
            type="tel"
            style={inputStyle}
            required
            data-testid="input-phone"
            name="phone"
          />
          <input
            placeholder="Email Address"
            type="email"
            style={inputStyle}
            required
            data-testid="input-email"
            name="email"
          />
          <input
            placeholder="Select Date"
            type="date"
            style={inputStyle}
            required
            data-testid="input-date"
            name="date"
          />
          <input
            placeholder="Select Time"
            type="time"
            style={inputStyle}
            required
            data-testid="input-time"
            name="time"
          />
          <textarea
            placeholder="Describe your illness / issue"
            rows="4"
            style={textareaStyle}
            required
            data-testid="input-description"
            name="description"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={buttonStyle}
            data-testid="submit-button"
          >
            Submit Request
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
