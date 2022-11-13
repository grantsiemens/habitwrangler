import styled, {createGlobalStyle} from "styled-components/macro";


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

export  {initialTheme, GlobalStyle, SizingContainer}