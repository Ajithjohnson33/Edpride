import React, { useState } from 'react';
import styles from './packages.module.css';
import Head from 'next/head';


const packages = () => {

    const [planDuration, setPlanDuration] = useState('monthly');

    // Define inline styles
    const containerStyle = {
      textAlign: 'center',
      color: 'white',
      backgroundColor: 'purple',
      padding: '20px',
      width: '100vw', // 100% of the viewport width
      height: '100vh', // 100% of the viewport height
      margin: '0', // Remove default margin
      overflow: 'auto' // Add scroll for content overflow
    };
  
    const headingStyle = {
      marginBottom: '10px',
    };
  
    const paragraphStyle = {
      marginBottom: '20px',
    };
  
    const buttonStyle = {
      margin: '0 10px',
      padding: '10px 20px',
      border: '1px solid white',
      background: 'transparent',
      color: 'white',
      cursor: 'pointer',
    };
  
    const activeButtonStyle = {
      ...buttonStyle,
      background: 'white',
      color: 'purple',
    };
  
    const plansStyle = {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '20px',
    };
  
    const planStyle = {
      width: '30%',
      backgroundColor: 'white',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      color: 'black',
    };
  
    const planHeadingStyle = {
      color: 'purple',
    };
  
    const priceStyle = {
      fontSize: '24px',
      color: 'purple',
    };
  
    const listStyle = {
      listStyle: 'none',
      padding: '0',
    };
  
    const listItemStyle = {
      marginBottom: '10px',
    };
  
  return (


    <div>
       

<div style={containerStyle}>

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
      <h1 style={headingStyle}>Pricing Plans</h1>
      <p style={paragraphStyle}>
        We’ve got plans that are perfect for you. Get started with 100+
        customizable templates, a smart drag and drop editor, tools to boost
        your online presence and more.
      </p>
      <div>
        <button
          style={planDuration === 'monthly' ? activeButtonStyle : buttonStyle}
          onClick={() => setPlanDuration('monthly')}
        >
          Monthly
        </button>
        <button
          style={planDuration === 'yearly' ? activeButtonStyle : buttonStyle}
          onClick={() => setPlanDuration('yearly')}
        >
          Yearly
        </button>
      </div>
      <div style={plansStyle}>
        <div style={planStyle}>
          <h2 style={planHeadingStyle}>Base Plan</h2>
          <p style={priceStyle}>Free</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Welcome Message</li>
            <li style={listItemStyle}>Cover Photo</li>
            <li style={listItemStyle}>Banner slider</li>
            <li style={listItemStyle}>Announcements Page</li>
          </ul>
        </div>
        <div style={planStyle}>
          <h2 style={planHeadingStyle}>Pro Plan</h2>
          <p style={priceStyle}>$40/Month</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Welcome Message</li>
            <li style={listItemStyle}>Cover Photo</li>
            <li style={listItemStyle}>Banner slider: 3 Images</li>
            <li style={listItemStyle}>Announcements Page</li>
          </ul>
        </div>
        <div style={planStyle}>
          <h2 style={planHeadingStyle}>Advanced Plan</h2>
          <p style={priceStyle}>$75/Month</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Welcome Message</li>
            <li style={listItemStyle}>Cover Photo</li>
            <li style={listItemStyle}>Banner slider: 5 Images</li>
            <li style={listItemStyle}>Announcements Page</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

);
};
 

export default packages 
   

    
