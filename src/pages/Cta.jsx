import React, { useEffect, useRef, useState } from 'react';
import styles from './Cta.module.css';

// Importando as imagens
import logo from '../assets/cta/logo-vert-transparente.png';
import avatarProfile from '../assets/cta/avatar-profile.jpeg';
import avatarDepoimento1 from '../assets/cta/avatar-depoimento-1.jpg';
import avatarDepoimento2 from '../assets/cta/avatar-depoimento-2.jpg';
import avatarDepoimento3 from '../assets/cta/avatar-depoimento-3.jpg';
import fotoblur1 from '../assets/cta/fotoblur1.jpg';
import fundomaps from '../assets/cta/fundomaps.png';
import nudesChat1 from '../assets/cta/nudes1-chat1.jpg';
import nudesChat2 from '../assets/cta/nudes1-chat2.jpg';
import packChat from '../assets/cta/pack1.1.chat2.png';
import perfilSemFoto from '../assets/cta/perfil-sem-foto.jpeg';
import post1 from '../assets/cta/post1.png';
import post2 from '../assets/cta/post2.png';

const Cta = () => {
  const [countdown, setCountdown] = useState('10:00');
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTest, setActiveTest] = useState(0);
  const [popup, setPopup] = useState({ show: false, text: '' });
  const [messages, setMessages] = useState([]);
  const chatRef = useRef(null);

  // Gerar nome aleatório uma vez
  const [username] = useState(() => {
    const names = ['Carol', 'Júlia', 'Amanda', 'Beatriz', 'Camila', 'Fernanda', 'Gabriela', 'Isabella', 'Larissa', 'Mariana'];
    const numbers = Math.floor(Math.random() * 999);
    return `${names[Math.floor(Math.random() * names.length)]}${numbers}`;
  });

  // Timer - 10 minutos
  useEffect(() => {
    const dur = 600000; // 10 minutos em milissegundos
    const key = 'timer_start';
    let start = localStorage.getItem(key);
    
    if (!start) {
      start = Date.now().toString();
      localStorage.setItem(key, start);
    }
    
    start = parseInt(start);

    const update = () => {
      const rem = Math.max(0, dur - (Date.now() - start));
      const m = Math.floor(rem / 60000);
      const s = Math.floor((rem % 60000) / 1000);
      setCountdown(`${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
      
      if (rem === 0) {
        localStorage.removeItem(key);
      }
    };
    
    update();
    const int = setInterval(update, 1000);
    return () => clearInterval(int);
  }, []);

  // Chat
  useEffect(() => {
    const msgs = [
      { text: 'E aí, bora ver tudo do instagram?', sent: false },
      { text: 'Boraa, vou comprar meu acesso VIP 🔥', sent: true }
    ];
    let i = 0;
    const tos = [];
    const animate = () => {
      if (i >= msgs.length) {
        tos.push(setTimeout(() => { setMessages([]); i = 0; animate(); }, 1500));
        return;
      }
      setMessages(p => [...p, { ...msgs[i], typing: true, id: Date.now() }]);
      tos.push(setTimeout(() => {
        setMessages(p => [...p.filter(m => !m.typing), { ...msgs[i], typing: false, id: Date.now() }]);
        tos.push(setTimeout(() => { i++; animate(); }, 2000));
      }, 1500));
    };
    tos.push(setTimeout(animate, 1000));
    return () => tos.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    const int = setInterval(() => setActiveTest(p => (p + 1) % 3), 5000);
    return () => clearInterval(int);
  }, []);

  const testimonials = [
    { avatar: avatarDepoimento1, name: 'Marcosvianad', time: '3h', text: 'Achei q era golpe mas testei msm assim. Paguei, em 3 min recebi o acesso. Tava tudo lá: directs, fotos q ele apagava, até a localização funcionou. Valeu cada centavo.' },
    { avatar: avatarDepoimento2, name: 'Gieselferreira_34', time: '5h', text: 'O acesso foi super rapido. Paguei no pix e em menos de 2 min já tava vendo tudo. Os stories "melhores amigos" q ele postava escondido de mim. Sistema funciona msm de verdade.' },
    { avatar: avatarDepoimento3, name: 'o__prozind34', time: '1d', text: 'Na versão completa testei com @ do boy e vi um monte de coisa. Localização, fotos escondidas, até conversas apagadas. Foi exatamente como mostrou.' }
  ];

  const faqs = [
    { q: 'A ferramenta realmente funciona?', a: 'Sim! O Stalkea.ai utiliza tecnologia avançada para acessar dados do Instagram de forma completamente invisível. Milhares de usuários já confirmaram a eficácia da ferramenta.' },
    { q: 'A pessoa vai saber que eu stalkeei o perfil dela?', a: 'Não! O acesso é 100% invisível. A pessoa não recebe nenhuma notificação e não há rastros de que você visualizou o perfil dela.' },
    { q: 'Funciona em perfis privados?', a: 'Sim! O Stalkea.ai funciona em qualquer tipo de perfil, incluindo perfis privados, contas verificadas e perfis comerciais.' },
    { q: 'Preciso instalar alguma coisa?', a: 'Não! O Stalkea.ai funciona totalmente na nuvem. Você só precisa acessar pelo navegador, sem precisar baixar ou instalar nada no seu dispositivo.' },
    { q: 'Como funciona a garantia?', a: 'Oferecemos garantia de 30 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas.' },
    { q: 'Quanto tempo tenho acesso?', a: 'O acesso é vitalício! Uma vez adquirido, você pode usar a ferramenta para sempre, sem mensalidades ou renovações.' }
  ];

  // Reduzido para apenas 3 fotos
  const galleryImages = [
    nudesChat1,
    nudesChat2,

  ];

  return (
    <div className={styles.body}>
      <div className={styles.bg}>
        {[0, 1, 2].map(i => <div key={i} className={styles.orb} style={{ '--delay': `${i * 2}s` }} />)}
      </div>

      <div className={styles.timer}>
        <div className={styles.timerWrap}>
          <div>⏱️</div>
          <div>
            <strong>Finalize sua compra em <span className={styles.red}>{countdown}</span></strong>
            <span>Ao zerar o cronômetro, nunca mais será possível acessar o instagram de <span className={styles.red}>{username}</span></span>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.hero}>
          <img src={logo} alt="Stalkea.ai" />
          <h1>A maior ferramenta de<br /><span className={styles.grad}>Stalker</span> do Brasil</h1>
          <p>Acesse tudo de qualquer perfil do Instagram de forma 100% invisível</p>
        </section>

        <div className={styles.profile}>
          <div className={styles.pTop}>
            <div className={styles.ava}><img src={avatarProfile} alt={`Avatar de ${username}`} /></div>
            <div>
              <h2>
                {username}
                <svg className={styles.verified} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </h2>
              <p>@bgk.eduarda</p>
            </div>
          </div>
          <div className={styles.stats}>
            <div><span>1</span><span>posts</span></div>
            <div><span>912</span><span>seguidores</span></div>
            <div><span>3.356</span><span>seguindo</span></div>
          </div>
          <div className={styles.bio}>@pvdgabizinhaaaa{'\n'}@brocasito</div>
        </div>

        <div className={styles.badge}>
          <div className={styles.badgeContent}>
            <div className={styles.badgeIcon}>✓</div>
            <div className={styles.badgeText}>
              <strong>Acesso VIP liberado para {username}</strong>
              <span>Todas as informações do perfil estão disponíveis</span>
            </div>
          </div>
        </div>

        <div className={styles.scroll}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <section className={styles.features}>
          <div className={styles.card}>
            <div className={styles.head}>
              <div className={styles.icon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div><h3>Veja Mídias de {username}</h3><p>Veja todas as mídias recebidas e enviadas, incluindo itens apagados</p></div>
            </div>
            <div className={styles.gridMedia}>
              <div className={styles.large} onClick={() => setPopup({ show: true, text: 'às mídias' })}>
                <img src={fotoblur1} alt="Mídia blur" />
                <div className={styles.lock}>
                  <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
              </div>
              {galleryImages.map((img, i) => (
                <div key={i} className={styles.item} onClick={() => setPopup({ show: true, text: 'às mídias' })}>
                  <img src={img} alt={`Mídia ${i + 1}`} />
                  <div className={styles.lock}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.head}>
              <div className={styles.icon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div><h3>Localização em tempo real</h3><p>Veja onde {username} está agora e os últimos locais por onde passou</p></div>
            </div>
            <div className={styles.map}>
              <div className={styles.mapWrap}>
                <img src={fundomaps} alt="Mapa de localização" />
                <div className={styles.pin}><img src={perfilSemFoto} alt="Pin de localização" /></div>
              </div>
              <div className={styles.mapInfo}>
                <div><div>Localização Atual</div><div>@bgk.eduarda</div></div>
                <button onClick={() => setPopup({ show: true, text: 'à localização' })}>Ver</button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.head}>
              <div className={styles.icon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div><h3>Stories e posts ocultos</h3><p>Veja stories de "Melhores Amigos" e posts que {username} ocultou de você</p></div>
            </div>
            <div className={styles.stories}>
              {[post1, post2].map((img, i) => (
                <div key={i} className={styles.story} onClick={() => setPopup({ show: true, text: 'aos stories' })}>
                  <div className={styles.storyBlur}>
                    <img src={img} alt={`Story ${i + 1}`} />
                  </div>
                  <div className={styles.storyLock}>
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="28" height="28">
                      <rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <p>Conteúdo restrito</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.head}>
              <div className={styles.icon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div><h3>Mensagens do Direct</h3><p>Veja todas as mensagens de {username}, incluindo mensagens temporárias</p></div>
            </div>
            <div className={styles.chat}>
              <div className={styles.chatHead}>
                <div className={styles.chatUser}>
                  <div className={styles.chatAva} style={{ backgroundImage: `url(${avatarProfile})` }} />
                  <div><div>{username}</div><div className={styles.status}><span />online</div></div>
                </div>
                <div className={styles.actions}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className={styles.msgs} ref={chatRef}>
                {messages.map(m => (
                  <div key={m.id} className={`${styles.msg} ${m.sent ? styles.sent : styles.recv}`}>
                    {m.typing ? <div className={styles.typing}><span /><span /><span /></div> : <div>{m.text}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className={styles.scroll}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <section className={styles.pricing}>
          <div className={styles.pHead}>
            <img src={logo} alt="Stalkea.ai" />
            <h2>Com o <span className={styles.grad}>Stalkea.ai</span> você vai ter<br />acesso completo ao instagram de<br /><span className={styles.high}>{username}</span> por apenas:</h2>
          </div>
          <div className={styles.pCard}>
            <div className={styles.old}>De: R$ 279,90</div>
            <div className={styles.price}><span>R$</span><span>37</span><span>,00</span></div>
            <div className={styles.badges}>
              <div className={styles.track}>
                {[...Array(2)].map((_, g) => (
                  <React.Fragment key={g}>
                    <span><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="14" height="14"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Pagamento único</span>
                    <span><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="14" height="14"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>Acesso imediato</span>
                    <span><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="14" height="14"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>Pagamento seguro</span>
                    <span><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="14" height="14"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>30 dias de garantia</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <ul className={styles.benefits}>
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg><span>Todas as mensagens do direct de <strong>{username}</strong></span></li>
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg><span>Todas as fotos sem censura (incluindo apagadas)</span></li>
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg><span>Localização em tempo real e locais que esteve</span></li>
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg><span>Alerta sempre que <strong>{username}</strong> interagir com alguém</span></li>
            <li><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg><span>2 bônus surpresa avaliados em R$120,00</span></li>
          </ul>
          <a href="https://go.perfectpay.com.br/PPU38CQ4ST0?utm_source=direto&src=www.google.com&sck=1769366702489_17693666064604" className={styles.cta}>
            <span>Acessar tudo agora mesmo</span>
            <span>Acesso liberado em até 2 minutos</span>
          </a>
        </section>

        <div className={styles.scroll}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        <section className={styles.test}>
          <h2>Veja o que falam as pessoas que usam o <span className={styles.grad}>Stalkea.ai</span></h2>
          <div className={styles.carousel}>
            <div className={styles.cTrack} style={{ transform: `translateX(-${activeTest * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className={styles.slide}>
                  <div className={styles.tCard}>
                    <div className={styles.tHead}>
                      <img src={t.avatar} alt={t.name} />
                      <div><h4>{t.name}</h4><span>{t.time}</span></div>
                    </div>
                    <p>{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button 
                  key={i} 
                  className={`${styles.dot} ${activeTest === i ? styles.active : ''}`} 
                  onClick={() => setActiveTest(i)}
                  aria-label={`Ver depoimento ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <div className={styles.alert}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>As informações acessadas são <strong>extremamente sensíveis</strong>. Use com responsabilidade.</span>
        </div>

        <section className={styles.faq}>
          <h2>Perguntas Frequentes</h2>
          {faqs.map((item, i) => (
            <div key={i} className={styles.faqItem}>
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                aria-expanded={activeFaq === i}
              >
                <span>{item.q}</span>
                <span className={activeFaq === i ? styles.active : ''}>
                  {activeFaq === i ? '−' : '+'}
                </span>
              </button>
              {activeFaq === i && (
                <div className={styles.ans}>
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        <div className={styles.guar}>
          <div className={styles.gIcon}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3>Garantia de 30 Dias</h3>
          <p>Teste sem risco! Se não gostar ou por algum motivo não se adaptar, devolvemos 100% do seu dinheiro.</p>
        </div>

        <div className={styles.finalCta}>
          <a href="https://go.perfectpay.com.br/PPU38CQ4ST0?utm_source=direto&src=www.google.com&sck=1769366702489_17693666064604" className={styles.ctaFinal}>
            <span>🔥 Quero acessar tudo por R$ 37,00</span>
            <span>Última chance! Oferta por tempo limitado</span>
          </a>
        </div>
      </div>

      {popup.show && (
        <>
          <div className={styles.overlay} onClick={() => setPopup({ show: false, text: '' })} />
          <div className={styles.popup}>
            <div>⚠️</div>
            <h3>Ação bloqueada</h3>
            <p>Seja um membro VIP do Stalkea.ai para ter acesso {popup.text}</p>
            <button onClick={() => { 
              setPopup({ show: false, text: '' }); 
              document.querySelector(`.${styles.pricing}`)?.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
              }); 
            }}>
              Adquirir Acesso VIP
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cta;
