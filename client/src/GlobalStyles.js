import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;

body {
  margin: 0;
  padding: 0;
    background-image: linear-gradient(to right top, #ffc75f, #ffbd61, #ffb363, #ffaa67, #ffa16b, #ff9a6e, #ff9372, #ff8c76, #ff847b, #ff7d81, #ff7689, #ff6f91);
    background-size: cover;
    background-position:  center;
    background-repeat: no-repeat; 
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;

}
`

export default GlobalStyles
