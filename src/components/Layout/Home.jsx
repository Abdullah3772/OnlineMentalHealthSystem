import { motion } from "framer-motion";

export default function Home() {
  const cardStyle = {
    flex: "1 1 280px",
    maxWidth: "450px",
    minWidth: "260px",
    background: "rgba(217, 241, 246, 0.5)",
    padding: "28px",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    cursor: "pointer",
    color: "#000",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
  };

   return (
    <motion.div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "30px 20px",
        gap: "24px",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Welcome Card */}
      <motion.div
        style={cardStyle}
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1
          style={{
            color: "#000",
            fontSize: "1.75rem",
            fontWeight: "700",
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          Welcome to Online Mental Health Counseling
        </h1>
        <p
          style={{
            marginTop: "12px",
            fontSize: "1rem",
            color: "#000",
            lineHeight: "1.6",
            textAlign: "center",
          }}
        >
          Connect with professional therapists, schedule appointments, provide
          feedback, and access emergency support anytime, anywhere.
        </p>
      </motion.div>

      {/* Announcements Card */}
      <motion.div
        style={cardStyle}
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3
          style={{
            color: "#000",
            fontSize: "1.35rem",
            fontWeight: "700",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          📢 Announcements
        </h3>
        <table
          style={{
            width: "100%",
            marginTop: "8px",
            borderCollapse: "collapse",
            color: "#000",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "10px 8px",
                  borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
                  fontWeight: "700",
                  fontSize: "0.9rem",
                }}
              >
                Date
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "10px 8px",
                  borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
                  fontWeight: "700",
                  fontSize: "0.9rem",
                }}
              >
                Announcement
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "8px", fontSize: "0.9rem" }}>2025-12-06</td>
              <td style={{ padding: "8px", fontSize: "0.9rem" }}>New therapist added</td>
            </tr>
            <tr>
              <td style={{ padding: "8px", fontSize: "0.9rem" }}>2025-12-05</td>
              <td style={{ padding: "8px", fontSize: "0.9rem" }}>
                Appointment slots available
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px", fontSize: "0.9rem" }}>2025-12-04</td>
              <td style={{ padding: "8px", fontSize: "0.9rem" }}>
                Emergency hotline updated
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}
