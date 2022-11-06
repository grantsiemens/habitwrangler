import styled from "styled-components";
import {useState, useEffect} from 'react';
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
align-items: center;
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

const Modal = styled.div`
  position: fixed;
  left: 0;
  top:0;
  right: 0;
  bottom: 0;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;

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


    const handleClick = () => {
        return contextMenu()
    }

    const contextMenu = () => {
        return(
            <Modal>
                <h1>test</h1>
                <p>test test test</p>
            </Modal>
        )
    }

    return(
        <StyledWindow>
            <WindowTitleBar>
                <WindowTitleBarContent>
                    {/*@todo style svgstyled and overflowico into a single function*/}
                    <h1 className="tPos{props.tPos}">{props.t}</h1><SvgStyled onClick={handleClick}><OverflowIco/></SvgStyled>
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
                    <CurrentDay></CurrentDay>
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

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/task/week')
            .then((response) => response.json())
            .then((data) => {
                setTasks(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    function updateTask(id, status){
        fetch("http://localhost:3000/task/" + id +"/" + status)
            .catch((err) => {
                console.log(err.message);
            });
    }

    //Translate today to UTC time and filter weeks results by day
    const dateClient = new Date()
    const dateUtc = new Date(Date.UTC(dateClient.getUTCFullYear(), dateClient.getUTCMonth(), dateClient.getUTCDate()));
    const dateUtcSerialized = dateUtc.toISOString()
    //{tasks.filter(task => task.task_date === dateUtcSerialized).map((entry) => (
    //Use this once we fix broken date thing
    return (
        <Window t="tasks" content={
            <StyledTaskList>

            <Flex column>
                {tasks.map((entry, index) => (
                <Task key={index} taskId={entry.task_id} updateTask={updateTask} taskName={entry.task_name} taskStatus={entry.task_status} />
                    ))}
            </Flex>
                </StyledTaskList>
        }
                />
    )
}


const Task = (props) => {

const [checked, setChecked] = useState(props.taskStatus);

const handleChange = () => {
    setChecked(prevState => !prevState)
};

useEffect(() => {
    props.updateTask(props.taskId, checked);
    }, [props, checked])

    return(
        <StyledTaskContainer>
        <StyledTask checkStatusUp={checked} >
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
        </StyledTaskContainer>
    )
}


//Exports
export default Default;