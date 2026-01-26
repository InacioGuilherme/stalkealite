import styles from "./ChatBody.module.css";

export default function ChatBody({ children }) {
  return (
    <div className={styles.chatBody}>
      <div className={styles.chatBodyInner}>
        {children}
      </div>
    </div>
  );
}