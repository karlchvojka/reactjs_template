import styled from 'styled-components';

import {
  cyberFont,
  darkBlue,
  darkGrey,
  headerFont,
  headerGrey,
  paraFont,
  midBlue,
  lightBlue,
  lightestBlue,
  spacing
} from './css_vars.js';

const StyledApp = styled.div`
    background-color: ${darkGrey};
    background-size: 75px 75px;
    background-image:
      linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent),
      linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent);

  header {
    background-color: ${headerGrey};
    padding:20px;
    text-align:center;
  }
  #mainWrap {
    height:100vh;
    max-width:80%;
    margin: 0 auto;

    .gridWrap {
      background-color: ${headerGrey};
      border-radius: 10px;
      box-shadow: 2px 1px 8px 5px rgba(48,191,242,0.75);
      margin-top:50px;
      padding:${spacing};
      -webkit-box-shadow: 2px 1px 8px 5px rgba(48,191,242,0.75);
      -moz-box-shadow: 2px 1px 8px 5px rgba(48,191,242,0.75);

      h2 {
        text-align:center;
        margin-bottom: ${spacing};
      }
      p {
        text-align: center;
      }

      .theChallenge {
        margin-top:20px;
        text-align: center;
      }
    }
  }
`

export default StyledApp;
