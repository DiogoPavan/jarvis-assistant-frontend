import { createGlobalStyle } from 'styled-components';
import bgimage from '../assets/bg.jpg';

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
 }

 html, body, #root {
   min-height: 100%;
 }

 body {
   background: #fff url(${bgimage}) no-repeat center;
   background-size: cover;
   -webkit-font-smoothing: antialiased !important;
 }

 body, input, button {
   color: #222;
   font-size: 14px;
   font-family: Arial, Helvetica, sans-serif;
 }

 button: {
   cursor: pointer;
 }
`;
