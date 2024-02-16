import styles from "./TrendingDesigns.module.css";

const TrendingDesigns = () => {
  return (
    <div className={styles.trendingDesigns}>
      <header className={styles.header}>
        <h1>Red and Blue color block and edgy</h1>
        <div className={styles.imageContainer}>
          <img src="FirstDesignTending.JPG" alt="First Trending Design" className={styles.bannerImage} />
          <img src="SecondDesignTending.JPG" alt="Second Trending Design" className={styles.bannerImage} />
          <img src="ThirdDesignTending.JPG" alt="Third Trending Design" className={styles.bannerImage} />
          <img src="FourthDesignTending.JPG" alt="Fourth Trending Design" className={styles.bannerImage} />
          <img src="FifthDesignTrending.JPG" alt="Fifth Trending Design" className={styles.bannerImage} />
          <img src="SecondDesignTending.JPG" alt="Second Trending Design" className={styles.bannerImage} />
        </div>
      </header>
      <main>
        <section className={styles.homeSection}>
          {/* Home section content */}
        </section>
      </main>
      <footer className={styles.footer}>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default TrendingDesigns;
