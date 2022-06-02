import Default from './Default.js';
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// Initial Theme Placeholder - @todo to get populated by theme function
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

/*Begin Files*/

//Non Theme Specific Global
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

const SizingContainer = styled.div `
  @media (min-width: 768px){
    background: ${props => props.theme.mainContainerBg};
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border: 4px solid ${props => props.theme.colorPrimary1};
    padding: 30px;
  }
`

const StyledHeader = styled.header `
  //We really need to be pulling the style from window bars
  //Header style needs to be moved to windowbar style, as we will have more than h1 in the future.
  //so far, these styles need to be consistant.
  background-color: ${props => props.theme.colorPrimary1};
  width: 100%;
  min-height: 4.5em;
  margin-bottom: .5em;
  box-shadow: ${props => props.theme.colorPrimary2} 1px 1px 1px;
  border-radius: 10px;
  display:flex;
  align-items: center;
  h1{
    margin-left: 12px;
  }
  @media (min-width: 768px){
  }
`



function App() {
  return (
<>
<GlobalStyle theme={initialTheme} />
<ThemeProvider theme={initialTheme}>

  <SizingContainer>
    <Header />
    <Default />
  </SizingContainer>

</ThemeProvider>
</>
  );
}

function Header(){
  return(
      <StyledHeader>
        <h1>HabitWrangler</h1>
      </StyledHeader>
  )
}




export default App;
