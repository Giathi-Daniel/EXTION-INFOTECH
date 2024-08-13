import { Navigate } from "react-router";
import { useAuthStatus } from "../Hooks/useAuthStatus";
import Spinner from "./Spinner";

export default function PrivateRoute({ children }) {
  const { loggedIn, loading } = useAuthStatus();
  if (loading) {
    return <Spinner />;
  }
  return loggedIn ? children : <Navigate to="/sign-in" />;
}
