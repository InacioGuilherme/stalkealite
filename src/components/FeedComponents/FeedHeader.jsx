import styles from "./FeedHeader.module.css";
import instaLogo from "../../assets/logo-insta.png";
import heartIcon from "../../assets/coracao.svg";
import sendIcon from "../../assets/enviar.svg";

export default function FeedHeader() {
  return (
    <header className={styles.feedHeader}>
      <div className={styles.feedHeaderLeft}>
        <img src={instaLogo} alt="Instagram" className={styles.feedLogo} />
      </div>

      <div className={styles.feedHeaderRight}>
        <button className={styles.iconButton}>
          <img src={heartIcon} alt="Curtidas" />
          <span className={styles.notificationDot} />
        </button>

        <button className={styles.iconButton}>
          <img src={sendIcon} alt="Directs" />
          <span className={styles.notificationBadge}>2</span>
        </button>
      </div>
    </header>
  );
}