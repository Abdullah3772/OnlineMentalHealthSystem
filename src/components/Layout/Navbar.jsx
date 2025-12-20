import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

const MotionLink = motion(Link);

export default function Navbar() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showTherapistMenu, setShowTherapistMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const userRef = useRef(null);
  const therapistRef = useRef(null);
  const profileRef = useRef(null);

  // Floating effect motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const translateX = useTransform(mouseX, [0, 200], [-10, 10]);
  const translateY = useTransform(mouseY, [0, 200], [-10, 10]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) setShowUserMenu(false);
      if (therapistRef.current && !therapistRef.current.contains(e.target)) setShowTherapistMenu(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) setShowProfileMenu(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <div style={{ background: "transparent", paddingBottom: "15px" }}>
      {/* Heading */}
      <div style={{
        textAlign: "center",
        padding: "15px 10px",
        fontSize: "40px",
        fontWeight: "bold",
        color: "#000",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(5px)",
        borderBottom: "1px solid rgba(0,0,0,0.2)",
      }}>
        Online Mental Health Counseling System
      </div>

      {/* Navigation */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px",
        padding: "10px 20px",
        borderTop: "1px solid rgba(0,0,0,0.1)",
      }}>
        {/* Left: User Profile Circle */}
        <div style={{ position: "relative" }} ref={profileRef}>
          <motion.img
            src="https://randomuser.me/api/portraits/men/7.jpg" // dummy profile image
            alt="User Profile"
            style={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              cursor: "pointer",
              border: "2px solid #00ffd6",
              objectFit: "cover"
            }}
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />

          {/* Profile Dropdown */}
          <AnimatePresence>
            {showProfileMenu && (
              <motion.div
                style={{ ...dropdownStyle, top: "48px", left: 0 }}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
                transition={{ duration: 0.25 }}
              >
                <MotionLink to="/user/profile" style={dropdownLink} whileHover={{ scale: 1.07, color: "#00ffd6" }}>Edit Profile</MotionLink>
                <MotionLink to="/logout" style={dropdownLink} whileHover={{ scale: 1.07, color: "#00ffd6" }}>Logout</MotionLink>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
          <MotionLink to="/" style={navButtonStyle} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Home</MotionLink>

          {/* User Dropdown */}
          <div style={{ position: "relative" }} ref={userRef}>
            <motion.button
              onClick={() => setShowUserMenu(!showUserMenu)}
              style={navButtonStyle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              User ▼
            </motion.button>
            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  style={{ ...dropdownStyle, translateX, translateY }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.25 }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    mouseX.set(e.clientX - rect.left);
                    mouseY.set(e.clientY - rect.top);
                  }}
                >
                  <MotionLink to="/user/register" style={dropdownLink} whileHover={{ scale: 1.07, color: "#00ffd6" }} whileTap={{ scale: 0.95 }}>Register</MotionLink>
                  <MotionLink to="/user/login" style={dropdownLink} whileHover={{ scale: 1.07, color: "#00ffd6" }} whileTap={{ scale: 0.95 }}>Login</MotionLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Therapist Dropdown */}
          <div style={{ position: "relative" }} ref={therapistRef}>
            <motion.button
              onClick={() => setShowTherapistMenu(!showTherapistMenu)}
              style={navButtonStyle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Therapist ▼
            </motion.button>
            <AnimatePresence>
              {showTherapistMenu && (
                <motion.div
                  style={{ ...dropdownStyle, translateX, translateY }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.25 }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    mouseX.set(e.clientX - rect.left);
                    mouseY.set(e.clientY - rect.top);
                  }}
                >
                  <MotionLink to="/therapist/register" style={dropdownLink} whileHover={{ scale: 1.07, color: "#00ffd6" }} whileTap={{ scale: 0.95 }}>Register</MotionLink>
                  <MotionLink to="/therapist/login" style={dropdownLink} whileHover={{ scale: 1.07, color: "#00ffd6" }} whileTap={{ scale: 0.95 }}>Login</MotionLink>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <MotionLink to="/appointment" style={navButtonStyle} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Appointment</MotionLink>
          <MotionLink to="/feedback" style={navButtonStyle} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Feedback</MotionLink>
          <MotionLink to="/emergency" style={navButtonStyle} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Emergency</MotionLink>
        </div>
      </div>
    </div>
  );
}

// Styles
const navButtonStyle = {
  color: "#052b2fff",
  textDecoration: "none",
  fontWeight: "bold",
  padding: "10px 16px",
  background: "rgba(81, 236, 244, 0.7)",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  fontSize: "14px",
  whiteSpace: "nowrap",
  transition: "all 0.2s ease",
};

const dropdownStyle = {
  position: "absolute",
  top: "38px",
  left: 0,
  background: "rgba(83, 84, 84, 0.9)",
  borderRadius: "12px",
  padding: "10px 16px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  minWidth: "150px",
  zIndex: 100,
  backdropFilter: "blur(8px)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
  whiteSpace: "nowrap",
};

const dropdownLink = {
  color: "#badee1ff",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "14px",
  transition: "color 0.2s ease",
};
