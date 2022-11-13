import styled from "styled-components";
import Status from './Status'
import TaskList from './Tasks.js'
import {useState, createContext} from "react";


const WindowDivider = styled.div`
  margin-top: .4em;
  margin-bottom: .4em;
  `

export const ModalContext = createContext();

//Entry Component
const Default = () =>{

    const [isOpenModal, setIsOpenModal] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [modalTitle, setModalTitle] = useState("default message");
    // eslint-disable-next-line no-unused-vars
    const [modalBody, setModalBody] = useState("default body");
    return(
        <>

            <ModalContext.Provider value={{ setIsOpenModal, setModalTitle, setModalBody, isOpenModal }}>
            <WindowDivider/>
            <Status/>
            <WindowDivider/>
            <TaskList/>
            </ModalContext.Provider>
        </>
    )
}



//Exports
export default Default;