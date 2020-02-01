import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  height: 100vh;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: rgba(255, 55, 0, 0.9);

  h1 {
    font-size: 30px;
    margin-bottom: 40px;
  }

  h3 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 60px;
  }

  button {
    border-radius: 25px;
    width: 60%;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    background: #00bfff;
    color: #fff;
    border: 0;
    transition: background 0.2s;

    &:hover {
      background: #fff;
      color: #00bfff;
    }
  }
`;
