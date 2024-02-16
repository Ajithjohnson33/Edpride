
import { useState } from 'react';
import { useRouter } from 'next/router';

import styles from './forgotPassword.module.css'; 

const forgotPassword = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    // Here you would handle the password reset logic, e.g., sending an email to the user
    console.log('Password reset email sent to:', email);

    // Optionally, redirect to another page, such as the login page, after submitting the form
    router.push('/login');
  };

  return (

    <div>

    <div className={styles.mainContainer}>

    <nav className={styles.navbar}>
    <div className={styles.navLogo} style={{ color: 'white' }}>edpride</div>
    <ul className={styles.navItems}>
      <li><a href="/features" className={styles.navItem}>Features</a></li>
      <li><a href="/templates" className={styles.navItem}>Templates</a></li>
      <li><a href="/packages" className={styles.navItem}>Packages</a></li>
      <li><a href="/register" className={styles.navItem}>Register</a></li>
      <li><button className={styles.loginButton}>LOGIN</button></li>
    </ul>
  </nav>
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
    <h1>Forgot Password</h1>
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>

      <button type="submit" style={{ padding: '0.5rem', width: '100%' }}>
        Send Reset Instructions
      </button>
    </form>
  </div>

  </div>
  </div>

  )
}

export default forgotPassword