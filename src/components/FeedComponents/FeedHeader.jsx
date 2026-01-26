import { useNavigate } from "react-router-dom";
import styles from "./FeedHeader.module.css";
import instaLogo from "../../assets/feed/logo-insta.png";
import heartIcon from "../../assets/feed/coracao.svg";
import sendIcon from "../../assets/feed/enviar.svg";

export default function FeedHeader() {
  const navigate = useNavigate();
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

        <button className={styles.iconButton} onClick={() => navigate('/direct')}>
          <img src={sendIcon} alt="Directs" />
          <span className={styles.notificationBadge}>2</span>
        </button>
      </div>
    </header>
  );
}