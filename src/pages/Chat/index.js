import React, { useEffect, useState } from 'react';
import { MdSend } from 'react-icons/md';
import api from '../../services/api';

import {
  Container,
  Conversation,
  InputText,
  MessageSender,
  ListMessage,
  MsgJarvis,
  MsgUser,
} from './styles';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [session, setSession] = useState('');
  const [newMessage, setNewMessage] = useState('');

  function createMessage(data, isJarvis) {
    data.forEach(item => {
      // eslint-disable-next-line no-param-reassign
      item.isJarvis = isJarvis;
    });

    setMessages(prevState => {
      return [...prevState, ...data];
    });
  }

  function handleInputChange(e) {
    setNewMessage(e.target.value);
  }

  async function handleClickButton() {
    createMessage([{ text: newMessage }], false);

    const response = await api.post('conversation', {
      sessionId: session,
      text: newMessage,
    });

    setNewMessage('');

    createMessage(response.data.result.output.generic, true);
  }

  async function loadSession() {
    const response = await api.get('session');
    const { message, sessionId } = response.data;

    setSession(sessionId);

    createMessage(message.output.generic, true);
  }

  useEffect(() => {
    loadSession();
  }, []);

  function handleKeyPress(event) {
    if (event.key === 'Enter' && newMessage !== '') {
      handleClickButton();
    }
  }

  return (
    <Container>
      <Conversation>
        <ListMessage>
          {messages.map((msg, idx) => {
            return msg.isJarvis ? (
              <MsgJarvis key={String(idx)}>{msg.text}</MsgJarvis>
            ) : (
              <MsgUser key={String(idx)}>{msg.text}</MsgUser>
            );
          })}
        </ListMessage>
      </Conversation>
      <MessageSender>
        <InputText
          name="mensagem"
          placeholder="Digite uma mensagem"
          value={newMessage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button type="button" onClick={handleClickButton}>
          <MdSend color="#fff" size={25} />
        </button>
      </MessageSender>
    </Container>
  );
}
