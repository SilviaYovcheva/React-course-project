import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { logout } from "../../service/authService";
import AuthContext from "../../contexts/authContext";

export default function Logout() {
  const { accessToken, setAuthData } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout(accessToken);
      } catch (error) {
        console.error(error);
      } finally {
        setAuthData(null);
        localStorage.removeItem("auth");
        navigate("/", { replace: true });
      }
    };

    performLogout();
  }, [accessToken, setAuthData, navigate]);

  return <p>Logging out...</p>;
}
