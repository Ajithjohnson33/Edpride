
import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js
import Layout from './Layout';
import Sidebar from './Sidebar';
import ProfileHeader from './ProfileHeader';
import TrendingDesigns from './TrendingDesigns';
import styles from "./Templates.module.css";


const Templates = () => {
  return (
     <div className={styles.container}>
      
     <Sidebar />
     <ProfileHeader />
     <TrendingDesigns />

    
      </div>
  
  )
}

export default Templates