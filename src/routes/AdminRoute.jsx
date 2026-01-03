import { Navigate } from "react-router-dom";
import { decodeToken } from "../utils/decodeToken";

export default function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;

  const payload = decodeToken(token);
  if (!payload || payload.role !== "admin") {
    return <Navigate to="/dashboard" />;
  }

  return children;
}
