import styled from "styled-components";

const Flex = styled.div`
    display: flex;
`;

const StyledWindow = styled.div`
  border: ${props => props.theme.colorPrimary1} 5px solid;
  display: inline-block;
  box-shadow: ${props => props.theme.colorPrimary2} 1px 1px 1px;
  border-radius: 10px;
`

const WindowTitleBar = styled.div`
  background-color: ${props => props.theme.colorPrimary1};
  display: inline-block;
  width:100%;
  h1{
    margin-left: 12px;
  }
`

const WindowPane = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    box-shadow: inset 0.1em 0.1em 0.1em 0.1em rgba(255,255,255,0.6), inset -0.2em -0.2em 0.2em 0 rgba(0,0,0,0.5);
`;

const CurrentDay = styled.div`
    background: ${props => props.theme.colorSecondary1};
    width: 40px; height: 40px;
    text-align: center;
    box-shadow: ${props => props.theme.colorPrimary2} 1px 1px 3px 1px;
    margin-left: 3px;
    margin-right: 3px;
`;


const ProgressBar = styled.div`
  background: ${props => props.theme.colorSecondary1};
  width: 33px; height: 33px;
  margin: 6px;
  box-shadow: inset 0.1em 0.1em 0.1em 0 rgba(255,255,255,0.6), inset -0.2em -0.2em 0.2em 0 rgba(0,0,0,0.5);
`;

//Index Function
function Default(){

    return(
Dash()
    )
}

function Window(props){
    return(
        <StyledWindow>
            <WindowTitleBar><h1>{props.title}</h1></WindowTitleBar>
            <WindowPane>{props.content}</WindowPane>
        </StyledWindow>
    )
}
function Dash(){
    return(
            <Window title="Now" content={
                <Flex>
                    <ProgressBar/>
                    <ProgressBar/>
                    <CurrentDay>Nov 13</CurrentDay>
                    <ProgressBar/>
                    <ProgressBar/>
                    <ProgressBar/>
                    <ProgressBar/>
                </Flex>
                }
            />
    )
}

export default Default;