import styled from "styled-components";
import {useState} from 'react';
//Icons
import {ReactComponent as OverflowIco } from './assets/images/overflow.svg';

//Styled Components
const SvgStyled = styled.div`
display: flex;  
fill: ${props => props.theme.colorSecondary2};

`;

const Flex = styled.div`
    display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
`;

const StyledWindow = styled.div`
  border-left: ${props => props.theme.colorPrimary1} .3em solid;
  border-right: ${props => props.theme.colorPrimary1} .3em solid;
  border-bottom: ${props => props.theme.colorPrimary1} .3em solid;
  display: block;
  border-radius: 6px;
  background: ${props => props.theme.colorSecondary1};
`

const WindowDivider = styled.div`
  margin-top: .4em;
  margin-bottom: .4em;
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
`

const WindowPane = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 1em;
`;

const CurrentDay = styled.div`
    background: ${props => props.theme.colorSecondary1};
    display: flex;
    width: 40px; height: 40px;
    text-align: center;
    align-items: center;
    box-shadow: ${props => props.theme.colorPrimary2} 1px 1px 3px 1px;
    margin-left: 3px;
    margin-right: 3px;
    font-size: small;
    line-height: 1.1em;
`;


const ProgressBar = styled.div`
  background: ${props => props.theme.colorSecondary1};
  width: 33px; height: 33px;
  margin: 6px;
  box-shadow: inset 0.1em 0.1em 0.1em 0 rgba(255,255,255,0.6), inset -0.2em -0.2em 0.2em 0 rgba(0,0,0,0.5);
`;


const StyledTaskContainer = styled.div`
  display:flex;
  align-items: center;
  height: 2.5em;
  margin-top: 5px;
  margin-bottom: 5px;
  background: ${props => props.theme.colorSecondary3};

`

const StyledTask = styled.div`
  width: 100%;
  display: flex;
  padding: .5em;
  label{
    //make this programmable by checkbox status in Task component
  color: ${props => props.checkStatusUp ? props => props.theme.colorPrimary2 : props.theme.colorSecondary2};
  }

`

const StyledTaskList = styled.div`
width:100%;
`

const StyledTaskLineBreak = styled.div`
width: 100%;
height: 1px;
background: ${props => props.theme.colorSecondary2}; 
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
const Icon = styled.svg`
  fill: none;
  stroke: ${props => props.theme.colorSecondary2};
  stroke-width: .2em;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  margin-right: 1em;
  background: ${props => props.checked ? props => props.theme.colorPrimary1 : props => props.theme.colorSecondary2};
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${props => props.theme.colorPrimary2};
  }

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

//Entry Component
function Default(){

    return(
        <>
            <WindowDivider/>
            <Status/>
            <WindowDivider/>
            <TaskList/>
        </>
    )
}

//
//Rest of Components
//
const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked} >
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>

    </CheckboxContainer>
)

//Window Component
function Window(props){
    return(
        <StyledWindow>
            <WindowTitleBar>
                <WindowTitleBarContent>
                    {/*@todo style svgstyled and overflowico into a single function*/}
                    <h1 className="tPos{props.tPos}">{props.t}</h1><SvgStyled><OverflowIco/></SvgStyled>
                </WindowTitleBarContent>
            </WindowTitleBar>
            <WindowPane>{props.content}</WindowPane>
        </StyledWindow>
    )
}

//Status Row
function Status(){
    return(
            <Window t="stats" tPos="2" content={
                <Flex>
                    <ProgressBar/>
                    <ProgressBar/>
                    <CurrentDay>Mar 13</CurrentDay>
                    <ProgressBar/>
                    <ProgressBar/>
                    <ProgressBar/>
                    <ProgressBar/>
                </Flex>
                }
            />
    )
}


//Task List
const TaskList = () => {
    const data = [
        {taskName: "Wash dishes", complete: true},
        {taskName: "Eat food", complete: false}
    ]

return (
    <Window t="tasks" content={
        <StyledTaskList>
            {console.log(data)}
        <Flex column>
            {data.map((entry) => (
            <StyledTaskContainer><Task taskName={entry.taskName} checked={entry.complete} /></StyledTaskContainer>
                ))}

            <StyledTaskLineBreak/>
        </Flex>
            </StyledTaskList>


    }
            />
)
}

const Task = (props) => {
const taskApi = false;
const [checked, setChecked] = useState(taskApi);
//@todo send checked status back up for styledTask
const handleChange = () => {
    setChecked(prevState => !prevState);
    //@todo send / receive data with api
};
    return(

            <StyledTask
            checkStatusUp={checked}
            >
                <div>
                <label>
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                    />
                    <span>{props.taskName}</span>
                </label>
                </div>
            </StyledTask>

    )
}


//Exports
export default Default;