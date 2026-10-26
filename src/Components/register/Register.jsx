import { useContext } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { authRequest } from "../../utils/request";
import AuthContext from "../../contexts/authContext";
import styles from "./register.styles.module.css";

export default function Register() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const handleSubmit = async (formData) => {
    const { email, password } = Object.fromEntries(formData);
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      const response = await authRequest("/signup", "POST", {
        email,
        password,
      });

      localStorage.setItem("auth", JSON.stringify(response));
      authContext.setAuthData(response);
      navigate("/");
    } catch (error) {
      toast.error('Could not register');
      console.log(error.message)
    }
  };

  return (
    <section className={styles.registerContainer}>
      <form className={styles.registerForm} action={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Register</legend>

          <p className={styles.field}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" required />
          </p>

          <p className={styles.field}>
            <label htmlFor="register-email">Email</label>
            <input type="email" name="email" id="register-email" required />
            <span className={styles.info}>Example: john@gmail.com</span>
          </p>

          <p className={styles.field}>
            <label htmlFor="register-password">Password</label>
            <input
              type="password"
              name="password"
              id="register-password"
              required
            />
            <span className={styles.info}>Minimum 6 characters</span>
          </p>

          <p className={styles.field}>
            <label htmlFor="repeat-password">Repeat Password</label>
            <input
              type="password"
              name="repeat-password"
              id="register-password"
              required
            />
            <span className={styles.info}>Minimum 6 characters</span>
          </p>

          <button type="submit">Register</button>
          <p className={styles.loginInfo}>
            Already have an account?{" "}
            <Link to="/login" className={styles.loginLink}>
              Login here
            </Link>
          </p>
        </fieldset>
      </form>
    </section>
  );
}
