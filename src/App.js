import Default from './Default.js';
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// Initial Theme Placeholder - @todo to get populated by theme function
const initialTheme = {
  fontColor1: `#dbdbdb`,
  fontColor2: '#9f9fa0',
  colorActive1: '#f20000',
  colorPrimary1: '#b22e0b',
  colorPrimary2: 'orange',
  colorSecondary1: '#2c2c2c',
  colorSecondary2: '#9f9fa0',
  colorSecondary3: '#242424',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
}

/*Begin Files*/

//Non Theme Specific Global
const GlobalStyle = createGlobalStyle`
body{
  background: ${props => props.theme.colorSecondary3};
  color: ${props => props.theme.fontColor2};
  font-family: ${props => props.theme.fontFamily};
}
h1{
  font-size: 1.5em;
  color: ${props => props.theme.fontColor1};
  margin:0;
  line-height: 5px;
  padding: 10px 0;
}
`

const SizingContainer = styled.div `
  @media (min-width: 768px){
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`

const StyledHeader = styled.header `
  //We really need to be pulling the style from window bars
  //Header style needs to be moved to windowbar style, as we will have more than h1 in the future.
  //so far, these styles need to be consistant.
  background-color: ${props => props.theme.colorPrimary1};
  width: 100%;
  min-height: 3em;
  border-radius: 10px;
  display:flex;

  align-items: center;
  @media (min-width: 768px){
  }
`

const StyledHeaderInner = styled.div`
width:100%;
display: flex;
justify-content: space-between;
margin-left: .4em;
margin-right: .4em;  
`



function App() {
  return (
<>
<GlobalStyle theme={initialTheme} />
<ThemeProvider theme={initialTheme}>

  <SizingContainer>

    <Default />
  </SizingContainer>

</ThemeProvider>
</>
  );
}

function Header(){
  return(
      <StyledHeader>
        <StyledHeaderInner>
        <h1></h1>
        </StyledHeaderInner>
      </StyledHeader>

  )
}




export default App;
