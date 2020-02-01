import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  padding: 25px;
  margin: 150px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ff5500;
  border-radius: 10px;

  h1 {
    font-size: 40px;
    margin-bottom: 40px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 60px;
  }

  button {
    border-radius: 25px;
    width: 60%;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    background: #fff;
    color: #ff5500;
    border: 2px solid #ff5500;
    transition: background 0.2s;

    &:hover {
      background: #ff5500;
      color: #fff;
    }
  }
`;
