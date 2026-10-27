import { useContext, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { authRequest } from "../../utils/request";
import AuthContext from "../../contexts/authContext";
import styles from "./register.styles.module.css";

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

  if (!values["repeatPassword"]) {
    errors["repeatPassword"] = "Repeat your password!";
  }

  if (
    values.password &&
    values["repeatPassword"] &&
    values.password !== values["repeatPassword"]
  ) {
    errors["password"] = "Password does not match!";
  }

  return errors;
}

export default function Register() {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
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
    const { email, password, repeatPassword } = formData;
    const errors = validate({ email, password, repeatPassword });

    setErrors(errors);

    if (Object.keys(errors).length > 0) {
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
      toast.error("Could not register");
      console.log(error.message);
    }
  };

  return (
    <section className={styles.registerContainer}>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Register</legend>

          <p className={styles.field}>
            <label htmlFor="register-email">Email</label>
            <input
              type="email"
              name="email"
              id="register-email"
              className={`${styles.inputField} ${errors["email"] ? styles.inputFieldError : ""}`}
              onChange={handleChange}
            />
            {errors["email"] && (
              <span className={styles.errorLabel}>{errors["email"]}</span>
            )}
          </p>

          <p className={styles.field}>
            <label htmlFor="register-password">Password</label>
            <input
              type="password"
              name="password"
              id="register-password"
              className={`${styles.inputField} ${errors["email"] ? styles.inputFieldError : ""}`}
              onChange={handleChange}
            />
            {errors["password"] && (
              <span className={styles.errorLabel}>{errors["password"]}</span>
            )}
          </p>

          <p className={styles.field}>
            <label htmlFor="repeatPassword">Repeat Password</label>
            <input
              type="password"
              name="repeatPassword"
              id="repeatPassword"
              className={`${styles.inputField} ${errors["email"] ? styles.inputFieldError : ""}`}
              onChange={handleChange}
            />
            {errors["repeatPassword"] && (
              <span className={styles.errorLabel}>
                {errors["repeatPassword"]}
              </span>
            )}
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
