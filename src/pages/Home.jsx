import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import MatrixCanvas from '../components/HomeComponents/MatrixCanvas';
import HeroSection from '../components/HomeComponents/HeroSection';
import InstagramLogin from '../components/HomeComponents/InstagramLogin';
import ConfirmModal from '../components/HomeComponents/ConfirmModal';

const Home = () => {
  const navigate = useNavigate();
  const [titleText, setTitleText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isBadgesVisible, setIsBadgesVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [statsNumber, setStatsNumber] = useState(84693);
  const [dayOfWeek, setDayOfWeek] = useState('domingo');
  const [showUsernameInput, setShowUsernameInput] = useState(false);
  const [username, setUsername] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [modalProfileData, setModalProfileData] = useState(null);
  const [showInstagramLogin, setShowInstagramLogin] = useState(false);

  // Animação de digitação
  useEffect(() => {
    const fullTitle = "O que seu Cônjuge faz quando está no Instagram?";
    const fullSubtitle = "Descubra a verdade sobre qualquer pessoa, acessando o instagram dela!";
    
    const typeAnimation = async () => {
      // Digitar título
      for (let i = 0; i <= fullTitle.length; i++) {
        setTitleText(fullTitle.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 60));
      }

      await new Promise(resolve => setTimeout(resolve, 200));

      // Digitar subtítulo
      for (let i = 0; i <= fullSubtitle.length; i++) {
        setSubtitleText(fullSubtitle.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 60));
      }

      setIsButtonVisible(true);
      await new Promise(resolve => setTimeout(resolve, 300));
      setIsBadgesVisible(true);
      await new Promise(resolve => setTimeout(resolve, 300));
      setIsStatsVisible(true);
    };

    const timer = setTimeout(() => {
      typeAnimation();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Animar número de perfis
  useEffect(() => {
    if (!isStatsVisible) return;

    const savedValue = localStorage.getItem('stats_number');
    let current = savedValue ? parseInt(savedValue) : 84693;
    
    if (!savedValue) {
      localStorage.setItem('stats_number', current.toString());
    }

    setStatsNumber(current);

    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 21) + 11;
      current += increment;
      localStorage.setItem('stats_number', current.toString());
      setStatsNumber(current);
    }, 1000);

    return () => clearInterval(interval);
  }, [isStatsVisible]);

  // Obter dia da semana
  useEffect(() => {
    const days = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    const today = new Date();
    setDayOfWeek(days[today.getDay()]);
  }, []);

  const handleEspionarClick = () => {
    setShowUsernameInput(true);
  };

  const handleUsernameSubmit = () => {
    const cleanUsername = username.trim().replace(/^@+/, '');
    
    if (cleanUsername.length < 3) {
      alert('Digite um nome de usuário válido!');
      return;
    }

    const mockProfileData = {
      profileImageUrl: `https://i.pravatar.cc/150?u=${cleanUsername}`,
      fullName: 'João Silva',
      bio: 'Vivendo a vida! ✨\nApaixonado por viagens e fotografia 📸\n📍 São Paulo, Brasil',
      postCount: Math.floor(Math.random() * 100) + 10,
      followersCount: Math.floor(Math.random() * 10000) + 1000,
      followingCount: Math.floor(Math.random() * 500) + 50,
      is_private: Math.random() > 0.7
    };

    setModalProfileData(mockProfileData);
    setShowConfirmModal(true);
  };

  const handleConfirmModal = async () => {
    setShowConfirmModal(false);
    setShowInstagramLogin(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleUsernameSubmit();
    }
  };

  return (
    <div className={styles.homePage}>
      <MatrixCanvas />
      
      {!showInstagramLogin ? (
        <>
          <HeroSection
            titleText={titleText}
            subtitleText={subtitleText}
            isButtonVisible={isButtonVisible}
            isBadgesVisible={isBadgesVisible}
            username={username}
            showUsernameInput={showUsernameInput}
            onEspionarClick={handleEspionarClick}
            onUsernameChange={(e) => setUsername(e.target.value)}
            onUsernameSubmit={handleUsernameSubmit}
            onKeyPress={handleKeyPress}
          />
          
          <div className={`${styles.homeStatsContainer} ${isStatsVisible ? styles.homeVisible : ''}`}>
            <p className={styles.homeStatsText}>
              <span className={styles.homeStatsNumber}>+{statsNumber.toLocaleString('pt-BR')}</span>{' '}
              perfis analisados hoje ({dayOfWeek})
            </p>
          </div>
        </>
      ) : (
        <InstagramLogin
          username={username}
          onLoginComplete={() => {
            navigate('/feed');
          }}
        />
      )}
      
      <ConfirmModal
        showConfirmModal={showConfirmModal}
        username={username}
        modalProfileData={modalProfileData}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmModal}
      />
    </div>
  );
};

export default Home;