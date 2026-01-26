import styles from "./FeedPost.module.css";

import avatar from "../../assets/feed/perfil-sem-foto.jpeg";
import likeIcon from "../../assets/feed/coracao.svg";
import commentIcon from "../../assets/feed/comentario.svg";
import repostIcon from "../../assets/feed/repost.svg";
import sendIcon from "../../assets/feed/enviar.svg";
import saveIcon from "../../assets/feed/salvar.svg";

export default function FeedPost() {
  return (
    <article className={styles.feedPost}>

      {/* HEADER */}
      <header className={styles.postHeader}>
        <div className={styles.postUser}>
          <img src={avatar} alt="Usuário" className={styles.postAvatar} />
          <span className={styles.postUsername}>And*****</span>
        </div>

        <button className={styles.postMenu}>⋯</button>
      </header>

      {/* CONTEÚDO BLOQUEADO */}
      <div className={styles.postImageContainer}>
        <div className={styles.postRestricted}>

          {/* CADEADO (SVG inline igual ao original) */}
          <svg
            className={styles.restrictedIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              d="M12 11c1.1 0 2-.9 2-2V7a2 2 0 10-4 0v2c0 1.1.9 2 2 2zm6 0v7a2 2 0 01-2 2H8a2 2 0 01-2-2v-7a2 2 0 012-2h8a2 2 0 012 2z"
            />
          </svg>

          <p className={styles.restrictedTitle}>Conteúdo restrito</p>
          <p className={styles.restrictedTime}>Agora · 16:53</p>
        </div>
      </div>

      {/* AÇÕES */}
      <div className={styles.postActions}>
        <div className={styles.postActionsLeft}>

          <div className={styles.actionItem}>
            <img src={likeIcon} alt="Curtir" />
            <span>204</span>
          </div>

          <div className={styles.actionItem}>
            <img src={commentIcon} alt="Comentar" />
            <span>73</span>
          </div>

          <div className={styles.actionItem}>
            <img src={repostIcon} alt="Repostar" />
          </div>

          <div className={styles.actionItem}>
            <img src={sendIcon} alt="Enviar" />
          </div>

        </div>

        <div className={styles.actionItem}>
          <img src={saveIcon} alt="Salvar" />
        </div>
      </div>

      {/* TEMPO */}
      <div className={styles.postTime}>Agora</div>

    </article>
  );
}