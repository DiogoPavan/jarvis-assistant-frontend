import React, { useEffect, useState } from 'react';
import { MdSend } from 'react-icons/md';
import api from '../../services/api';

import {
  Container,
  Conversation,
  InputText,
  MessageSender,
  ListMessage,
} from './styles';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [session, setSession] = useState('');
  const [newMessage, setNewMessage] = useState('');

  function createMessage(data, origin) {
    data.forEach(item => {
      // eslint-disable-next-line no-param-reassign
      item.origem = origin;
    });

    setMessages(prevState => {
      return [...prevState, ...data];
    });
  }

  function handleInputChange(e) {
    setNewMessage(e.target.value);
  }

  async function handleClickButton() {
    createMessage([{ text: newMessage }], 'user');

    const response = await api.post('conversation', {
      sessionId: session,
      text: newMessage,
    });

    setNewMessage('');

    createMessage(response.data.result.output.generic, 'robot');
  }

  async function loadSession() {
    const response = await api.get('session');
    const { message, sessionId } = response.data;

    setSession(sessionId);

    createMessage(message.output.generic, 'robot');
  }

  useEffect(() => {
    loadSession();
  }, []);

  return (
    <Container>
      <Conversation>
        <ListMessage>
          {messages.map((msg, idx) => (
            <li key={String(idx)}>{msg.text}</li>
          ))}
        </ListMessage>
      </Conversation>
      <MessageSender>
        <InputText
          name="mensagem"
          placeholder="Digite uma mensagem"
          value={newMessage}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleClickButton}>
          <MdSend color="#fff" size={25} />
        </button>
      </MessageSender>
    </Container>
  );
}
