import styled from "styled-components";
import { useContext} from "react";
import {ModalContext} from "./Default";

//@ToDo Reuse these styled components to modal.. lots of overlap

const ContainerContainer = styled.div`
  top: 0; bottom: 0; left: 0; right: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`

  top: 0; bottom: 0; left: 0; right: 0;
  background-color: ${props => props.theme.colorSecondary3};
  position: absolute;
  opacity: 90%;
  transition: opacity 5s;
  filter: blur();
`;

const Container = styled.div`
  z-index: 99999;
  width: 500px;
  height: 500px;
  border-radius: 6px;
  background-color: ${props => props.theme.colorSecondary1};
  display: flex;
  flex-direction: column;
  border-left: ${props => props.theme.colorPrimary1} .3em solid;
  border-right: ${props => props.theme.colorPrimary1} .3em solid;
  border-bottom: ${props => props.theme.colorPrimary1} .3em solid;
`;

const ModalTitle = styled.div`
 display: inline-block;
  text-align: center;

`;

const TitleCloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TitleCloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

const ModalBody = styled.div`
padding: 15px;
`;

const TitleBar = styled.div`
  background-color: ${props => props.theme.colorPrimary1};
  display: flex;
  align-items: center;
  align-content: center;
`

const TitleBarContent = styled.div`
  margin-top: .5em;
  margin-bottom: .5em;
  display: flex;
  align-items: center;
`

const Modal = ({ modalTitle, modalBody, children }) => {
    const modalContext = useContext(ModalContext);
return (
    <>
    <ContainerContainer>
        <Background  onClick={() => {
            modalContext.setIsOpenModal(false);
        }}/>
        <Container>
            <TitleBar>
                <TitleBarContent>
            <TitleCloseButtonContainer>
            <TitleCloseButton
                onClick={() => {
                    modalContext.setIsOpenModal(false);
                }}
            >
               X
            </TitleCloseButton>
                </TitleCloseButtonContainer>
            <ModalTitle><h1>{modalTitle}</h1></ModalTitle>
                </TitleBarContent>
            </TitleBar>
            <ModalBody>
                {modalBody}
                {children}
            </ModalBody>
        </Container>
    </ContainerContainer>
    </>
)
}

export default Modal