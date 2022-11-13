import styled from "styled-components";
import {ReactComponent as OverflowIco} from "../assets/images/overflow.svg";


const SvgStyled = styled.div`
display: flex;  
fill: ${props => props.theme.colorSecondary2};
`;


const StyledWindow = styled.div`
  border-left: ${props => props.theme.colorPrimary1} .3em solid;
  border-right: ${props => props.theme.colorPrimary1} .3em solid;
  border-bottom: ${props => props.theme.colorPrimary1} .3em solid;
  display: block;
  border-radius: 6px;
  background: ${props => props.theme.colorSecondary1};
`

const WindowTitleBar = styled.div`
  background-color: ${props => props.theme.colorPrimary1};
  width:100%;
  display:flex;
  align-items: center;
`
const WindowTitleBarContent = styled.div`
margin-top: .5em;
margin-bottom: .5em;  
display: flex;
align-items: center;
`

const WindowPane = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 1em;
`;



function Window(props){
    return(
        <StyledWindow>
            <WindowTitleBar>
                <WindowTitleBarContent>
                    {/*@todo styles svgstyled and overflowico into a single function*/}
                    <h1>{props.t}</h1><SvgStyled><OverflowIco onClick={()=>props.button[1]()}/></SvgStyled>
                </WindowTitleBarContent>
            </WindowTitleBar>
            <WindowPane>{props.content}</WindowPane>
        </StyledWindow>
    )
}

export default Window