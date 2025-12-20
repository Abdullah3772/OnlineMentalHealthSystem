import { useState } from "react";
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
} from "../../styles/shared";

export default function SessionFeedback() {
  const [rating, setRating] = useState(0);

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
        <h2 style={headingStyle}>Session Feedback</h2>

        <div style={formGroupStyle}>
          <input placeholder="Your Name" type="text" style={inputStyle} required />
          <input placeholder="Therapist Name" type="text" style={inputStyle} required />

          {/* Star Rating */}
          <div>
            <label style={labelStyle}>Rating:</label>
            <div style={{ fontSize: "32px", cursor: "pointer", textAlign: "center" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.span
                  key={star}
                  onClick={() => setRating(star)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    color: star <= rating ? "#FFD700" : "#ccc",
                    padding: "0 5px",
                    transition: "color 0.2s",
                  }}
                >
                  ★
                </motion.span>
              ))}
            </div>
          </div>

          <textarea
            placeholder="Comments / Suggestions"
            rows="4"
            style={textareaStyle}
            required
          ></textarea>

          {/* Recommend? */}
          <div>
            <label style={labelStyle}>Would you recommend this therapist?</label>
            <div style={{ display: "flex", gap: "20px", marginTop: "8px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                <input type="radio" name="recommend" value="yes" style={{ cursor: "pointer" }} />
                <span style={{ fontWeight: "600", color: "#000" }}>Yes</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                <input type="radio" name="recommend" value="no" style={{ cursor: "pointer" }} />
                <span style={{ fontWeight: "600", color: "#000" }}>No</span>
              </label>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={buttonStyle}
          >
            Submit Feedback
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
