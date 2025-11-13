import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedLayout from "./layouts/ProtectedLayout";
import ProtectedRoute from "./components/ProtectedRoutes";
import ManageBudget from "./pages/ManageBudget";
import Goals from "./pages/Goals";

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <ProtectedLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/budget" element={<ManageBudget />} />
        <Route path="/goals" element={<Goals />} />
      </Route>
    </Routes>
  );
}
