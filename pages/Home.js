

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home = () => {

    // State to manage the window width
  const [windowWidth, setWindowWidth] = useState(null); // set to null initially

  useEffect(() => {
    // Set the window width on initial load
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const isMobile = windowWidth < 768; // Mobile devices (including tablets in portrait mode)
  const isTablet = windowWidth >= 768 && windowWidth < 1024; // Tablet devices (in landscape mode)
  return (
    

    <div className={styles.container + (isMobile || isTablet ? ` ${styles.mobileTablet}` : '')}>
    <div className={styles.textContent}>
      <h1>World's first AI-Powered School Website Builder</h1>
      <p>
        Empower your School's online presence with a Click! No tech skills? No
        problem! Create and update your school's website effortlessly.
      </p>
      <button className={styles.button}>BUILD YOUR WEBSITE</button>
    </div>

   
    <Image
      src="/rightside.jpg" // Place your image in the public directory and reference it here
      alt="Image description"
      width={isMobile ? 300 : isTablet ? 400 : 600} // Adjust the sizes as needed
      height={isMobile ? 200 : isTablet ? 266 : 400} // Adjust the sizes as needed
      layout="responsive" // This will ensure that the aspect ratio is maintained
    />

  </div>
  )
}

export default Home