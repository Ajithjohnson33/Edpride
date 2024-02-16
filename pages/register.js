import React, { useState } from "react";
import styles from "./register.module.css"; // Ensure this path is correct

import IconButton from "@mui/material/IconButton";

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import MailOutlineIcon from '@mui/icons-material/MailOutline';


import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';



import KeyIcon from '@mui/icons-material/Key';



function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
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
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      mobile: formData.phoneNumber,
      email: formData.email,
      password: formData.password,
      roleId: 1,
      schoolName: "test123",
    };

    fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((response) =>
        response.ok ? response.json() : Promise.reject(response)
      )
      .then((data) => console.log(data))
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  };

  return (
    <div className={styles.mainContainer}>
      <nav className={styles.navbar}>
        <div className={styles.navLogo}>
          <a href="/" className={styles.navLogoLink} style={{ color: "blue" }}>
            edpride
          </a>{" "}
        </div>
        <ul className={styles.navItems}>
          <li>
            <a href="/features" className={styles.navItem}>
              Features
            </a>
          </li>
          <li>
            <a href="/Templates" className={styles.navItem}>
              Templates
            </a>
          </li>
          <li>
            <a href="/packages" className={styles.navItem}>
              Packages
            </a>
          </li>
          <li>
            <a href="/register" className={styles.navItem}>
              Register
            </a>
          </li>
          <li>
            <button className={styles.loginButton}>LOGIN</button>
          </li>
        </ul>
      </nav>

      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img src="/registerImage.jpg" alt="Registration Visual" />
        </div>

        <div className={styles.formSection}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.title}>Register</h2>
            <div className={styles.formGroup}>
              <div className={styles.registerInput}>
                <IconButton className={styles.iconButton} aria-label="person">
                  <Person2OutlinedIcon />
                </IconButton>
                <input
                className={styles.input}
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  placeholder="Firstname"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <br />


            <div className={styles.formGroup}>
              <div className={styles.registerInput}>
                <IconButton className={styles.iconButton} aria-label="person">
                  <Person2OutlinedIcon />
                </IconButton>
                <input
                className={styles.input}
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  placeholder="Lastname"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>


            <br />

            <div className={styles.formGroup}>
            <div className={styles.registerInput}>
            <IconButton className={styles.iconButton} aria-label="person">
                 <PhoneAndroidIcon />
                </IconButton>
              <input
               className={styles.input}
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                placeholder="Phonenumber"
                onChange={handleChange}
              />
            </div>
            </div>

            <br />

            <div className={styles.formGroup}>
            <div className={styles.registerInput}>
            <IconButton className={styles.iconButton} aria-label="person">
                 <MailOutlineIcon  />
                </IconButton>
              <input
              className={styles.input}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </div>
            </div>
            <br />

             <div className={styles.formGroup}>
            <div className={styles.registerInput}>
            <IconButton className={styles.iconButton} aria-label="person">
                 <KeyIcon  />
                </IconButton>
              <input
              className={styles.input}
                type="password"
                id="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
                required
              />
             </div>
            </div>
            <br />
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer section */}
      <div className={styles.footer}>
        <div className={styles.newsletter}>
          <p style={{ fontSize: "26px" }} className>
            Stay In The Loop With Our Newsletter!
          </p>
          <p style={{ fontSize: "23px", fontWeight: "200" }}>Enter Email Address</p>

          <div className={styles.whiteLineSeparator}></div>

          <p style={{ fontSize: "13px", backgroundColor: "transparent", fontWeight: "100", color: "#a0a0a0" }}>
            Lorem ipsum is placeholder text Lorem ipsum is placeholder text
            Lorem ipsum is placeholder text Lorem ipsum
          </p>

          <div className={styles.socialLinks}>
            <a href="/facebook">Facebook</a>
            <a href="/instagram">Instagram</a>
            <a href="/linkedin">LinkedIn</a>
            <a href="/pinterest">Pinterest</a>
          </div>

          <div className={styles.whiteLineSeparator}></div>

          {/* <div className={styles.footerLinks}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <p>© 2023 Edpride All rights reserved</p>
        </div> */}
        </div>

        {/* <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <p>© 2023 Edpride All rights reserved</p> */}

        <div className={styles.footerSecond}>
          <h5>Title 1</h5>
          <p>Menu 2</p>
          <p>Menu 3</p>
          <p>Menu 4</p>
          <p>Menu 5</p>
          <p>Menu 6</p>
          
        </div>

        <div className={styles.footerSecond}>
          <h5>Title 2</h5>
          <p>Menu 1</p>
          <p>Menu 2</p>
          <p>Menu 3</p>
        </div>

        <div className={styles.footerSecond}>
          <h5>Title 3</h5>
          <p>Menu 1</p>
          <p>Menu 2</p>
          <p>Menu 3</p>
          <p>Menu 4</p>
          <p>Menu 5</p>
        </div>
      </div>


      <footer className={styles.footer1}>

      <div className={styles.leftContent}>
        © 2023 All Rights Reserved
      </div>

      <div className={styles.middleContent}>
        <a href="/terms" className={styles.link}>Terms</a>
        <a href="/privacy" className={styles.link}>Privacy</a>
        <a href="/cookies" className={styles.link}>Cookies</a>
      </div>
      <div className={styles.rightContent}>
        <IconButton aria-label="facebook" className={styles.icon}>
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="instagram" className={styles.icon}>
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="linkedin" className={styles.icon}>
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="twitter" className={styles.icon}>
          <TwitterIcon />
        </IconButton>
      </div>
    </footer>
    </div>
  );
}

export default Register;
