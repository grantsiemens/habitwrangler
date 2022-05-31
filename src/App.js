import Default from './Default.js';
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

//               //
// Initial Theme //
//               //
const initialTheme = {
  fontColor1: `orange`,
  bg: '#281e12',
  mainContainerBg: '#281e12',
  //Main Bar
  mainBarBg: '',
  mainBarBorder: '//red solid 1px',
  desktopContainerBorder: 'orange solid 1px',
  fontFamily: '"Arial Narrow", Arial, sans-serif',
}

//Styles: Define Global Style
const GlobalStyle = createGlobalStyle`
body{
  background: ${props => props.theme.bg};
  color: ${props => props.theme.fontColor1};
  font-family: ${props => props.theme.fontFamily};
}`

const Site = styled.div `

  `
//Styles: Desktop Mode
const FlexibleSite = styled.div `
  @media (min-width: 768px){
    background: ${props => props.theme.mainContainerBg};
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border: ${props => props.theme.desktopContainerBorder};
    padding: 30px;
  }
`
const HeaderHeading = styled.div`
  color: white;
  background: ${props => props.theme.mainBarBg};
  border: ${props => props.theme.mainBarBorder};
  display: block;
  border-radius: 3px;
  padding: 1px;
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
      <HeaderHeading><h1>Today</h1></HeaderHeading>
  )
}




export default App;
