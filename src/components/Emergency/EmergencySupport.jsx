import { useState } from "react";
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
  labelStyle,
} from "../../styles/shared";

export default function EmergencySupport() {
  const [contactMethod, setContactMethod] = useState("");

  return (
    <motion.div
      style={containerStyle}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        style={{
          ...formContainerStyle,
          boxShadow: "0 8px 32px rgba(255, 0, 0, 0.3)",
          border: "2px solid rgba(255, 0, 0, 0.3)",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 style={{ ...headingStyle, color: "#d32f2f" }}>🚨 Emergency Support</h2>

        <div
          style={{
            background: "rgba(255, 0, 0, 0.1)",
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "20px",
            border: "1px solid rgba(255, 0, 0, 0.3)",
          }}
        >
          <p style={{ color: "#d32f2f", fontWeight: "700", fontSize: "14px" }}>
            ⚠️ If this is a life-threatening emergency, please call 911 immediately!
          </p>
        </div>

        <div style={formGroupStyle}>
          <input placeholder="Your Name" style={inputStyle} required />
          <input placeholder="Contact Number" type="tel" style={inputStyle} required />

          <select style={selectStyle} required>
            <option value="">Select Type of Emergency</option>
            <option value="suicidal">Suicidal Thoughts</option>
            <option value="panic">Panic Attack</option>
            <option value="violent">Violence / Abuse</option>
            <option value="selfharm">Self-Harm Risk</option>
            <option value="medical">Medical Emergency</option>
            <option value="other">Other</option>
          </select>

          <div>
            <label style={labelStyle}>Preferred Contact Method:</label>
            <div style={{ display: "flex", gap: "20px", marginTop: "8px" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value="call"
                  onChange={() => setContactMethod("call")}
                  style={{ cursor: "pointer" }}
                />
                <span style={{ fontWeight: "600", color: "#000" }}>📞 Call</span>
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value="chat"
                  onChange={() => setContactMethod("chat")}
                  style={{ cursor: "pointer" }}
                />
                <span style={{ fontWeight: "600", color: "#000" }}>💬 Chat</span>
              </label>
            </div>
          </div>

          <textarea
            placeholder="Describe the Emergency (Optional)"
            rows="4"
            style={textareaStyle}
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              ...buttonStyle,
              background: "linear-gradient(135deg, #ff3b3b 0%, #d32f2f 100%)",
              color: "#fff",
              boxShadow: "0 4px 15px rgba(255, 0, 0, 0.4)",
            }}
          >
            🚨 Send Emergency Alert
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
