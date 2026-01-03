import { Navigate } from "react-router-dom";
import { decodeToken } from "../utils/decodeToken";

export default function UserRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;

  const payload = decodeToken(token);
  if (!payload || payload.role !== "user") {
    return <Navigate to="/login" />;
  }

  return children;
}
