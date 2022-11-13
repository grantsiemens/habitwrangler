import styled from "styled-components"
import Window from './Window'
import {useState, useEffect, useContext} from 'react'
import {Flex} from '../styles/components'
import Task from './Task'
import {ModalContext} from "./Default";
import TaskModal from './TaskModal'


const StyledTaskList = styled.div`
width:100%;
`

/*
const StyledTaskLineBreak = styled.div`
width: 100%;
height: 1px;
background: ${props => props.theme.colorSecondary2}; 
`
*/

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
    ///const dateClient = new Date()
    //const dateUtc = new Date(Date.UTC(dateClient.getUTCFullYear(), dateClient.getUTCMonth(), dateClient.getUTCDate()));
    //const dateUtcSerialized = dateUtc.toISOString()
    //{tasks.filter(task => task.task_date === dateUtcSerialized).map((entry) => (
    //Use this once we fix broken date thing
    const modalContext = useContext(ModalContext);

   const addTask = () => {
       modalContext.setIsOpenModal(true);
       modalContext.setModalTitle("Add Task");
       modalContext.setModalBody(TaskModal);
   }

    return (
        <Window
            t="tasks"
            button ={
            addTask
            }
            content={
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




export default TaskList