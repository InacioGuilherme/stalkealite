import styles from "./BottomNav.module.css";

import homeIcon from "../../assets/feed/casa.svg";
import searchIcon from "../../assets/feed/lupa.svg";
import reelsIcon from "../../assets/feed/reels.svg";
import profileIcon from "../../assets/feed/perfil-sem-foto.jpeg";

export default function BottomNav() {
  return (
    <nav className={styles.bottomNav}>
      <button className={styles.navBtn}>
        <img src={homeIcon} alt="Home" />
      </button>

      <button className={styles.navBtn}>
        <img src={searchIcon} alt="Buscar" />
      </button>

      <button className={`${styles.navBtn} ${styles.navPlus}`} aria-label="Criar">
        <span className={styles.plusChar}>+</span>
      </button>

      <button className={styles.navBtn}>
        <img src={reelsIcon} alt="Reels" />
      </button>

      <button className={`${styles.navBtn} ${styles.profile}`}>
        <img src={profileIcon} alt="Perfil" />
      </button>
    </nav>
  );
}