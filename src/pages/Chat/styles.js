import styled from 'styled-components';

export const Container = styled.div`
  max-width: 70vw;
  height: 90vh;
  margin: 20px auto;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  background: rgb(255, 55, 0);
  border-radius: 10px;
`;

export const Conversation = styled.div`
  background: #fff;
  height: 90%;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const InputText = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 0;
  height: 44px;
  padding: 0 15px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const MessageSender = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    margin-left: 20px;
    border-radius: 22px;
    border: 0;
    width: 44px;
    height: 44px;
    background: #00bfff;
    transition: background 0.2s;

    cursor: pointer;

    &:hover {
      background: #fff;

      svg {
        fill: #00bfff;
      }
    }
  }
`;

export const ListMessage = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
`;
