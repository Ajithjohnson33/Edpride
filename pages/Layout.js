
import styles from './Layout.module.css';
import Sidebar from './Sidebar';
import ProfileHeader from './ProfileHeader';
import TrendingDesigns from './TrendingDesigns';


const Layout = ({ children }) => (
    <div className={styles.container}>
      <Sidebar />
      <div>
    
        {children}
      </div>
    </div>
  );

  export default Layout;