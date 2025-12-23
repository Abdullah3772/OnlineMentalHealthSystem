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
  const [formData, setFormData] = useState({
    yourName: "",
    therapistName: "",
    comments: "",
    recommend: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.yourName.trim()) newErrors.yourName = "Your Name is required";
    if (!formData.therapistName.trim()) newErrors.therapistName = "Therapist Name is required";
    if (!formData.comments.trim()) newErrors.comments = "Comments are required";
    if (!formData.recommend) newErrors.recommend = "Please select recommendation";
    if (rating === 0) newErrors.rating = "Please select a rating";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", { ...formData, rating });
      alert("Feedback submitted successfully!");
      setFormData({ yourName: "", therapistName: "", comments: "", recommend: "" });
      setRating(0);
      setErrors({});
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 style={headingStyle}>Session Feedback</h2>

        <form style={formGroupStyle} onSubmit={handleSubmit}>
          <input
            name="yourName"
            placeholder="Your Name"
            type="text"
            style={inputStyle}
            value={formData.yourName}
            onChange={handleChange}
          />
          {errors.yourName && <span style={{ color: "red", fontSize: "12px" }}>{errors.yourName}</span>}

          <input
            name="therapistName"
            placeholder="Therapist Name"
            type="text"
            style={inputStyle}
            value={formData.therapistName}
            onChange={handleChange}
          />
          {errors.therapistName && <span style={{ color: "red", fontSize: "12px" }}>{errors.therapistName}</span>}

          {/* Star Rating */}
          <div>
            <label style={labelStyle}>Rating:</label>
            {errors.rating && <span style={{ color: "red", fontSize: "12px" }}> {errors.rating}</span>}
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
                  data-testid={`star-${star}`}
                >
                  ★
                </motion.span>
              ))}
            </div>
          </div>

          <textarea
            name="comments"
            placeholder="Comments / Suggestions"
            rows="4"
            style={textareaStyle}
            value={formData.comments}
            onChange={handleChange}
          />
          {errors.comments && <span style={{ color: "red", fontSize: "12px" }}>{errors.comments}</span>}

          {/* Recommend? */}
          <div>
            <label style={labelStyle}>Would you recommend this therapist?</label>
            {errors.recommend && <span style={{ color: "red", fontSize: "12px" }}> {errors.recommend}</span>}
            <div style={{ display: "flex", gap: "20px", marginTop: "8px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                <input
                  type="radio"
                  name="recommend"
                  value="yes"
                  style={{ cursor: "pointer" }}
                  checked={formData.recommend === "yes"}
                  onChange={handleChange}
                />
                <span style={{ fontWeight: "600", color: "#000" }}>Yes</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
                <input
                  type="radio"
                  name="recommend"
                  value="no"
                  style={{ cursor: "pointer" }}
                  checked={formData.recommend === "no"}
                  onChange={handleChange}
                />
                <span style={{ fontWeight: "600", color: "#000" }}>No</span>
              </label>
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={buttonStyle}
          >
            Submit Feedback
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
