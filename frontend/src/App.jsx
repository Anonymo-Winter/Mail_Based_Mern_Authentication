import { Navigate, Routes, Route } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";

import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Home from "./pages/Home.jsx";
import EmailVerificationPage from "./pages/EmailVerificationPage.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import ForgotPasswordPage from "./pages/ForgetPasswordPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";

import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore.jsx";

const RedirectAuthenticatedUser = ({ children }) => {
    const { isAuthenticated, user } = useAuthStore();
    if (isAuthenticated && user.isVerified) {
        return <Navigate to="/" replace />;
    }
    return children;
};

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, user } = useAuthStore();
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    if (!user.isVerified) {
        return <Navigate to="/verify-email" replace />;
    }
    return children;
};

function App() {
    const { isCheckingAuth, checkAuth } = useAuthStore();

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);
    if (isCheckingAuth) return <LoadingSpinner />;
    return (
        <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 items-center justify-center relative overflow-hidden">
            <FloatingShape
                color="bg-green-500"
                size="w-64 h-64"
                top="-5%"
                left="10%"
                delay={0}
            />
            <FloatingShape
                color="bg-emerald-500"
                size="w-48 h-48"
                top="70%"
                left="80%"
                delay={5}
            />
            <FloatingShape
                color="bg-lime -500"
                size="w-32 h-32"
                top="40%"
                left="-10%"
                delay={2}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <RedirectAuthenticatedUser>
                            <LoginPage />
                        </RedirectAuthenticatedUser>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <RedirectAuthenticatedUser>
                            <SignUpPage />
                        </RedirectAuthenticatedUser>
                    }
                />
                <Route
                    path="/verify-email"
                    element={<EmailVerificationPage />}
                />
                <Route
                    path="/forgot-password"
                    element={
                        <RedirectAuthenticatedUser>
                            <ForgotPasswordPage />
                        </RedirectAuthenticatedUser>
                    }
                />
                <Route
                    path="/reset-password/:token"
                    element={
                        <RedirectAuthenticatedUser>
                            <ResetPasswordPage />
                        </RedirectAuthenticatedUser>
                    }
                ></Route>
                <Route path="*" element={<Navigate to="/" replace />}></Route>
            </Routes>
            <Toaster />
        </div>
    );
}
export default App;