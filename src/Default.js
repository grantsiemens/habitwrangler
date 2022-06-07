import styled from "styled-components";
import {useState} from 'react';

const Flex = styled.div`
    display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
`;

const StyledWindow = styled.div`
  border: ${props => props.theme.colorPrimary1} 5px solid;
  display: block;
  border-radius: 10px;
  margin-top: 1em;
  margin-bottom: 1em;
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
    border-radius: 1em;
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


const StyledTaskContainer = styled.div`
  display:flex;
  align-items: center;
  height: 2.5em;
  margin-top: 5px;
  margin-bottom: 5px;
  background: ${props => props.theme.colorSecondary1};

`

const StyledTask = styled.div`
  width: 100%;
  display: flex;
  
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
  stroke: white;
  stroke-width: 2px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => props.checked ? 'salmon' : 'papayawhip'};
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
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
            <Status/>
            <TaskList/>
        </>
    )
}

//Components
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

function Window(props){
    return(
        <StyledWindow>
            <WindowTitleBar><h1>{props.title}</h1></WindowTitleBar>
            <WindowPane>
                {props.content}
            </WindowPane>
        </StyledWindow>
    )
}
function Status(){
    return(
            <Window title="this week" content={
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

const TaskList = () => {
return (
    <Window title="tasks" content={
        <StyledTaskList>
        <Flex column>
            <StyledTaskContainer><Task taskName="Task Name" checked={false} /></StyledTaskContainer>
            <StyledTaskLineBreak/>
            <StyledTaskContainer> <Task taskName="Task Name" checked={true} /></StyledTaskContainer>

        </Flex>
            </StyledTaskList>


    }
            />
)
}

const Task = (props) => {
const [checked, setChecked] = useState(false);

const handleChange = () => {
    setChecked(prevState => !prevState);
};

    return(

            <StyledTask>
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

export default Default;