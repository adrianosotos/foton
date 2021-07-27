import { createGlobalStyle } from 'styled-components';
import SFProDisplay from '../fonts/SFProDisplayLight.woff'
import PlayfairDisplay from '../fonts/PlayfairDisplay.woff'
 
export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro Display';
    src: url(${SFProDisplay}) format('woff');
  }

  @font-face {
    font-family: 'Playfair Display';
    src: url(${PlayfairDisplay}) format('woff');
  }
  
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: teal;
    font-family: 'SF Pro Display';
    background-color:  #F2F2F2;
    letter-spacing: 0.5px;
  }

  html, body {
    height: 100%;
  }

`
