import { motion } from "framer-motion";

export default function AppointmentRequest() {
  return (
    <motion.div
      style={{ textAlign: "center", padding: "30px" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 style={{ color: "black" }}>Appointment Request</h2>

      <motion.div
        style={{
          width: "350px",
          margin: "auto",
          padding: "20px",
          borderRadius: "15px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 15px #054a51ff",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <input placeholder="Your Name" type="text" style={inputStyle} />
        <input placeholder="Phone Number" type="tel" style={inputStyle} />
        <input placeholder="Email Address" type="email" style={inputStyle} />
        <input placeholder="Select Date" type="date" style={inputStyle} />
        <input placeholder="Select Time" type="time" style={inputStyle} />
        <textarea placeholder="Describe your illness / issue" rows="3" style={textareaStyle}></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={buttonStyle}
        >
          Submit Request
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  background: "white",
  fontSize: "14px",
  boxShadow: "0 0 4px rgba(0,0,0,0.2)",
};

const textareaStyle = {
  ...inputStyle,
  resize: "none",
};

const buttonStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "#00eaff",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "16px",
  boxShadow: "0 0 10px #00eaff",
};
