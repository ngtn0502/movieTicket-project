import { createGlobalStyle } from 'styled-components';
import { FlexHCenter } from './mixin.js';

const GlobalStyles = createGlobalStyle`
    /* imdb mark */
.subtitle__imdb {
    ${FlexHCenter()}
    img {
      width: 2rem;
      height: 2rem;
      margin-right: 0.5rem;
    }
    span {
      font-size: 1rem;
    }
  }
`;

export default GlobalStyles;
