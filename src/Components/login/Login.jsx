import { useContext } from "react";
import { useNavigate, Link } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../../contexts/authContext";
import { authRequest } from "../../utils/request";
import styles from "./login.styles.module.css";

export default function Login() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const handleSubmit = async (formData) => {
    const { email, password } = Object.fromEntries(formData);
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      const response = await authRequest("/token?grant_type=password", "POST", {
        email,
        password,
      });

      localStorage.setItem("auth", JSON.stringify(response));
      authContext.setAuthData(response);
      navigate("/");
    } catch (error) {
      toast.error("Could not login");
      console.log(error.message);
    }
  };

  return (
    <section className={styles.loginContainer}>
      <form className={styles.loginForm} action={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Login</legend>

          <p className={styles.field}>
            <label htmlFor="login-email">Email</label>
            <input type="email" name="email" id="login-email" required />
            <span className={styles.info}>Example: john@gmail.com</span>
          </p>

          <p className={styles.field}>
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              name="password"
              id="login-password"
              required
            />
            <span className={styles.info}>Minimum 6 characters</span>
          </p>

          <button type="submit">Login</button>
          <p className={styles.registerInfo}>
            Don`t have an account?{" "}
            <Link to="/register" className={styles.registerLink}>
              Register here
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}
