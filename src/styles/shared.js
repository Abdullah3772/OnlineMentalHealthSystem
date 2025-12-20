// Shared styles for consistent alignment and design across all components

export const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px 20px",
  minHeight: "calc(100vh - 180px)", // Account for navbar and footer
};

export const formContainerStyle = {
  width: "100%",
  maxWidth: "420px",
  padding: "28px",
  borderRadius: "16px",
  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(15px)",
  WebkitBackdropFilter: "blur(15px)",
  boxShadow: "0 8px 32px rgba(0, 255, 255, 0.3)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
};

export const headingStyle = {
  textAlign: "center",
  marginBottom: "20px",
  color: "#000",
  fontWeight: "700",
  fontSize: "24px",
  letterSpacing: "0.3px",
  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

export const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: "8px",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  outline: "none",
  fontSize: "14px",
  background: "rgba(255, 255, 255, 0.9)",
  transition: "all 0.3s ease",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.05)",
};

export const textareaStyle = {
  ...inputStyle,
  resize: "vertical",
  fontFamily: "inherit",
  minHeight: "70px",
};

export const buttonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(135deg, #00eaff 0%, #00a8cc 100%)",
  color: "#000",
  fontWeight: "700",
  fontSize: "15px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 15px rgba(0, 234, 255, 0.4)",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
};

export const buttonSecondaryStyle = {
  ...buttonStyle,
  background: "transparent",
  border: "2px solid #00eaff",
  color: "#000",
  fontWeight: "600",
  boxShadow: "none",
};

export const labelStyle = {
  display: "block",
  marginBottom: "6px",
  color: "#000",
  fontWeight: "600",
  fontSize: "13px",
};

export const errorStyle = {
  padding: "10px",
  borderRadius: "8px",
  background: "rgba(255, 0, 0, 0.1)",
  color: "#d32f2f",
  textAlign: "center",
  fontSize: "13px",
  fontWeight: "600",
  border: "1px solid rgba(255, 0, 0, 0.2)",
};

export const successStyle = {
  padding: "10px",
  borderRadius: "8px",
  background: "rgba(0, 255, 0, 0.1)",
  color: "#2e7d32",
  textAlign: "center",
  fontSize: "13px",
  fontWeight: "600",
  border: "1px solid rgba(0, 255, 0, 0.2)",
};

export const infoBoxStyle = {
  background: "rgba(0, 234, 255, 0.15)",
  padding: "12px 16px",
  borderRadius: "8px",
  textAlign: "center",
  color: "#000",
  fontWeight: "600",
  fontSize: "13px",
  boxShadow: "0 4px 10px rgba(0, 234, 255, 0.2)",
  border: "1px solid rgba(0, 234, 255, 0.3)",
  marginBottom: "16px",
};

export const cardStyle = {
  background: "rgba(255, 255, 255, 0.12)",
  padding: "20px",
  borderRadius: "12px",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
};

export const formGroupStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  marginBottom: "16px",
};

export const flexRowStyle = {
  display: "flex",
  gap: "15px",
  alignItems: "center",
  flexWrap: "wrap",
};

export const selectStyle = {
  ...inputStyle,
  cursor: "pointer",
  appearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23000' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 12px center",
  paddingRight: "35px",
};
