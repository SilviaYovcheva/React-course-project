import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../../contexts/authContext";
import { authRequest } from "../../utils/request";
import styles from "./login.styles.module.css";

function validate(values) {
  let errors = {};

  if (!values.email) {
    errors["email"] = "Email is required!";
  }

  if (!values.password) {
    errors["password"] = "Password is required!";
  }

  if (values.password && values.password.length < 6) {
    errors["password"] = "Password should be at least 6 characters long!";
  }

  return errors;
}

export default function Login() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    const errors = validate({ email, password });
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
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
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Login</legend>

          <p className={styles.field}>
            <label htmlFor="login-email">Email</label>
            <input
              type="email"
              name="email"
              id="login-email"
              // required
              className={`${styles.inputField} ${errors["email"] ? styles.inputFieldError : ""}`}
              onChange={handleChange}
            />
            {errors["email"] && (
              <span className={styles.errorLabel}>{errors["email"]}</span>
            )}
          </p>

          <p className={styles.field}>
            <label htmlFor="login-password">Password</label>
            <input
              type="password"
              name="password"
              id="login-password"
              // required
              className={`${styles.inputField} ${errors["password"] ? styles.inputFieldError : ""}`}
              onChange={handleChange}
            />
            {errors["password"] && (
              <span className={styles.errorLabel}>{errors["password"]}</span>
            )}
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
