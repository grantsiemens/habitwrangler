import Default from './Default.js';
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

//               //
// Initial Theme //
//               //
const initialTheme = {
  fontColor1: `#efefef`,
  colorActive1: '#f20000',
  colorPrimary1: '#b22e0b',
  colorPrimary2: '#c49d27',
  colorSecondary1: '#2c2c2c',
  colorSecondary2: '#9f9fa0',
  colorBg: '#281e12',
  mainContainerBg: '#281e12',
  fontFamily: '"Arial Narrow", Arial, sans-serif',

}

//Styles: Define Global Style
const GlobalStyle = createGlobalStyle`
body{
  background: ${props => props.theme.colorBg};
  color: ${props => props.theme.fontColor1};
  font-family: ${props => props.theme.fontFamily};
}
h1{
  font-size: 1.5em
}
`

const Site = styled.div `

  `
//Styles: Desktop Mode
const FlexibleSite = styled.div `
  @media (min-width: 768px){
    background: ${props => props.theme.mainContainerBg};
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border: 4px solid ${props => props.theme.colorPrimary1};
    padding: 30px;
  }
`
const SectionHeading = styled.div`
  background-color: ${props => props.theme.colorPrimary1};
  display: inline-block;
  padding: 0px 10px 0px 10px;
`


function App() {
  return (
<>
<GlobalStyle theme={initialTheme} />
<ThemeProvider theme={initialTheme}>
<Site>
  <FlexibleSite>
    <Header />
    <Default />
  </FlexibleSite>
</Site>
</ThemeProvider>
</>
  );
}

function Header(){
  return(
      <p>header goes here</p>
  )
}



export {SectionHeading};
export default App;
