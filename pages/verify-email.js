
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const VerifyEmail = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://your-api-endpoint.com/send-verification-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Verification email sent! Please check your inbox.');
      } else {
        setMessage(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setMessage('Failed to send verification email. Please check your network and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#800080' }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{ color: 'white' }}><b>Edpride</b></a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-link" href="#" style={{ color: 'white' }}><b>Features</b></a>
        <a className="nav-link" href="/Templates" style={{ color: 'white' }}><b>Templates</b></a>
        <a className="nav-link" href="#" style={{ color: 'white' }}><b>Packages</b></a>
        <a className="nav-link" href="/register" style={{ color: 'white' }}><b>Register</b></a>
        <button className="btn btn-outline-dark ms-2" style={{ color: 'white', borderColor: 'white' }}>LOGIN</button>
      </div>
    </div>
  </div>
</nav>

<div className="main-section" style={{ display: 'flex', height: 'calc(100vh - 56px)' }}>
        {/* Sidebar */}
        <div className="sidebar" style={{ backgroundColor: 'grey', height: '100%', width: '250px' }}>
          <div className="sidebar-item">Dashboard</div>
          <div className="sidebar-item">Uploads</div>
          <div className="sidebar-item">Settings</div>
          <div className="sidebar-item">Logout</div>
        </div>

      {/* Verification Form */}
      <div className="container mt-5">
        <h1>Verify Your Email</h1>
        <p>Enter your email address below to receive a verification link.</p>
        {message && <p className="alert alert-info">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            required
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Sending...' : 'Send Verification Email'}
          </button>
        </form>
      </div>
      </div>

    </>
  );
};

export default VerifyEmail;
