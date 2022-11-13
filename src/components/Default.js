import styled from "styled-components";
import Status from './Status'
import TaskList from './Tasks.js'
import Modal from "./Modal.js";
import {useState, createContext} from "react";


const WindowDivider = styled.div`
  margin-top: .4em;
  margin-bottom: .4em;
  `

export const ModalContext = createContext();

//Entry Component
const Default = () =>{

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [modalTitle, setModalTitle] = useState("default message");
    const [modalBody, setModalBody] = useState("default body");
    return(
        <>

            <ModalContext.Provider value={{ setIsOpenModal, setModalTitle, setModalBody }}>
                {isOpenModal && <Modal modalTitle={modalTitle} modalBody={modalBody} />}
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