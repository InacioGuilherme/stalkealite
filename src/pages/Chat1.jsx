import styles from "./Chat1.module.css";

import ChatHeader from "../components/ChatComponents/ChatHeader";
import ChatBody from "../components/ChatComponents/ChatBody";
import ChatInput from "../components/ChatComponents/ChatInput";

import ChatMessageTime from "../components/ChatComponents/ChatMessageTime";
import ChatMessageOther from "../components/ChatComponents/ChatMessageOther";
import ChatMessageMe from "../components/ChatComponents/ChatMessageMe";
import ChatAudioOther from "../components/ChatComponents/ChatAudioOther";

export default function Chat1() {
  return (
    <div className={styles.chatPageChat1}>
      <ChatHeader />

      <ChatBody>
        {/* Horário */}
        <ChatMessageTime time="07:54" />

        {/* Mensagem recebida normal */}
        <ChatMessageOther 
          text="G adivinha o que vc esqueceu aqui? kkkk"
        />
        
        {/* Mensagem recebida COM RESPOSTA */}
        <ChatMessageOther 
          text="Não"
          replyTo={{
            label: "respondeu a você",
            text: "Na sua prima?"
          }}
        />

        {/* Mensagem recebida sem avatar com blur */}
        <ChatMessageOther 
          text="Casa de Maria"
          blurWords={["Maria"]}
          showAvatar={false}
        />

        {/* Nova data */}
        <ChatMessageTime time="ONTEM, 21:34" />

        {/* Mensagem enviada com reação */}
        <ChatMessageMe 
          text="Tá bom 😘"
          reaction="❤️"
        />
        
        {/* Mensagem enviada COM RESPOSTA */}
        <ChatMessageMe 
          text="Vou passar aí blz??"
          replyTo={{
            label: "Você respondeu",
            text: "G adivinha o que vc esqueceu aqui?"
          }}
        />

        {/* Mensagem enviada simples */}
        <ChatMessageMe 
          text="e depois"
          reaction="👍"
        />

        {/* Nova data */}
        <ChatMessageTime time="HOJE, 15:22" />

        {/* Áudios */}
        <ChatAudioOther duration="0:32" />
        <ChatAudioOther duration="0:07" showAvatar={false} />
      </ChatBody>

      <ChatInput />
    </div>
  );
}