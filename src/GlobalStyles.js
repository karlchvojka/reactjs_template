import { styled, createGlobalStyle } from 'styled-components';

import {
  cyberFont,
  darkBlue,
  darkGrey,
  headerFont,
  headerGrey,
  paraFont,
  midBlue,
  lightBlue,
  lightestBlue
} from './css_vars.js'

export const GlobalStyle = createGlobalStyle`

  /*
    START OF RESET
    http://meyerweb.com/eric/tools/css/reset/
     v5.0.1 | 20191019
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  	margin: 0;
  	padding: 0;
  	border: 0;
  	font-size: 100%;
  	font: inherit;
  	vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
  	display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
  	line-height: 1;
  }
  menu, ol, ul {
  	list-style: none;
  }
  blockquote, q {
  	quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  	content: '';
  	content: none;
  }
  table {
  	border-collapse: collapse;
  	border-spacing: 0;
  }

  /* END OF RESET */

  h1 {
    color: ${lightBlue};
    font-family: ${cyberFont};
    font-size:30px;
    font-weight:700;
    text-transform: uppercase;
  }

  h2 {
    color: ${lightBlue};
    font-family: ${cyberFont};
    font-size:25px;
    font-weight:700;
    text-transform: uppercase;
  }

  h3 {
    color: ${lightBlue};
    font-family: ${cyberFont};
    font-size:22px;
    font-weight:700;
    text-transform: uppercase;
  }

  h4 {
    color: ${lightBlue};
    font-family: ${cyberFont};
    font-size:20px;
    font-weight:700;
    text-transform: uppercase;
  }

  h5 {
    color: ${lightBlue};
    font-family: ${cyberFont};
    font-size:20px;
    font-weight:700;
    text-transform: uppercase;
  }

  h6 {
    color: ${lightBlue};
    font-family: ${cyberFont};
    font-size:20px;
    font-weight:700;
    text-transform: uppercase;
  }

  p {
    color: ${lightBlue};
    font-family: ${paraFont};
    font-size:18px;
    line-height:20px;
    margin-bottom:10px;
  }

  body {
    background-color: ${darkGrey};
  }

  .mainWrap {
    display:grid;
    grid-template-columns: 175px auto;
    height: auto;
    padding-top:70px;
  }
`;
