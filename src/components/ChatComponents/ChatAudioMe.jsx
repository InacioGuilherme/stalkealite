import styles from "./ChatAudioMe.module.css";

export default function ChatAudioMe({ duration = "0:13", showTranscript = true }) {
  return (
    <div className={styles.message}>
      <div className={styles.bubble}>
        <div className={styles.audioRecebido}>
          <button type="button" className={styles.audioRecebidoPlayBtn} aria-label="Reproduzir áudio">
            <i className="fas fa-play"></i>
          </button>
          
          <div className={styles.audioRecebidoWaveform}>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "34px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "37px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "40px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "31px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "29px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "37px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "31px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "29px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "27px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "29px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "28px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "12px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "12px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "12px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "12px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "22px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "16px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "12px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "27px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "23px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "22px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "27px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "27px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "28px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "32px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "17px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "12px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "12px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "20px"}}></div>
            <div className={styles.audioRecebidoWaveformBar} style={{height: "12px"}}></div>
          </div>
          
          <span className={styles.audioRecebidoDuration}>{duration}</span>
          
          {showTranscript && (
            <span className={styles.audioRecebidoTranscricao}>Ver transcrição</span>
          )}
        </div>
      </div>
    </div>
  );
}