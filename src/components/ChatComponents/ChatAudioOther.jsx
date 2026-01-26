import { useState, useRef, useEffect } from "react";
import styles from "./ChatAudioOther.module.css";
import avatarFallback from "../../assets/chat/perfil-sem-foto.jpeg";

export default function ChatAudioOther({ duration = "0:32", audioSrc = "", showTranscript = true }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasListened, setHasListened] = useState(false);
  const audioRef = useRef(null);
  const waveformRef = useRef(null);
  
  // Gerar alturas aleatórias para as barras (entre 15px e 35px)
  const [waveHeights] = useState(() => {
    return Array.from({ length: 34 }, () => Math.floor(Math.random() * 21) + 15);
  });

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
        setHasListened(true);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentProgress = 
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className={styles.message}>
      <img
        src={avatarFallback}
        alt=""
        className={styles.avatar}
        draggable={false}
      />

      <div className={styles.bubble}>
        <div className={styles.audioRecebido}>
          <button
            type="button"
            className={`${styles.playBtn} ${hasListened ? styles.listened : ''}`}
            onClick={togglePlay}
            aria-label="Reproduzir áudio"
          >
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          </button>

          <div className={styles.waveform} ref={waveformRef}>
            {waveHeights.map((height, i) => {
              const barProgress = (i / waveHeights.length) * 100;
              const isActive = barProgress <= progress;
              
              return (
                <div
                  key={i}
                  className={`${styles.waveBar} ${isPlaying ? styles.playing : ''} ${isActive ? styles.active : ''}`}
                  style={{ height: `${height}px` }}
                />
              );
            })}
          </div>

          <span className={styles.duration}>{duration}</span>

          {showTranscript && (
            <div className={styles.transcricao}>
              Ver transcrição
            </div>
          )}
        </div>
      </div>

      {audioSrc && (
        <audio
          ref={audioRef}
          src={audioSrc}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        />
      )}
    </div>
  );
}
