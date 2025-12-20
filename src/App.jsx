import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Layout/Navbar";
import Home from "./components/Layout/Home";
import UserRegister from "./components/User/UserRegister";
import UserLogin from "./components/User/UserLogin";
import UserDashboard from "./components/User/UserDashboard";

import TherapistRegister from "./components/Therapist/TherapistRegister";
import TherapistLogin from "./components/Therapist/TherapistLogin";
import TherapistDashboard from "./components/Therapist/TherapistDashboard";

import AppointmentRequest from "./components/Appointment/AppointmentRequest";
import SessionFeedback from "./components/Feedback/SessionFeedback";
import EmergencySupport from "./components/Emergency/EmergencySupport";

import PageWrapper, { pageAnimation } from "./components/Layout/PageWrapper";

// ------------------------------------------------------
// FOOTER
// ------------------------------------------------------
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="text-center text-sm">
        <p>© 2025 Online Mental Health Counseling System</p>
        <p className="mt-1">All Rights Reserved.</p>
      </div>
    </footer>
  );
}

// ------------------------------------------------------
// LAYOUT MANAGER
// ------------------------------------------------------
function LayoutManager({ children }) {
  const location = useLocation();

  const dashboardPaths = ["/user/dashboard", "/therapist/dashboard"];

  const hideLayout = dashboardPaths.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

// ------------------------------------------------------
// MAIN APP
// ------------------------------------------------------
export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [therapistLoggedIn, setTherapistLoggedIn] = useState(false);

  useEffect(() => {
    setUserLoggedIn(localStorage.getItem("userLoggedIn") === "true");
    setTherapistLoggedIn(localStorage.getItem("therapistLoggedIn") === "true");
  }, []);

  const handleUserLogin = () => {
    localStorage.setItem("userLoggedIn", "true");
    setUserLoggedIn(true);
  };

  const handleTherapistLogin = () => {
    localStorage.setItem("therapistLoggedIn", "true");
    setTherapistLoggedIn(true);
  };

  return (
    <Router>
      <LayoutManager>
        <AnimatePresence mode="wait">
          <Routes>
            {/* HOME */}
            <Route
              path="/"
              element={
                <PageWrapper animation={pageAnimation}>
                  <Home />
                </PageWrapper>
              }
            />

            {/* USER ROUTES */}
            <Route
              path="/user/register"
              element={
                <PageWrapper animation={pageAnimation}>
                  <UserRegister />
                </PageWrapper>
              }
            />

            <Route
              path="/user/login"
              element={
                <PageWrapper animation={pageAnimation}>
                  <UserLogin onLogin={handleUserLogin} />
                </PageWrapper>
              }
            />

            <Route
              path="/user/dashboard"
              element={
                userLoggedIn ? (
                  <UserDashboard />
                ) : (
                  <Navigate to="/user/login" replace />
                )
              }
            />

            {/* THERAPIST ROUTES */}
            <Route
              path="/therapist/register"
              element={
                <PageWrapper animation={pageAnimation}>
                  <TherapistRegister />
                </PageWrapper>
              }
            />

            <Route
              path="/therapist/login"
              element={
                <PageWrapper animation={pageAnimation}>
                  <TherapistLogin onLogin={handleTherapistLogin} />
                </PageWrapper>
              }
            />

            <Route
              path="/therapist/dashboard"
              element={
                therapistLoggedIn ? (
                  <TherapistDashboard />
                ) : (
                  <Navigate to="/therapist/login" replace />
                )
              }
            />

            {/* OTHER ROUTES */}
            <Route
              path="/appointment"
              element={
                <PageWrapper animation={pageAnimation}>
                  <AppointmentRequest />
                </PageWrapper>
              }
            />

            <Route
              path="/feedback"
              element={
                <PageWrapper animation={pageAnimation}>
                  <SessionFeedback />
                </PageWrapper>
              }
            />

            <Route
              path="/emergency"
              element={
                <PageWrapper animation={pageAnimation}>
                  <EmergencySupport />
                </PageWrapper>
              }
            />

            {/* FALLBACK */}
            <Route
              path="*"
              element={
                <PageWrapper animation={pageAnimation}>
                  <Home />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </LayoutManager>
    </Router>
  );
}
