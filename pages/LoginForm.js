import { useState } from "react";
import styles from "./LoginForm.module.css";
import { useRouter } from "next/router";
import Header from "./Header";

import IconButton from "@mui/material/IconButton";

import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formData;
    // Assuming you're logging in with email instead of username
    const url = "/api/login";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          router.push("/Templates"); // Adjust the redirect path as necessary
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        alert("Error: " + error.message);
        console.error("Error:", error.message);
      });
  };

  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        {/* <nav className={styles.navbar}>
    <div className={styles.navLogo} style={{ color: 'white' }}>edpride</div>
    <ul className={styles.navItems}>
      <li><a href="/features" className={styles.navItem}>Features</a></li>
      <li><a href="/templates" className={styles.navItem}>Templates</a></li>
      <li><a href="/packages" className={styles.navItem}>Packages</a></li>
      <li><a href="/register" className={styles.navItem}>Register</a></li>
      
    </ul>
  </nav> */}

        <div className={styles.container}>
          <div className={styles.subContainer}>
            <div className={styles.imageSection}>
              <img
                src="/registerImage.jpg"
                alt="Registration Visual"
                className={styles.image}
              />
            </div>

            <div className={styles.loginContainer}>
              <h1 className={styles.loginTitle}>Login</h1>
              <form onSubmit={handleSubmit} className={styles.loginForm}>
                <div className={styles.inputGroup}>
                  <div className={styles.loginInput}>
                    <IconButton
                      className={styles.iconButton}
                      aria-label="person"
                    >
                      <PersonIcon />
                    </IconButton>

                    <input
                      className={styles.input}
                      type="text"
                      name="email"
                      placeholder="Username"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <div className={styles.loginInput}>
                    <IconButton
                      className={styles.iconButton}
                      aria-label="person"
                    >
                      <KeyIcon />
                    </IconButton>

                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.rememberMe}>
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <button type="submit" className={styles.loginButton}>
                  LOGIN
                </button>
                <br />
                <div className={styles.helpLinks}>
                  <a
                    href="/forgotPassword"
                    className={styles.forgotPasswordLink}
                  >
                    Forgot Password
                  </a>

                  <br />

                  <span className={styles.registerSpan}>
                    <br />
                    Don't have an account? <a href="/register">Register Now</a>
                  </span>
                </div>
              </form>
            </div>
          </div>

          <div className={styles.footer}>
            <p>@ Eloit Inovations</p>
            <div className={styles.second}>
              <IconButton aria-label="facebook" style={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="instagram" style={{ color: "white" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="linkedin" style={{ color: "white" }}>
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label="twitter" style={{ color: "white" }}>
                <TwitterIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
