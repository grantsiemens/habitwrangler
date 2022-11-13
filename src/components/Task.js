import {useEffect, useState} from "react";
import Checkbox from "./Checkbox";
import styled from "styled-components";

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

const Task = (props) => {

    const [checked, setChecked] = useState(props.taskStatus);

    const handleChange = () => {
        setChecked(prevState => !prevState)
    };

    useEffect(() => {
        props.updateTask(props.taskId, checked);
    }, [props, checked])

    return(
        <>
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
        </>
    )
}

export default Task