import styles from "./ChatInput.module.css";

import cameraIcon from "../../assets/chat/camera.svg";
import micIcon from "../../assets/chat/microfone.svg";
import galleryIcon from "../../assets/chat/galeria.svg";
import stickerIcon from "../../assets/chat/sticker.svg";
import heartIcon from "../../assets/chat/coracao.svg";

export default function ChatInput() {
  return (
    <div className={styles.chatInputContainer}>
      <div className={styles.chatInputPill}>
        {/* Ícone da câmera (roxinho) */}
        <div className={styles.chatInputCamera}>
          <img src={cameraIcon} alt="Câmera" />
        </div>

        {/* Campo de texto */}
        <input
          type="text"
          className={styles.chatInputField}
          placeholder="Mensagem..."
        />

        {/* Ações à direita */}
        <div className={styles.chatInputIcons}>
          <img src={micIcon} alt="Áudio" />
          <img src={galleryIcon} alt="Galeria" />
          <img src={stickerIcon} alt="Sticker" />
          <img src={heartIcon} alt="Curtir" />
        </div>
      </div>
    </div>
  );
}