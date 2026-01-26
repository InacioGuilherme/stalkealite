import styles from "./DirectChatItem.module.css";

export default function DirectChatItem({
  name,
  avatar,
  message,
  time,
  unread = false,
  locked = false,
}) {
  return (
    <div
      className={`${styles.chatItem} ${unread ? styles.chatUnread : ""} ${
        locked ? styles.chatLocked : ""
      }`}
    >
      <div className={styles.chatAvatarContainer}>
        <div className={`${styles.chatAvatarWrapper} ${locked ? styles.locked : ""}`}>
          <img className={`${styles.chatPhoto} ${styles.blurred}`} src={avatar} alt="" />

          {locked && (
            <div className={styles.chatLockOverlay}>
              <svg
                className={styles.chatLockIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 10V8a6 6 0 0112 0v2"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <rect
                  x="5"
                  y="10"
                  width="14"
                  height="10"
                  rx="2"
                  stroke="#fff"
                  strokeWidth="2"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      <div className={styles.chatContent}>
        <h3 className={styles.chatName}>{name}</h3>
        <div className={styles.chatMessageRow}>
          <span className={styles.chatMessageText}>{message}</span>
          <span className={styles.chatTime}> · {time}</span>
        </div>
      </div>

      <div className={styles.chatActions}>
        {unread && <span className={styles.chatUnreadDot} />}

        <svg className={styles.chatCameraIcon} width="19.2" height="19.2">
          <use href="#camera-icon" />
        </svg>
      </div>
    </div>
  );
}