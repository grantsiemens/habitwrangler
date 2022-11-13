import styled from "styled-components";
import Checkbox from "./Checkbox";
import {useState} from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  padding: 0.5em;
  background: ${props => props.theme.colorSecondary1};
  display:block;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  color: ${props => props.theme.colorSecondary2};
  :focus {
    outline: none;
  }
`

const Label = styled.label`

`

const DaysOfWeek = styled.div`
display: flex;
`

const InputLabelContainer = styled.div`
  background-color: ${props => props.theme.colorSecondary3};
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
`

const TaskModal = () => {

    return(
        <>
<Container>
    <InputLabelContainer>
        <Label>
            Task Name
        <Input type="text" id="taskname"/>
        </Label>
    </InputLabelContainer>
    <InputLabelContainer>
        <Label>
            Days of Week
            <DaysOfWeek>
            <Checkbox/>
            <Checkbox/>
            <Checkbox/>
            <Checkbox/>
            <Checkbox/>
            <Checkbox/>
            <Checkbox/>
            </DaysOfWeek>
        </Label>
    </InputLabelContainer>
</Container>
        </>
    )
}

export default TaskModal