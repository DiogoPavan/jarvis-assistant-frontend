import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

export default function Main() {
  const history = useHistory();

  function handleClick() {
    history.push('/chat');
  }

  return (
    <Container>
      <h1>Olá, sou Jarvis Assistant</h1>
      <h3>Sou um assistente pessoal e estou à sua disposição!</h3>
      <button type="button" onClick={handleClick}>
        CONVERSE COMIGO
      </button>
    </Container>
  );
}
