import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (

    <>

    <div className={styles.sidebar}>
    <div className={styles.profileContainer}>
      <div className={styles.profile}>
        <img src="/profileAvatar.jpeg" alt="Alisha Lehmann" className={styles.avatar} />
        <div className={styles.userInfo}>
          <h3 className={styles.userName}>Mr.Antony</h3>
          <p className={styles.packageName}>Free Package</p>
        </div>
        <button className={styles.upgradeButton}>Upgrade Package</button>
      </div>
    </div>

    <a href="/"><b>Home</b></a>
    <a href="#profile"> <b>Profile</b></a>
    <a href="/Templates"><b>Templates</b></a>
    <a href="/packages"><b>Package</b></a>
    {/* Add other links or content */}
  </div>

  </>
  )
}

export default Sidebar