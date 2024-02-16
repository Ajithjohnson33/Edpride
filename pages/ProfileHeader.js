import Image from 'next/image';
import { useRouter } from 'next/router'; // Import the useRouter hook
import styles from './ProfileHeader.module.css';

const ProfileHeader = () => {
  const router = useRouter(); // Initialize the useRouter hook

  // Navigation function for adding school info
  const handleAddSchoolClick = () => {
    router.push('/addSchoolInfo');
  };

  // Navigation function for uploading documents
  const handleUploadDocumentsClick = () => {
    router.push('/UploadDocuments');
  };

  // Navigation function for verifying email
  const handleVerifyEmailClick = () => {
    router.push('/verify-email');
  };

  return (
    <div className={styles.profileHeader}>
      <div className={styles.welcomeSection}>
        <Image
          src="/profileAvatar.jpeg" // Path to your avatar image
          alt="Avatar" // Alternative text for the image
          width={100} // Desired width of the avatar image
          height={100} // Desired height of the avatar image
          className={styles.avatar}
        />
        <div className={styles.welcomeText}>
          <h1>Hi Antony</h1>
          <p>Complete your profile to start using Edpride.</p>
        </div>

      </div>
      <div className={styles.actionItems}>
        <button onClick={handleAddSchoolClick}>Add School Info</button>
        <button onClick={handleUploadDocumentsClick}>Upload Documents</button>
        <button onClick={handleVerifyEmailClick}>Verify Email</button>
      </div>

    </div>
  );
}

export default ProfileHeader;
